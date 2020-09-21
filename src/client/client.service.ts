import { Injectable, NotFoundException } from '@nestjs/common';
import { ClientRepository } from './client.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './client.entity';
import { CreateClientDto } from './dto/createClient.dto';
import { UpdateResult } from 'typeorm';
import { AddressRepository } from 'src/address/address.repository';
import { Address } from 'src/address/address.entity';

@Injectable()
export class ClientService {
    constructor(
        @InjectRepository(ClientRepository)
        private clientRepository: ClientRepository,
        @InjectRepository(AddressRepository)
        private addressRepository: AddressRepository
    ){}

    getAll():Promise<Client[]> {
        return this.clientRepository.find({relations:['address']});
    }

    async getClientById(id: number): Promise<Client> {
        const found = await this.clientRepository.findOne(id);

        if(!found) {
            throw new NotFoundException(`Task with ID "${id}" not found`);
        }

        return found;
    }
    async getClientWithAddressById(id: number): Promise<Client> {
        const found = await this.clientRepository.findOne({where:{id}, relations:['address']});

        if(!found) {
            throw new NotFoundException(`Task with ID "${id}" not found`);
        }

        return found;
    }
    async createClient(createClientDto: CreateClientDto): Promise<Client> {

        const c = this.clientRepository.create(createClientDto);
        this.addressRepository.delete({id:2});

        return this.clientRepository.save(createClientDto);
    }


    async deleteClient(id:number) {
        const result = await this.clientRepository.delete(id);

        if(result.affected === 0) {
            throw new NotFoundException(`Task with ID "${id}" not found`);
        }
    }

    async update(id: number, firstName: string, lastName: string ): Promise<Client> {
        const client = await this.getClientById(id);

        client.firstName = firstName;
        client.lastName = lastName;
        await client.save();
        return client
    }
}
