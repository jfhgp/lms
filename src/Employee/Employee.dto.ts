import {
  IsBoolean,
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from "class-validator";
import { College } from "../College/College.entity";
import { Designation } from "../Designation/Designation.entity";
import { District } from "../District/District.entity";
import { DomicileType } from "../DomicileType/DomicileType.entity";
import { Gender } from "../Gender/Gender.entity";
import { MaritalStatus } from "../MaritalStatus/MaritalStatus.entity";
import { PostingPlace } from "../PostingPlace/PostingPlace.entity";
import { Qualification } from "../Qualification/Qualification.entity";
import { Region } from "../Region/Region.entity";
import { Scale } from "../Scale/Scale.entity";
import { Section } from "../Section/Section.entity";
import { Subdivision } from "../Subdivision/Subdivision.entity";
import { Subject } from "../Subject/Subject.entity";
import { TeachingStatus } from "../TeachingStatus/TeachingStatus.entity";

export class EmployeeDto {
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  personnel_no: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  father_name: string;

  @IsOptional()
  @IsString()
  family_name: string;

  @IsOptional()
  posting_place_id: PostingPlace;

  @IsOptional()
  posting_region_id: Region;

  @IsOptional()
  posting_college_id: College;

  @IsOptional()
  posting_section_id: Section;

  @IsOptional()
  working_place_id: PostingPlace;

  @IsOptional()
  working_region_id: Region;

  @IsOptional()
  working_college_id: College;

  @IsOptional()
  working_section_id: Section;

  @IsOptional()
  gender_id: Gender;

  @IsOptional()
  marital_status_id: MaritalStatus;

  @IsOptional()
  designation_id: Designation;

  @IsOptional()
  scale_id: Scale;

  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  cnic: string;

  @IsOptional()
  @IsString()
  contact_no: string;

  @IsOptional()
  @IsString()
  home_contact_no: string;

  @IsOptional()
  @IsString()
  relative_contact_no: string;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  seniorty_no: number;

  @IsOptional()
  @IsDateString()
  date_of_birth: Date;

  @IsOptional()
  @IsDateString()
  joining_date: Date;

  @IsOptional()
  @IsDateString()
  current_posting_joining_date: Date;

  @IsOptional()
  @IsDateString() // need to be logic to add + 60 years for retirement
  retirement_date: Date;

  @IsOptional()
  address_region_id: Region;

  @IsOptional()
  address_district_id: District;

  @IsOptional()
  domicile_district_id: District;

  @IsOptional()
  domicile_type_id: DomicileType;

  @IsOptional()
  @IsString()
  languages: string;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  no_of_children: number;

  @IsNotEmpty()
  @IsBoolean()
  disablity: boolean;

  @IsOptional()
  qualification_id: Qualification;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  passing_year: number;

  @IsOptional()
  teaching_status_id: TeachingStatus;

  @IsOptional()
  subject_id: Subject;

  @IsOptional()
  address_subdivision_id: Subdivision;

  @IsOptional()
  @IsString()
  home_address: string;

  @IsOptional()
  @IsBoolean()
  working_status: boolean;

  @IsOptional()
  @IsString()
  image_name: string;
}
