import { Module } from '@nestjs/common';
import { LinkedidentityService } from './linkedidentity.service';
import { LinkedidentityController } from './linkedidentity.controller';
import { Linkedidentity } from './entities/linkedidentity.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Citizen } from '../citizens/entities/citizen.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Linkedidentity, Citizen])],
  controllers: [LinkedidentityController],
  providers: [LinkedidentityService]
})
export class LinkedidentityModule {}
