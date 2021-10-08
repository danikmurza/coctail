import { Module } from '@nestjs/common';
import { CocktailController } from './cocktail.controller';
import { CocktailService } from './cocktail.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Cocktail, CocktailSchema } from './schema/cocktail.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Cocktail.name, schema: CocktailSchema }]),
  ],
  controllers: [CocktailController],
  providers: [CocktailService],
})
export class CocktailsModule {}
