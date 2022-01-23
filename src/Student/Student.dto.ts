import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from "class-validator";
import { Board } from "../Board/Board.entity";
import { District } from "../District/District.entity";
import { Gender } from "../Gender/Gender.entity";
import { Group } from "../Group/Group.entity";
import { Province } from "../Province/Province.entity";
import { Region } from "../Region/Region.entity";
import { Religion } from "../Religion/Religion.entity";
import { SchoolType } from "../SchoolType/SchoolType.entity";
import { Subdivision } from "../Subdivision/Subdivision.entity";
import { SubGroup } from "../SubGroup/SubGroup.entity";

export class StudentDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  father_name: string;

  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  mobile: string;

  @IsOptional()
  gender_id: Gender;

  @IsOptional()
  cnic: string;

  @IsOptional()
  @IsDateString()
  date_of_birth: Date;

  @IsOptional()
  place_of_birth: string;

  @IsOptional()
  nationality: string;

  @IsOptional()
  religion_id: Religion;

  @IsOptional()
  domicile_district_id: District;

  @IsOptional()
  father_mobile: string;

  @IsOptional()
  father_cnic: string;

  @IsOptional()
  father_occupation: string;

  @IsOptional()
  father_domicile_district_id: District;

  @IsOptional()
  mother_cnic: string;

  @IsOptional()
  address_region_id: Region;

  @IsOptional()
  address_district_id: District;

  @IsOptional()
  address_subdivision_id: Subdivision;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  ninth_roll_no: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  matric_roll_no: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  passing_year: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  class8_passing_year: number;

  @IsOptional()
  class8_passing_district_id: District;

  @IsOptional()
  @IsString()
  class8_school_name: string;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  class5_passing_year: number;

  @IsOptional()
  class5_passing_district_id: District;

  @IsOptional()
  @IsString()
  class5_school_name: string;

  @IsOptional()
  province_id: Province;

  @IsOptional()
  board_id: Board;

  @IsOptional()
  group_id: Group;

  @IsOptional()
  sub_group_id: SubGroup;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  total_marks: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  obtained_marks: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  scaled_total_marks: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  scaled_obtained_marks: number;

  @IsOptional()
  @IsString()
  school_name: string;

  @IsOptional()
  school_type_id: SchoolType;

  @IsOptional()
  @IsString()
  home_address: string;

  @IsOptional()
  @IsString()
  marksheet_image: string;

  @IsOptional()
  @IsString()
  profile_image: string;

  @IsOptional()
  region_id: Region;
}
