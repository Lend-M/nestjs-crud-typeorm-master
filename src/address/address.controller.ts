import { Controller, Param, ParseIntPipe, Get, Post, Body } from '@nestjs/common';
import { AddressService } from './address.service';
import { Address } from './address.entity';
import { CreateAddressDto } from './dto/createAddress.dto';

@Controller('address')
export class AddressController {
    constructor(private addressService: AddressService){}
    
    @Get()
    getAllAdress(): Promise<Address[]>{
        return this.addressService.getAllAdress();
    }


    @Get('/:id')
    getAdressClient(@Param('id', ParseIntPipe) id:number): Promise<Address>{
        return this.addressService.getAdressClient(id);
    }

    @Post()
    createAddress(@Body() createAddressDto: CreateAddressDto):Promise<Address> {
        return this.addressService.createAddress(createAddressDto);
    }
}
