import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { User } from 'src/modules/user/entities/user.entity';

@Entity()
export class JobTitle {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  titleName: string;

  @OneToMany(() => User, (user: User) => user.jobTitle)
  users: User[];
}
