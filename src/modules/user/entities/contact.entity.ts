import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  DeleteDateColumn,
} from 'typeorm';
import { User } from 'src/modules/user/entities/user.entity';

@Entity()
export class ContactInfo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  alternativeEmail: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  phoneNumber: string;

  @Column({ nullable: true })
  landline: string;

  @Column({ nullable: true })
  twitterHandle: string;

  @Column({ nullable: true })
  facebookProfile: string;

  @Column({ nullable: true })
  linkedinProfile: string;

  @Column({ nullable: true })
  postalCode: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  district: string;

  @OneToMany(() => User, (user) => user.contactInfo, {
    cascade: ['soft-remove', 'recover'],
  })
  users: User[];

  @DeleteDateColumn({ nullable: true })
  deletedAt: Date | null;
}
