import { Body, Controller, Post } from '@nestjs/common';
import { MailService } from 'src/modules/mail/mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  // @Post('/send')
  // async sendMail(@Body() body: any): Promise<any> {
  //   const { to, user, password } = body;
  //   console.log(to, user, password);
  //   return await this.mailService.sendWelcomeEmail(to, user, password);
  // }
}
