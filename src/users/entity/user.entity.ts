/* eslint-disable prettier/prettier */
import { Roles } from 'src/roles/entity/roles.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, UpdateDateColumn, OneToOne } from 'typeorm';
@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  full_name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ type: "bigint" })
  phone: number;

  @OneToMany(() => Roles, (roles) => roles.user)
  role: Roles;

  @Column()
  is_deleted: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
