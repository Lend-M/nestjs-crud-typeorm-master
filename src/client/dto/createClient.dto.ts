import { IsNotEmpty} from 'class-validator';
import { CreateAddressDto } from 'src/address/dto/createAddress.dto';

export class CreateClientDto {
    
    @IsNotEmpty()
    firstName : string;

    @IsNotEmpty()
    lastName : string;

    address: CreateAddressDto

}