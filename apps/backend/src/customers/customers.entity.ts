import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "../orders/orders.entity";

@Entity('customerdb')
// father
export class Customer {

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    customerName:string;

    @Column()
    orderId:string;

    
}