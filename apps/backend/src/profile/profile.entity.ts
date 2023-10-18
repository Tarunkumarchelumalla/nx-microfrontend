import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Auth } from "../Auth/auth.entity";

@Entity('profile')
// father
export class Profile {

    @PrimaryGeneratedColumn()
    id:string

    @Column()
    fatherName:string;

    @Column()
    fatherMobile:string;

    @Column()
    childId:string;

    @OneToMany(type => Auth, profile => profile.id)
    profiles: Auth[];

}