import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('taskdb')
export class Task{

    @PrimaryGeneratedColumn()
    taskId:string;

    @Column()
    taskName:string;

    @Column()
    taskAssigner:string;

    @Column()
    status:string;

    @Column()
    assignee:string;

    @CreateDateColumn({ nullable: true })
    createdAt: Date;

    @UpdateDateColumn({ nullable: true })
    updatedAt: Date;
}