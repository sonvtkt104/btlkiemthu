import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Shops {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "int", width: 11 })
  owner_id: number;

  @Column({ type: "int", width: 11 })
  registration_code: number;

  @Column({length: 255,nullable:true})
  name: string;

  @Column({length: 255,nullable:true})
  email: string;

  @Column({length: 255,nullable:true})
  phone: string;

  @Column({length: 255,nullable:true})
  address: string;

  @Column({ type: "int", width: 14 })
  created_at: number;
  
  @Column({ type: "int", width: 14 })
  updated_at: number;
}