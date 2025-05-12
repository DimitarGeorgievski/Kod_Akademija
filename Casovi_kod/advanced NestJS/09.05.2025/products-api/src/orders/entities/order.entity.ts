import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    totalAmount: number;
    @Column()
    date: Date;
    @ManyToOne(() => User, user => user.orders)
    user: User;
}
