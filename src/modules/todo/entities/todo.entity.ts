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
  id: string;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  userId: string;

  @Column()
  date: Date;

  @Column()
  content: string;

  @Column({ name: 'is_complete' })
  isComplete: boolean;
}
