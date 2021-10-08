
import { IsNotEmpty, IsString } from 'class-validator';

export class CocktailDto {

  @IsString()
  idDrink: string;


  @IsString()
  strDrink: string;


  @IsString()
  strCategory: string;


  @IsString()
  strAlcoholic: string;


  @IsString()
  strGlass: string;


  @IsString()
  strInstructions: string;


  @IsString()
  strInstructionsDE: string;


  @IsString()
  strInstructionsIT: string;


  @IsString()
  strDrinkThumb: string;


  @IsString()
  strIngredient1: string;

  @IsString()
  strIngredient2: string;


  @IsString()
  strIngredient3: string;


  @IsString()
  strIngredient4: string;

  @IsString()
  strIngredient5: string;


  @IsString()
  strMeasure1: string;


  @IsString()
  strMeasure2: string;


  @IsString()
  strMeasure3: string;


  @IsString()
  strMeasure4: string;

  @IsString()
  strMeasure5: string;

  @IsNotEmpty()
  @IsString()
  strCreativeCommonsConfirmed: string;

  @IsNotEmpty()
  @IsString()
  dateModified: string;
}
