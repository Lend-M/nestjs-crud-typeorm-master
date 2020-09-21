import { BaseEntity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne, Entity } from "typeorm";
import { Client } from "src/client/client.entity";


@Entity()
export class Address extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    street: string;

    @Column()
    city: string;

    @Column()
    state: string;

    @OneToOne(type => Client, client => client.address)
    client: Client;
   
}