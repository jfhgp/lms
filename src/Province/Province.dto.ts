import { IsNotEmpty, IsString } from "class-validator";

export class ProvinceDto {
  @IsNotEmpty()
  @IsString()
  province: string;
}
