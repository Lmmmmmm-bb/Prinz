import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Hello {
  @ApiProperty({
    description: 'This is Hello UUID',
    required: true,
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: 'lmmmmmm',
    description: 'This is Hello Name',
    required: false,
  })
  @Column()
  name: string;
}
