import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: "int", width: 11})
  collection_id: number;

  @Index()
  @Column({length:255})
  product_code: string;

  @Index()
  @Column({length:255})
  name: string;

  @Index()
  @Column({length:255})
  price: string;

  @Column({type: "int", width: 5})
  quantity: number;

  @Index()
  @Column({length:255})
  description: string;

  @Column({ type: "int", width: 14 })
  created_at: number;

  @Column({ type: "int", width: 14 })
  updated_at: number;
}