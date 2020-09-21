import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import { Address } from "src/address/address.entity";


@Entity()
export class Client extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    
    @Column()
    addressId : number;

    @OneToOne(type => Address, address => address.client, { cascade: ['insert', 'update'] })
    @JoinColumn({ name: "addressId"})
    address: Address;
 
}