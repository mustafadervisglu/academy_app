import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  DeleteDateColumn,
} from 'typeorm';
import {
  ProgramTypes,
  SchoolTypeLevel,
} from 'src/modules/program/constant/type.enum';
import { EventEntity } from 'src/modules/event/entity/event.entity';

@Entity('program')
export class ProgramEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    nullable: true,
    unique: true,
  })
  name: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  description: string;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column({
    type: 'enum',
    enum: ProgramTypes,
    default: ProgramTypes.Other,
  })
  type: ProgramTypes;

  @Column({
    nullable: false,
  })
  capacity: number;

  @Column({
    type: 'enum',
    enum: SchoolTypeLevel,
    default: SchoolTypeLevel.Other,
  })
  schoolTypeLevel: SchoolTypeLevel;

  @Column()
  branchInfo: string;

  @OneToMany(() => EventEntity, (event) => event.program, {
    cascade: true,
  })
  events: EventEntity[];

  @DeleteDateColumn({ nullable: true })
  deletedAt: Date | null;
}
