import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "../profile/profile.entity";

@Entity('login')
// child
export class Auth {

    @PrimaryGeneratedColumn()
    id:string

    @Column()
    name:string;

    @Column()
    mobile:string;

    @Column()
    address:string;

    @ManyToOne(type => Profile, user => user.id)
    father: Profile;
}