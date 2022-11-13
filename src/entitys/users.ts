import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: "int", width: 11})
  shop_id: number;

  @Column({length:255,unique:true})
  username: string;

  @Column({length:255})
  password: string;

  @Column({length:255,unique:true})
  email: string;

  @Column({length:255})
  name: string;

  @Column({length:255,unique:true})
  access_token: string;

  @Column({ type: "int", width: 14 })
  created_at: number;
  
  @Column({ type: "int", width: 14 })
  updated_at: number;
}