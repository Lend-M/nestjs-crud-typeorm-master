import { Module } from '@nestjs/common';
import { ClientModule } from './client/client.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { AddressModule } from './address/address.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ClientModule,
    AddressModule
  ],
  
})
export class AppModule {}
