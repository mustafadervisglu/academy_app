import { ConflictException, Controller, Get, UseGuards } from '@nestjs/common';
import { LmsIntegrationsService } from './lms-integrations.service';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../user/entities/user.entity';
import { CurrentUserDecorator } from 'src/modules/auth/lib/current-user.decorator';

@Controller('lms')
export class LmsIntegrationsController {
  constructor(private readonly lmsService: LmsIntegrationsService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('/login')
  async loginToLms(@CurrentUserDecorator() user: User) {
    // login to lms
    const url = await this.lmsService.GetLoginUrl(user.email);
    if (!url) {
      throw new ConflictException('Bu kullanıcı için LMS hesabı bulunamadı.');
    }
    return { result: url };
  }
}
