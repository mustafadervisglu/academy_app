import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MoreThan, Repository } from 'typeorm';
import * as crypto from 'crypto';
import * as bcrypt from 'bcrypt';
import { SessionToken } from '../auth/entities/session-token.entity';
import { ResetPasswordDto } from '../auth/dto/resetPassword.dto';
import { UserService } from 'src/modules/user/user.service';
import {
  LoginResponseDto,
  logoutResponseDto,
  PassResponseDto,
} from 'src/modules/auth/dto/response.dto';
import { User } from 'src/modules/user/entities/user.entity';
import { EmailDto } from 'src/modules/auth/dto/email.dto';
import { UpdatePasswordResetTokenDto } from 'src/modules/auth/dto/updatePasswordResetToken.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
    @InjectRepository(SessionToken)
    private sessionTokenRepository: Repository<SessionToken>,
  ) {}

  async login(loginInfo: LoginDto): Promise<LoginResponseDto> {
    const user = await this.usersService.checkAuth(loginInfo);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = { id: user.id, email: user.username };
    return await this.createToken(user, payload);
  }

  async logout(accessToken: string): Promise<logoutResponseDto> {
    const sessionToken = await this.sessionTokenRepository.findOne({
      where: { accessToken: accessToken },
    });
    if (sessionToken) {
      console.log('sessionToken: ', sessionToken);
      sessionToken.expiresAt = new Date();
      sessionToken.expiresRefreshAt = new Date();
      await this.sessionTokenRepository.save(sessionToken);
    }
    return { message: 'Logout successful.' };
  }

  async getAccessToken(refreshToken: string): Promise<LoginResponseDto> {
    const sessionToken = await this.sessionTokenRepository.findOne({
      where: {
        refreshToken: refreshToken,
        expiresRefreshAt: MoreThan(new Date()),
      },
      relations: ['user'],
    });

    if (!sessionToken) {
      throw new UnauthorizedException('Invalid refresh token');
    }

    const payload = { id: sessionToken.user.id };
    return await this.createToken(sessionToken.user, payload);
  }

  async requestPasswordReset(emailDto: EmailDto): Promise<PassResponseDto> {
    try {
      const user = await this.usersService.findOneByEmail(emailDto);
      if (!user) {
        throw new NotFoundException('User not found');
      }

      if (user.resetTokenExpires && user.resetTokenExpires > new Date()) {
        throw new UnauthorizedException();
      }

      const resetToken = await this.generateRefreshToken();
      const hashedToken = await this.hashToken(resetToken);

      const updateTokenDto = new UpdatePasswordResetTokenDto();
      updateTokenDto.resetTokenHash = hashedToken;
      updateTokenDto.resetTokenExpires = new Date(Date.now() + 3 * 60 * 1000);

      await this.usersService.updatePasswordResetToken(user.id, updateTokenDto);

      // sendResetEmail
      console.log('Reset token: ', resetToken);
      return {
        message:
          'If your email address exists in our system, you will receive a password reset email.',
      };
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }

  async resetPassword(
    resetPasswordDto: ResetPasswordDto,
  ): Promise<PassResponseDto> {
    const { token, newPassword } = resetPasswordDto;
    const hashedToken = await this.hashToken(token);

    const user = await this.usersService.findOneByResetTokenHash(hashedToken);
    if (
      !user ||
      !user.resetTokenExpires ||
      user.resetTokenExpires <= new Date()
    ) {
      throw new UnauthorizedException('Invalid or expired reset token');
    }

    const newHashedPassword = await bcrypt.hash(newPassword, user.salt);

    const updateTokenDto = new UpdatePasswordResetTokenDto();
    updateTokenDto.newPassword = newHashedPassword;
    updateTokenDto.resetTokenHash = null;
    updateTokenDto.resetTokenExpires = null;

    await this.usersService.updatePasswordResetToken(user.id, updateTokenDto);

    return { message: 'Password reset successfully.' };
  }

  async createToken(user: User, payload: any): Promise<LoginResponseDto> {
    const existingSessionToken = await this.sessionTokenRepository.findOne({
      where: {
        id: user.sessionTokens?.id,
        expiresAt: MoreThan(new Date()),
      },
    });

    if (existingSessionToken) {
      return {
        accessToken: existingSessionToken.accessToken,
        refreshToken: existingSessionToken.refreshToken,
        expiresAt: existingSessionToken.expiresAt.toISOString(),
        expiresRefreshAt: existingSessionToken.expiresRefreshAt.toISOString(),
      };
    }

    const newAccessToken = await this.jwtService.signAsync(payload, {
      secret: process.env.JWT_ACCESS_TOKEN_SECRET,
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    const newRefreshToken = await this.generateRefreshToken();

    const expiresAtSeconds = parseInt(process.env.JWT_EXPIRES_IN, 10);
    const expiresRefreshAtSeconds = parseInt(
      process.env.JWT_REFRESH_EXPIRES_IN,
      10,
    );

    const newExpiresAtDate = new Date();
    newExpiresAtDate.setSeconds(
      newExpiresAtDate.getSeconds() + expiresAtSeconds,
    );

    const newExpiresRefreshAtDate = new Date();
    newExpiresRefreshAtDate.setSeconds(
      newExpiresRefreshAtDate.getSeconds() + expiresRefreshAtSeconds,
    );

    await this.sessionTokenRepository.softRemove({ user: user });

    const newSessionToken = new SessionToken();
    newSessionToken.user = user;
    newSessionToken.accessToken = newAccessToken;
    newSessionToken.expiresAt = newExpiresAtDate;
    newSessionToken.refreshToken = newRefreshToken;
    newSessionToken.expiresRefreshAt = newExpiresRefreshAtDate;
    await this.sessionTokenRepository.save(newSessionToken);

    return {
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
      expiresAt: newExpiresAtDate.toISOString(),
      expiresRefreshAt: newExpiresRefreshAtDate.toISOString(),
    };
  }

  async generateRefreshToken(): Promise<string> {
    return crypto.randomBytes(32).toString('hex');
  }

  async hashToken(token: string): Promise<string> {
    return crypto.createHash('sha256').update(token).digest('hex');
  }
}
