import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from 'src/modules/user/entities/user.entity';

@Entity()
export class SessionToken {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Index({ unique: true })
  @Column({ length: 500 })
  accessToken: string;

  @Column()
  expiresAt: Date;

  @Column()
  refreshToken: string;

  @Column()
  expiresRefreshAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (user: User) => user.sessionTokens, {
    onDelete: 'CASCADE',
  })
  user: User;

  @DeleteDateColumn({ nullable: true })
  deletedAt: Date | null;
}
