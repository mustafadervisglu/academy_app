import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { UserBranch } from 'src/modules/user/entities/user-branch.entity';

@Entity()
export class Branch {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  branchName: string;

  @OneToMany(() => UserBranch, (userBranch) => userBranch.branch, {
    cascade: true,
  })
  userBranches: UserBranch[];
}
