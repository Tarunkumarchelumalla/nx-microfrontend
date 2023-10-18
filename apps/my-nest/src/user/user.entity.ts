import { Column, Entity, Exclusion, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity('users')
export class UserEntity {

    @PrimaryGeneratedColumn()
    userid:string;

    @Column()
    name:string;

    @Column()
    email:string;

    @Column()
    password:string;

}