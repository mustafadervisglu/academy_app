import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { BullModule } from '@nestjs/bullmq';
import { User } from 'src/modules/user/entities/user.entity';
import { JobTitle } from 'src/modules/user/entities/job-title.entity';
import { ContactInfo } from 'src/modules/user/entities/contact.entity';
import { Branch } from 'src/modules/branch/entities/branch.entity';
import { Role } from 'src/modules/auth/entities/role.entity';
import { UserRole } from 'src/modules/user/entities/user-role.entity';
import { UserService } from 'src/modules/user/user.service';
import { UserProcessor } from 'src/modules/user/processors/userQueue.processor';
import { UserController } from 'src/modules/user/user.controller';
import { MailService } from 'src/modules/mail/mail.service';
import { SessionToken } from 'src/modules/auth/entities/session-token.entity';
import { UserBranch } from 'src/modules/user/entities/user-branch.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      JobTitle,
      ContactInfo,
      Branch,
      Role,
      UserRole,
      SessionToken,
      UserBranch,
    ]),
    BullModule.forRoot({
      connection: {
        host: process.env.REDIS_HOST || 'localhost',
        port: parseInt(process.env.REDIS_PORT) || 6379,
      },
    }),
    BullModule.registerQueue({
      name: 'userQueue',
    }),
  ],
  providers: [UserService, MailService, UserProcessor],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
