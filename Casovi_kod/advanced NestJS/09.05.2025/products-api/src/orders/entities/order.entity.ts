import { Product } from 'src/products/entities/product.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({
    name: 'total_amount',
  })
  totalAmount: number;
  @Column({
    name: 'date',
  })
  date: Date;
  @ManyToOne(() => User, (user) => user.orders)
  @JoinColumn({
    name: "user_id"
  })
  user: User;
  @ManyToMany(() => Product, (product) => product.orders, {
    // eager: true avtomatski loada relaci ako e true i se klava na edna strana
  })
  @JoinTable({
    name: "orders_products",
    joinColumn: {
      name: "order_id",
    },
    inverseJoinColumn: {
      name: "product_id",
    }
  })
  products: Product[]; // ne mi bese jasno kako raboti @RelationId i dali treba da go koristam, pa ako mozi da se objasni na chas ili vo komentar
  // @RelationId((order: Order) => order.products)
  // productIds: number[]; alterantiven nacin za fetchnuvanje za foreign key, i praj nov property
}
