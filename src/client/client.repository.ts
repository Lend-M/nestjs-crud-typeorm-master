import { Repository, EntityRepository } from "typeorm";
import { Client } from "./client.entity";
import { CreateClientDto } from "./dto/createClient.dto";
import { Address } from "src/address/address.entity";

@EntityRepository(Client)
export class ClientRepository extends Repository<Client> {
  async createClient(createClientDto: CreateClientDto):Promise<Client> {
    const { firstName, lastName} = createClientDto;

    const client = new Client();

    client.firstName = firstName;
    client.lastName = lastName;
   // client.address = await Address.findOne(adressId);
    
    await client.save();

    return client;
  }  
}