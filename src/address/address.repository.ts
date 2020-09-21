import { Repository, EntityRepository } from "typeorm";
import { Address } from "./address.entity";
import { CreateAddressDto } from "./dto/createAddress.dto";

@EntityRepository(Address)
export class AddressRepository extends Repository<Address>{
   async createAddress(createAddressDto: CreateAddressDto): Promise<Address> {
        const {street, city, state} = createAddressDto;

        const adress = new Address();

        adress.street = street;
        adress.city = city;
        adress.state = state;


        await adress.save();

        return adress;
   }
}