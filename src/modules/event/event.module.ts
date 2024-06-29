import { Module } from '@nestjs/common';
import { EventController } from './event.controller';
import { EventService } from './event.service';
import { EventEntity } from 'src/modules/event/entity/event.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProgramEntity } from 'src/modules/program/entity/program.entity';
import { User } from 'src/modules/user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EventEntity, ProgramEntity, User])],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule {}
