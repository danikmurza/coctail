import {BadRequestException, Injectable,} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
// import { CocktailDto } from './dtos/create-user.dto';
import {Cocktail, CocktailDocument} from './schema/cocktail.schema';

@Injectable()
export class CocktailService {
  constructor(
    @InjectModel(Cocktail.name)
    private readonly cocktailModel: Model<CocktailDocument>,
  ) {}

  async findAll() {
    return this.cocktailModel.find().exec();
  }

  // async add(data: CocktailDto) {
  //   const userList = await this.userModel.find({ idDrink: data.idDrink })
  //     .exec();
  //
  //   if (userList.length) {
  //     throw new BadRequestException(
  //       `${data.idDrink} has already been registered`,
  //     );
  //   }
  //
  //   const newUser = new this.userModel(data);
  //   return newUser.save();
  // }

  async findById(id: string){
    const cocktail = await this.cocktailModel.find({ idDrink: id })
        .exec();

    if (!cocktail.length) {
      throw new BadRequestException(
          `${id} dont have`,
      );
    }
    return {drinks: [cocktail]}
  }
}
