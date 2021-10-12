import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Good {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  desc: string;

  @Column()
  img: string;

  @Column({ default: 0 })
  price: number;

  @Column({ default: 0 })
  isDeleted: number;
}
