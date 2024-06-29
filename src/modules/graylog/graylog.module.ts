import { GraylogModule, GraylogService } from 'nestjs-graylog';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
// import { GraylogProviderService } from './graylog.service';

@Module({
  imports: [
    GraylogModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        servers: [
          {
            host: configService.get('GRAYLOG_HOST'),
            port: +configService.get('GRAYLOG_PORT'),
          },
        ],
        facility: 'Portal',
      }),
    }),
  ],
  providers: [GraylogService],
  exports: [GraylogService],
})
export class GraylogProviderModule {}
