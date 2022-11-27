/*
 * @format
 */
import { Entity, Column, ManyToOne } from "typeorm";
import { Base, Product, User } from "src/entities";

@Entity()
export class Order extends Base {
  @Column({ default: 1 })
  count: number;

  @Column({ default: 0 })
  amount: number;

  @Column({ default: "paymant" })
  status: string;

  @ManyToOne(() => User, (user) => user.orders)
  user: User;

  @ManyToOne(() => Product, (product) => product.orders)
  product: Product;
}
