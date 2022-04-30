import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { IdentityTypeEnum } from '../auth.type';

@Entity({ name: 'user_auth' })
export class UserAuth {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => User, { onDelete: 'CASCADE', nullable: false })
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  userId: number;

  @Column({ name: 'identity_type' })
  identityType: IdentityTypeEnum;

  @Column()
  identifier: string;

  @Column()
  credential: string;
}
