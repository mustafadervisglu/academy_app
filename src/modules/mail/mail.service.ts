import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { User } from 'src/modules/user/entities/user.entity';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  //testing for mail
  async sendWelcomeEmail(user: User, password: string) {
    return await this.mailerService.sendMail({
      to: user.email,
      subject: 'Welcome to Our App',
      template: 'welcome',
      context: {
        firstName: user.firstName,
        lastName: user.lastName,
        password: password,
        username: user.email,
      },
    });
  }
}
