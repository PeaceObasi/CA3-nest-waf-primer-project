import { Controller, Get, Post, Body, Put, Param, Delete, Render } from '@nestjs/common';
import { CitizensService } from './citizens.service';
import { CreateCitizenDto } from './dto/create-citizen.dto';
import { UpdateCitizenDto } from './dto/update-citizen.dto';

@Controller('citizens')
export class CitizensController {
  constructor(private readonly citizensService: CitizensService) {}

  @Get('create-citizen')
  @Render('citizen/create-citizen.html')
  createForm() {
  }
  
  @Get('home-page')      
  @Render ('citizen/home-page.html')  
  getHome(): {} {
    return this.citizensService.getHome();
  }

  @Get('/')
  @Render ('citizen/list.html')
  async getRegistered() {
    //console.log(this.citizensService.findAll())
    const citizens = await this.citizensService.findAll();
    console.log(JSON.stringify(citizens))
    return {citizens: citizens, title: "Registered Citizens"};
  }
  

  @Post()
  create(@Body() createCitizenDto: CreateCitizenDto) {
    return this.citizensService.create(createCitizenDto);
    //Notice that in the create() method in Controller, a variable
    //of type CreateCitizenDto is passed.
    //It is indicated with @Body as data
    //to be expected to be sent as part
    //of request body from the client.
  }

  //Notice that in CitizensController we
//have used up to 4 HTTP verbs,
//@Post, @Get, @Update, @Delete

  @Get()
  findAll() {
    return this.citizensService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.citizensService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCitizenDto: UpdateCitizenDto) {
    return this.citizensService.update(+id, updateCitizenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.citizensService.remove(+id);
  }
}
