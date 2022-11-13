import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Owners {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 255,nullable:true})
  name: string;

  @Column({ type: "int", width: 5 })
  age: number;

  @Column({length: 255,nullable:true})
  address: string;

  @Column({length: 255,nullable:true})
  phone: string;

  @Column({length: 255,nullable:true})
  email: string;

  @Column({ type: "int", width: 14 })
  created_at: number;
  
  @Column({ type: "int", width: 14 })
  updated_at: number;
}