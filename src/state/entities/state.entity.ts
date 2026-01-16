import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name:'state'})
export class StateEntity {

    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column({name:'name', nullable:false})
    name: number;

    @CreateDateColumn({name:'created_at'})
    createdAt: Date;

    @CreateDateColumn({name:'update_at'})
    updateAt: Date;


}