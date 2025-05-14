import { Order } from 'src/orders/entities/order.entity';
import { UserAddress } from 'src/user-address/entities/user-address.entity';
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({
     unique: true,
     name: "emai;"
  })
  email: string;
      @Column({
        name:"first_name"
    })
  firstName: string;
      @Column({
        name:"last_name"
    })
  lastName: string;
  @Column({ 
    type: 'int',
    name: "age"
   })
  age: number;
  //User Details
  @OneToOne(() => UserAddress, UserAddress=> UserAddress.user)
  userAddress: UserAddress;
  //orders
  @OneToMany(() => Order, order => order.user)
  orders: Order[];
}
