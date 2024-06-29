import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { UserService } from 'src/modules/user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private configService: ConfigService,
    private usersService: UserService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET_KEY'),
    });
  }

  async validate(payload: any): Promise<{
    id: string;
    email: string;
    roles: string[];
    jobTitle: string | null;
  }> {
    const user = await this.usersService.findOneWithRelations(payload.sub, [
      'userRoles',
      'jobTitle',
    ]);

    if (!user) {
      throw new Error('User not found');
    }

    const roles = user.userRoles.map((userRole) => userRole.role.name);
    const jobTitle = user.jobTitle ? user.jobTitle.titleName : null;

    return {
      id: user.id,
      email: user.email,
      roles: roles,
      jobTitle: jobTitle,
    };
  }
}
