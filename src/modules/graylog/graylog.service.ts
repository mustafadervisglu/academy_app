import { GraylogService } from 'nestjs-graylog';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GraylogProviderService {
  constructor(private graylogService: GraylogService) {}

  async log(message: string, data: any, type: string) {
    switch (type) {
      case 'info':
        await this.graylogService.info(message, data);
        console.log('Graylog log: ', message, data);
        break;
      case 'error':
        await this.graylogService.error(message, data);
        console.error('Graylog log: ', message, data);
        break;
      case 'warning':
        await this.graylogService.warning(message, data);
        console.error('Graylog log: ', message, data);
        break;
      case 'notice':
        await this.graylogService.notice(message, data);
        console.log('Graylog log: ', message, data);
        break;
      case 'debug':
        await this.graylogService.debug(message, data);
        console.trace('Graylog log: ', message, data);
        break;
      default:
        await this.graylogService.info(message, data);
        console.log('Graylog log: ', message, data);
        break;
    }
  }
}
