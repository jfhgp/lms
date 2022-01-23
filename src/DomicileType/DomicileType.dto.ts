import { IsNotEmpty, IsString } from "class-validator";

export class DomicileTypeDto {
  @IsNotEmpty()
  @IsString()
  domicile_type: string;
}
