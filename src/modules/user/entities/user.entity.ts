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
  id: number;

  @Column({ comment: '昵称' })
  nickname: string;

  @Column({ comment: '头像地址', nullable: true })
  avatar: string;

  @Column({ comment: '性别', nullable: true })
  gender: boolean;

  @Column({ comment: '所在地区', nullable: true })
  area: string;

  @Column({ comment: '个性签名', nullable: true })
  signature: string;

  @Column({ comment: '生日', nullable: true })
  birthday: Date;

  @CreateDateColumn({ name: 'create_date' })
  createDate: Date;

  @UpdateDateColumn({ name: 'update_date' })
  updateDate: Date;
}
