import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity({ name: 'user_todo' })
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, { onDelete: 'CASCADE', nullable: false })
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  userId: number;

  @Column({ nullable: false })
  date: Date;

  @Column({ nullable: false })
  content: string;

  @Column({ name: 'is_complete', default: false })
  isComplete: boolean;
}
