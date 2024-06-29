import { OnWorkerEvent, Processor } from '@nestjs/bullmq';
import { Job } from 'bullmq';

import { WorkerHost } from '@nestjs/bullmq';

import { Logger } from '@nestjs/common';
import { UserService } from 'src/modules/user/user.service';
import { CreateUserDto } from 'src/modules/user/dto/user.dto';
import { User } from 'src/modules/user/entities/user.entity';

@Processor('userQueue')
export class UserProcessor extends WorkerHost {
  private readonly logger = new Logger(UserProcessor.name);

  constructor(private readonly userService: UserService) {
    super();
  }

  async process(job: Job<CreateUserDto>): Promise<User> {
    try {
      return await this.userService.createUser(job.data);
    } catch (e) {
      throw e;
    }
  }

  @OnWorkerEvent('active')
  onActive(job: Job) {
    this.logger.log(`Active ${job.id}`);
  }

  @OnWorkerEvent('completed')
  onCompleted(job: Job) {
    this.logger.log(`Completed ${job.id}`);
  }

  @OnWorkerEvent('failed')
  async onFailed(job: Job) {
    try {
      this.logger.error(`Failed ${job.id}, reason: ${job.failedReason}`);
      if (job.attemptsMade < 2 && job.failedReason) {
        await job.retry();
        this.logger.warn(`Retrying job ${job.id}`);
      }
    } catch (retryError) {
      this.logger.error(
        `Failed to retry job ${job.id}, error: ${retryError.message}`,
      );
    }
  }
}
