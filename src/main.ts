import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SecuritySchemeObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';
import { GraylogService } from 'nestjs-graylog';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@bull-board/express';
import { createBullBoard } from '@bull-board/api';
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter';
import { Queue } from 'bullmq';
import { HttpInterceptor } from 'src/common/http-interceptor/http-interceptor.interceptor';

async function bootstrap(
  options?: SecuritySchemeObject,
  name?: string,
): Promise<void> {
  const app = await NestFactory.create(AppModule);

  // Graylog configuration
  if (process.env.GRAYLOG_ENABLE === 'true') {
    const graylogService = app.get(GraylogService);

    // Preserve the original console functions
    const originalConsoleLog = console.log;
    const originalConsoleError = console.error;

    // Override console.log
    console.log = (...args: any[]): void => {
      const message = args.join(' ');
      // Log to Graylog
      graylogService.info(message).catch((err) => {
        originalConsoleError('Error logging to Graylog:', err);
      });
      // Log to the original console as well
      originalConsoleLog(...args);
    };

    // Override console.error
    console.error = (...args: any[]): void => {
      const message = args
        .map((arg) => {
          if (arg instanceof Error) {
            return arg.stack ? arg.stack : arg.toString();
          } else {
            return arg.toString();
          }
        })
        .join(' ');

      // Log to Graylog
      graylogService.error(message).catch((err) => {
        originalConsoleError('Error logging to Graylog:', err);
      });
      // Log to the original console as well
      originalConsoleError(...args);
    };
  }
  app.setGlobalPrefix('api');

  // Global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );

  app.useGlobalInterceptors(
    new HttpInterceptor(),
    new ClassSerializerInterceptor(app.get(Reflector)),
  );
  // Swagger configuration
  const swaggerConfig = new DocumentBuilder()
    .addBearerAuth(
      {
        // I was also testing it without prefix 'Bearer ' before the JWT
        description: `Bearer <JWT>`,
        name: 'Authorization',
        bearerFormat: 'Bearer', // I`ve tested not to use this field, but the result was the same
        scheme: 'Bearer',
        type: 'http', // I`ve attempted type: 'apiKey' too
        in: 'Header',
      },
      'access-token', // This name here is important for matching up with @ApiBearerAuth() in your controller!
    )
    .setTitle('Teacher Academy Foundation API')
    .setDescription(
      'The API documentation for Teacher Academy Foundation services.',
    )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: { persistAuthorization: true },
  });

  // Enable CORS
  app.enableCors();

  if (process.env.NODE_ENV === 'local') {
    // Bull Board configuration
    const serverAdapter = new ExpressAdapter();
    serverAdapter.setBasePath('api/queues');
    const redisConfig = {
      host: process.env.REDIS_HOST || 'localhost',
      port: parseInt(process.env.REDIS_PORT) || 6379,
    };

    // mailQueue is not used in the project, but I've added it to show how to add multiple queues
    const queueList = ['userQueue', 'mailQueue'];

    serverAdapter.setBasePath('/queues');

    const queues = queueList
      .map((qs) => new Queue(qs, { connection: redisConfig }))
      .map((q) => new BullMQAdapter(q));

    createBullBoard({
      queues,
      serverAdapter: serverAdapter,
    });
    app.use('/queues', serverAdapter.getRouter());
  }
  // Listen on the configured port
  const port = process.env.PORT;
  await app.listen(process.env.PORT, '0.0.0.0');

  console.log(`Server started on http://localhost:${port}/api`);
  console.log(`queues board http://localhost:${port}/queues`);
}

bootstrap();
