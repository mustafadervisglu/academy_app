import { ConsoleLogger, Injectable } from '@nestjs/common';
// import { GraylogService } from 'nestjs-graylog';

@Injectable()
export class LogService {
  private readonly consoleLogger = new ConsoleLogger(LogService.name);
  // // constructor(private readonly graylog: GraylogService) {}

  log(message: any, context?: any) {
    this.consoleLogger.log(message, context);
    // await this.graylog.info(message, context);
  }

  error(message: any, context?: any) {
    this.consoleLogger.error(message, context);
    // await this.graylog.error(message, context);
  }

  warn(message: any, context?: any) {
    this.consoleLogger.warn(message, context);
    // await this.graylog.warning(message, context);
  }

  debug(message: any, context?: any) {
    this.consoleLogger.debug(message, context);
    // await this.graylog.debug(message, context);
  }

  verbose(message: any, context?: any) {
    this.consoleLogger.verbose(message, context);
    // await this.graylog.debug(message, context);
  }

  fatal(message: any, context?: any) {
    this.consoleLogger.fatal(message, context);
    // await this.graylog.critical(message, context);
  }
}
