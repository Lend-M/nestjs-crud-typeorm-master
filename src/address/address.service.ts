import { Injectable, NotFoundException } from '@nestjs/common';
import { AddressRepository } from './address.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from './address.entity';
import { CreateAddressDto } from './dto/createAddress.dto';

@Injectable()
export class AddressService {
    constructor(
        @InjectRepository(AddressRepository)
        private addressRepository: AddressRepository,
    ){}

    getAllAdress(): Promise<Address[]> {
        return this.addressRepository.find();
    }

    async createAddress(createAddressDto: CreateAddressDto) {
        return this.addressRepository.createAddress(createAddressDto);
    }

    async getAdressClient(id: number): Promise<Address>{
        const found = await this.addressRepository.findOne(id);

        if(!found) {
            throw new NotFoundException(`Task with ID "${id}" not found`);
        }

        return found;
    }
}
