import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@Index(['userId', 'email'])
export class User {
  @PrimaryGeneratedColumn()
  userSeq: number;

  @Column({ length:40 })
  userId: string;

  @Column({ length: 256 })
  password: string;

  @Column({ length: 40 })
  name: string;

  @Column({ length: 12 })
  phone: string;

  @Column({ length: 40 })
  email: string;
}