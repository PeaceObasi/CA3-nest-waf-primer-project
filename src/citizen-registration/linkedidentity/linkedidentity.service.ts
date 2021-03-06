import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateLinkedidentityDto } from './dto/create-linkedidentity.dto';
import { UpdateLinkedidentityDto } from './dto/update-linkedidentity.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Linkedidentity } from './entities/linkedidentity.entity';
import { Citizen } from '../citizens/entities/citizen.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LinkedidentityService {
  constructor(
    @InjectRepository(Linkedidentity)
    private linkedidentityRepository: Repository<Linkedidentity>,

    @InjectRepository(Citizen)
    private citizenRepository: Repository<Citizen>
  ) { }

  async create(createLinkedidentityDto: CreateLinkedidentityDto) {
    //return 'This action adds a new linkedidentity';
    const newLinkedidentity = this.linkedidentityRepository.create(createLinkedidentityDto)
    if (createLinkedidentityDto.citizen){
      const newCitizen = this.citizenRepository.create(createLinkedidentityDto.citizen);
      const citizen: Citizen = await this.citizenRepository.save(newCitizen);
      newLinkedidentity.citizen = citizen;
    }
    return this.linkedidentityRepository.save(newLinkedidentity)
  }

  async findAll() {
    //return `This action returns all linkedidentity`;
    return await this.linkedidentityRepository.find({relations: ['citizen']})
  }

  async findOne(id: number) {
    //return `This action returns a #${id} linkedidentity`;
    return await this.linkedidentityRepository.findOne(id);
  }

  async update(id: number, updateLinkedidentityDto: UpdateLinkedidentityDto) {
    //return `This action updates a #${id} linkedidentity`;
    return await this.linkedidentityRepository.update(id, updateLinkedidentityDto);
  }

  async remove(id: number) {
    //return `This action removes a #${id} linkedidentity`;
    return await this.linkedidentityRepository.delete(id);
  }

  /* Work on relationships */
  async setCitizenById(linkedidentityid: number, citizenid: number ) {
    try {
      return await this.linkedidentityRepository.createQueryBuilder()
      .relation(Linkedidentity, "citizen")
      .of(linkedidentityid)
      .set(citizenid)
    }catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem setting citizen for linked identity: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }  
  
  async unsetCitizenById(linkedidentityid: number) {
    try {
      return await this.linkedidentityRepository.createQueryBuilder()
      .relation(Linkedidentity, "citizen")
      .of(linkedidentityid)
      .set(null)
    } catch (error){
      throw new HttpException ({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem unsetting citizen for linkedidentity: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
        
      }
    }
  }

