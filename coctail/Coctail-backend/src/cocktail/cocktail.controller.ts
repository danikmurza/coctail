import { Controller, Get, Param } from '@nestjs/common'
// import { CocktailDto } from './dtos/create-user.dto';
import { CocktailService } from './cocktail.service'

@Controller('api')
export class CocktailController {
  constructor(private cocktailService: CocktailService) {}

  @Get('/')
  async findAll() {
    return await this.cocktailService.findAll();
  }

  // @Post('/add')
  // async addUser(@Body() body: CocktailDto) {
  //   const user = await this.cocktailService.add(body);
  //   return user;
  // }


  @Get('/:id')
  async getById(@Param('id') id: string) {
    return await this.cocktailService.findById(id)
  }
}
