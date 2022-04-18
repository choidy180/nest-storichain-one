import { Column, Entity, Index, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@Index(['num'])
export class Board{
  @PrimaryGeneratedColumn()
  num: number;

  @Column({ length: 45 })
  title: string;

  @Column({ length: 9999 })
  content: string;
}