import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
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
