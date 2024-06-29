import {
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from 'src/modules/user/entities/user.entity';
import { Branch } from 'src/modules/branch/entities/branch.entity';

@Entity()
export class UserBranch {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.userRoles)
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => Branch, (branch) => branch.userBranches)
  @JoinColumn({ name: 'branchId' })
  branch: Branch;

  @DeleteDateColumn({ nullable: true })
  deletedAt: Date | null;
}
