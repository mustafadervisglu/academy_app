import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  DeleteDateColumn,
  ManyToMany,
} from 'typeorm';
import { ProgramTypes } from 'src/modules/program/constant/type.enum';
import { ProgramEntity } from 'src/modules/program/entity/program.entity';
import { User } from 'src/modules/user/entities/user.entity';
import { EventStatus } from 'src/modules/event/constant/type.enum';

@Entity('event')
export class EventEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => ProgramEntity, (programEntity) => programEntity.events, {})
  @JoinColumn([{ name: 'programId', referencedColumnName: 'id' }])
  program: ProgramEntity;

  @ManyToMany(() => User, (user) => user.events)
  educators: User[];

  @Column()
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column('text')
  educatorResponsibilities: string;

  @Column()
  capacity: number;

  @Column()
  expectedParticipants: number;

  @Column()
  actualParticipants: number;

  @Column()
  integrationCode: string;

  @Column()
  category: string;

  @Column({
    default: EventStatus.YAYINDA,
    type: 'enum',
    enum: EventStatus,
  })
  status: EventStatus;

  @Column({
    type: 'enum',
    enum: ProgramTypes,
  })
  eventType: ProgramTypes;

  @Column('text')
  relatedDocument: string;

  @DeleteDateColumn({ nullable: true })
  deletedAt: Date | null;
}
