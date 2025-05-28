import { Prop,Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
    @Prop()
    name: string;
    @Prop({
        type: String,
        minlength: 3,
        maxlength: 30
    })
    title: string;
    @Prop()
    stock: number;
    @Prop()
    price: number;
    @Prop()
    isAvailable: boolean
}
export const PorductSchema = SchemaFactory.createForClass(Product);