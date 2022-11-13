import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cards {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "int", width: 11, nullable:true })
  shop_id: number;

  @Column({ type: "int", width: 11, nullable:true })
  product_id: number;
  
  @Column({ type: "int", width: 5, nullable:true })
  quantity: number;

  @Column({ type: "int", width: 14 })
  created_at: number;
  
  @Column({ type: "int", width: 14 })
  updated_at: number;
}