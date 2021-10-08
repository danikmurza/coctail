import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type CocktailDocument = Cocktail & Document;

@Schema({ collection: 'Cocktail' })
export class Cocktail {
  @Prop({ required: true, lowercase: true, unique: true })
  idDrink: string;
  @Prop()
  strDrink: string;
  @Prop()
  strCategory: string;
  @Prop()
  strAlcoholic: string;
  @Prop()
  strGlass: string;
  @Prop()
  strInstructions: string;
  @Prop()
  strInstructionsDE: string;
  @Prop()
  strInstructionsIT: string;
  @Prop()
  strDrinkThumb: string;


  @Prop()
  strIngredient1: string;
  @Prop()
  strIngredient2: string;
  @Prop()
  strIngredient3: string;
  @Prop()
  strIngredient4: string;
  @Prop()
  strIngredient5: string;


  @Prop()
  strMeasure1: string;
  @Prop()
  strMeasure2: string;
  @Prop()
  strMeasure3: string;
  @Prop()
  strMeasure4: string;
  @Prop()
  strMeasure5: string;




  @Prop()
  strCreativeCommonsConfirmed: string;
  @Prop()
  dateModified: string;
}

export const CocktailSchema = SchemaFactory.createForClass(Cocktail);
