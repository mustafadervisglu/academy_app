import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { classToPlain, Exclude } from 'class-transformer';
import { UserRole } from 'src/modules/user/entities/user-role.entity';
import { Branch } from 'src/modules/branch/entities/branch.entity';
import { JobTitle } from 'src/modules/user/entities/job-title.entity';
import { ContactInfo } from 'src/modules/user/entities/contact.entity';
import { SessionToken } from 'src/modules/auth/entities/session-token.entity';
import { EventEntity } from 'src/modules/event/entity/event.entity';
import { UserBranch } from 'src/modules/user/entities/user-branch.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    nullable: true,
    unique: true,
  })
  @Index({
    unique: true,
  })
  tckn: string;

  @Index({ unique: true })
  @Column({ nullable: true })
  username: string;

  @Index({ unique: true })
  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column()
  @Exclude({ toPlainOnly: true })
  password: string;

  @Column({ nullable: true, type: 'boolean', default: true })
  status: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @Exclude({ toPlainOnly: true })
  salt: string;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => SessionToken, (sessionToken) => sessionToken.user, {
    cascade: true,
  })
  sessionTokens: SessionToken;

  @Column({ nullable: true })
  resetTokenHash: string;

  @Column({ type: 'timestamp', nullable: true })
  resetTokenExpires: Date;

  @ManyToOne(() => ContactInfo, (contactInfo) => contactInfo.users, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    cascade: true,
  })
  @JoinColumn()
  contactInfo: ContactInfo;

  @ManyToOne(() => JobTitle, (jobTitle) => jobTitle.users, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn()
  jobTitle: JobTitle;

  @OneToMany(() => UserBranch, (userBranch) => userBranch.user, {
    cascade: ['soft-remove'],
  })
  userBranches: UserBranch[];

  @OneToMany(() => UserRole, (userRole) => userRole.user, {
    cascade: ['soft-remove'],
  })
  userRoles: UserRole[];

  @ManyToMany(() => EventEntity, (event) => event.educators, {
    cascade: true,
  })
  @JoinTable({
    name: 'eventEducators',
    joinColumns: [{ name: 'userId', referencedColumnName: 'id' }],
    inverseJoinColumns: [{ name: 'eventId', referencedColumnName: 'id' }],
  })
  events: EventEntity[];

  @DeleteDateColumn({ nullable: true })
  deletedAt: Date | null;
}
