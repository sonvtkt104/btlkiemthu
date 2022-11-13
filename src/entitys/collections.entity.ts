import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity()
export class Collections {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "int", width: 11, nullable:true })
  shop_id: number;

  @Index()
  @Column({length:255})
  collection_code: string;

  @Index()
  @Column({length:255})
  name: string;

  @Column({ type: "int", width: 14, nullable:true })
  created_at: number;

  @Column({ type: "int", width: 14, nullable:true })
  updated_at: number;
}