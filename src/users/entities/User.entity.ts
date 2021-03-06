import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { AddressEntity } from "./Address.entity";
import { OrderEntity } from "../../orders/entities/Order.entity";

@Entity({ name: "users" })
export class UserEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ name: "first_name" })
  firstName: string;

  @Column({ name: "last_name" })
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ name: "mobile_number", nullable: true })
  mobileNumber: string;

  @Column({ nullable: true, select: false })
  password: string;

  @Column({ name: "sign_in_method" })
  signInMethod: string;

  @Column({ name: "fcm_token", nullable: true })
  fcmToken: string;

  @Column({ type: "bigint", name: "created_at" })
  createdAt: number;

  @OneToMany(type => AddressEntity, address => address.user, {
    eager: true,
    cascade: true,
  })
  addresses: AddressEntity[];

  @OneToMany(type => OrderEntity, order => order.user, {
    eager: false,
    cascade: false,
  })
  orders: OrderEntity[];
}
