import { Module } from '@nestjs/common';
import { LmsIntegrationsService } from './lms-integrations.service';
import { LmsIntegrationsController } from './lms-integrations.controller';
import { HttpModule } from '@nestjs/axios';
import { TestLmsCommand } from './commands/test-lms.command';
import { GraylogProviderModule } from 'src/modules/graylog/graylog.module';
import { LogService } from '../../core/services/log.service';

@Module({
  imports: [HttpModule, GraylogProviderModule],
  providers: [LmsIntegrationsService, TestLmsCommand, LogService],
  controllers: [LmsIntegrationsController],
  exports: [LmsIntegrationsService],
})
export class LmsIntegrationsModule {}
