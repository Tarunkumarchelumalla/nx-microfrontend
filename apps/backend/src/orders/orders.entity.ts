import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('order')
export class Order {

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    orderName:string;

}