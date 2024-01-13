import { IsNotEmpty } from 'class-validator';

export class CreateBoardDto {
  @IsNotEmpty() // NPE Check
  title: string;

  @IsNotEmpty() // NPE Check
  description: string;
}
