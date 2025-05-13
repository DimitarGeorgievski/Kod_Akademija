import { Product } from "src/products/entities/product.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Order {
    @PrimaryGeneratedColumn("uuid")
    id: number;
    @Column()
    totalAmount: number;
    @Column()
    date: Date;
    @ManyToOne(() => User, user => user.orders)
    user: User;
    @ManyToMany(() => Product)
    @JoinTable()
    products: Product[] // ne mi bese jasno kako raboti @RelationId i dali treba da go koristam, pa ako mozi da se objasni na chas ili vo komentar
}
