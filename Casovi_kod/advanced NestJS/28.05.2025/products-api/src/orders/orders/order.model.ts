import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Product } from "src/products/models/product.model";
import { ObjectId } from "typeorm";

export type OrderDocument = HydratedDocument<Order>

@Schema()
export class Order{
    @Prop()
    name: string;
    @Prop()
    totalAmount: number;
    @Prop()
    user: string;
    @Prop()
    date: string;
    @Prop({
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        }],

    })
    products: Product[]

}

export const OrderSchema = SchemaFactory.createForClass(Order);