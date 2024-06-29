import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  HttpStatus,
  HttpException,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ResetPasswordDto } from '../auth/dto/resetPassword.dto';
import {
  LoginResponseDto,
  logoutResponseDto,
  PassResponseDto,
} from 'src/modules/auth/dto/response.dto';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { EmailDto } from 'src/modules/auth/dto/email.dto';

@ApiTags('auth')
@ApiBearerAuth('access-token')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiResponse({ status: HttpStatus.OK, description: 'User login successful.' })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Invalid credentials.',
  })
  @ApiOperation({ summary: 'Log in a user' })
  @Post('login')
  async login(@Body() loginInfo: LoginDto): Promise<LoginResponseDto> {
    try {

      return await this.authService.login(loginInfo);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.UNAUTHORIZED);
    }
  }

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiResponse({ status: HttpStatus.OK, description: 'Logout successful.' })
  @ApiOperation({ summary: 'Log out the current user' })
  @Get('logout')
  async logout(@Req() req): Promise<logoutResponseDto> {
    try {
      const accessToken = req.user.accessToken;
      return await this.authService.logout(accessToken);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Access token retrieved successfully.',
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Invalid refresh token.',
  })
  @ApiOperation({
    summary: 'Retrieve a new access token using a refresh token',
  })
  @Get('getAccessToken/:refreshToken')
  async getAccessToken(
    @Param('refreshToken') refreshToken: string,
  ): Promise<LoginResponseDto> {
    try {
      return await this.authService.getAccessToken(refreshToken);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.UNAUTHORIZED);
    }
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description:
      'If your email address exists in our system, you will receive a password reset email.',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad request.',
  })
  @ApiOperation({ summary: 'Request a password reset' })
  @Post('requestPasswordReset')
  async requestPasswordReset(@Body() body: EmailDto): Promise<PassResponseDto> {
    try {
      return await this.authService.requestPasswordReset(body);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Password reset successfully.',
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Invalid or expired reset token.',
  })
  @ApiOperation({ summary: "Reset a user's password" })
  @Post('resetPassword')
  async resetPassword(@Body() body: ResetPasswordDto) {
    try {
      return await this.authService.resetPassword(body);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.UNAUTHORIZED);
    }
  }
}
