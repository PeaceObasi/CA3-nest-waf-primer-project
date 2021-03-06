import { Injectable } from '@nestjs/common';
import { CreateCitizenDto } from './dto/create-citizen.dto';
import { UpdateCitizenDto } from './dto/update-citizen.dto';
import { Citizen } from './entities/citizen.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CitizensService {
  //In TypeORM, every entity created has a repository method under the
//hood that is used to access the entity.
//The repository is typically injected into the service class for use within
//the class. We can thus inject the user
//repository into UsersService via
//the constructor.//

//Now we are ready to code our UsersService talking to User entity via the repository

constructor(
  @InjectRepository(Citizen)
  private citizensRepository: Repository<Citizen>
  ){}

  getHome(): {} {
    return {title: 'Home'}
  }

  getRegister(): {} {
    return {title: 'Register'}
  }

  async create(createCitizenDto: CreateCitizenDto) {
    const newCitizen: Citizen = this.citizensRepository.create(createCitizenDto)
    return await this.citizensRepository.save(newCitizen);
    //return 'This action adds a new citizen';
  }

  async findAll() {
    //return `This action returns all users`;
    return await this.citizensRepository.find();
  }

  async findOne(id: number) {
    //return `This action returns a #${id} user`;
    return await this.citizensRepository.findOne(id);
  }

  async update(id: number, updateUserDto: UpdateCitizenDto) {
    //return `This action updates a #${id} user`;
    return await this.citizensRepository.update(id, updateUserDto);
  }

  async remove(id: number) {
    //return `This action removes a #${id} user`;
    return await this.citizensRepository.delete(id);
  }
}
//CreateCitizenDto and UpdateCitizenDto. These are types for transfer objects. 
