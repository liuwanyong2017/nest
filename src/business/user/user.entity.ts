import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    name: string;

    @Column({default: false})
    deleted: boolean;

    @Column({default: 5})
    auth: number;

    @Column()
    password: string;
}
