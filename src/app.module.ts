import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraylogModule } from 'nestjs-graylog';
import * as process from 'process';
import { AuthModule } from 'src/modules/auth/auth.module';
import { UserModule } from 'src/modules/user/user.module';
import { BranchModule } from 'src/modules/branch/branch.module';
import { configValidationSchema } from 'src/common/helper/config.schema';
import { MailModule } from 'src/modules/mail/mail.module';
import { ProgramModule } from 'src/modules/program/program.module';
import { EventModule } from 'src/modules/event/event.module';
import { LmsIntegrationsModule } from 'src/modules/lms-integrations/lms-integrations.module';

console.log('process.env.NODE_ENV', process.env.NODE_ENV);

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV || 'dev'}`,
      validationSchema: configValidationSchema,
      expandVariables: true,
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        autoLoadEntities: true,
        synchronize: configService.get<boolean>('TYPEORM_SYNCHRONIZE'),
        type: 'mysql',
        host: configService.get<string>('MYSQL_HOST'),
        port: configService.get<number>('MYSQL_PORT'),
        username: configService.get<string>('MYSQL_USER'),
        password: configService.get<string>('MYSQL_PASSWORD'),
        database: configService.get<string>('MYSQL_DATABASE_NAME'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
      }),
    }),
    ...(process.env.GRAYLOG_ENABLE === 'true'
      ? [
          GraylogModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
              servers: [
                {
                  host: configService.get<string>('GRAYLOG_HOST'),
                  port: configService.get<number>('GRAYLOG_PORT'),
                },
              ],
              hostname: configService.get<string>('GRAYLOG_HOSTNAME'),
            }),
          }),
        ]
      : []),
    AuthModule,
    UserModule,
    BranchModule,
    MailModule,
    ProgramModule,
    EventModule,
    LmsIntegrationsModule,
    GraylogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
