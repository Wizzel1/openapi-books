import { IsNotEmpty, IsString, IsNumber, Min } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  author: string;

  @IsNumber()
  @Min(1)
  publishedYear: number;
}
