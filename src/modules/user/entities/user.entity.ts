import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Todo } from 'src/modules/todo/entities/todo.entity';

@Entity()
export class User {
  @OneToMany(() => Todo, (todo) => todo.userId)
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ comment: '昵称' })
  nickname: string;

  @Column({ comment: '头像地址' })
  avatar: string;

  @Column({ comment: '性别' })
  gender: string;

  @Column({ comment: '所在地区' })
  area: string;

  @Column({ comment: '个性签名' })
  signature: string;

  @Column({ comment: '生日' })
  birthday: Date;

  @CreateDateColumn({ name: 'create_date' })
  createDate: Date;

  @UpdateDateColumn({ name: 'update_date' })
  updateDate: Date;
}
