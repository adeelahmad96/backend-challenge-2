/*
 * @format
 */
import { Entity, Column, Index, OneToMany } from "typeorm";
import { Base, Order } from "src/entities";

@Entity()
export class Product extends Base {
  @Column()
  @Index({ unique: true })
  name: string;

  @Column({ default: 3 })
  inventory: number;

  @Column({ default: 0 })
  price: number;

  @OneToMany(() => Order, (order) => order.product)
  orders: Order[];
}
