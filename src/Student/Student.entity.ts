import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { Board } from "../Board/Board.entity";
import { District } from "../District/District.entity";
import { Gender } from "../Gender/Gender.entity";
import { SubGroup } from "../Group/Group.entity";
import { Province } from "../Province/Province.entity";
import { Region } from "../Region/Region.entity";
import { Religion } from "../Religion/Religion.entity";
import { SchoolType } from "../SchoolType/SchoolType.entity";
import { Subdivision } from "../Subdivision/Subdivision.entity";
import { Group } from "../SubGroup/SubGroup.entity";
import { BaseAuto } from "../Utils/BaseAuto";

@Entity("students")
export class Student extends BaseAuto {
  @Column({ nullable: false, type: "varchar" })
  name: string;

  @Column({ nullable: true, type: "varchar" })
  father_name: string;

  @Column({ nullable: true, type: "varchar" })
  email: string;

  @Column({ nullable: true, type: "varchar" })
  mobile: string;

  @OneToOne(() => Gender, (gender) => gender, { nullable: true })
  @JoinColumn({ name: "gender_id" })
  gender_id: Gender;

  @Column({ nullable: true, type: "varchar" })
  cnic: string;

  @Column({ nullable: true, type: "date" })
  date_of_birth: Date;

  @Column({ nullable: true, type: "varchar" })
  place_of_birth: string;

  @Column({ nullable: true, type: "varchar" })
  nationality: string;

  @OneToOne(() => Religion, (religion) => religion, { nullable: true })
  @JoinColumn({ name: "religion_id" })
  religion_id: Religion;

  @OneToOne(() => District, (district) => district, { nullable: true })
  @JoinColumn({ name: "domicile_district_id" })
  domicile_district_id: District;

  @Column({ nullable: true, type: "varchar" })
  father_mobile: string;

  @Column({ nullable: true, type: "varchar" })
  father_cnic: string;

  @Column({ nullable: true, type: "varchar" })
  father_occupation: string;

  @OneToOne(() => District, (district) => district, { nullable: true })
  @JoinColumn({ name: "father_domicile_district_id" })
  father_domicile_district_id: District;

  @Column({ nullable: true, type: "varchar" })
  mother_cnic: string;

  @OneToOne(() => Region, (region) => region, { nullable: true })
  @JoinColumn({ name: "address_region_id" })
  address_region_id: Region;

  @OneToOne(() => District, (district) => district, { nullable: true })
  @JoinColumn({ name: "address_district_id" })
  address_district_id: District;

  @OneToOne(() => Subdivision, (subdivision) => subdivision, { nullable: true })
  @JoinColumn({ name: "address_subdivision_id" })
  address_subdivision_id: Subdivision;

  @Column({ nullable: true, type: "integer" })
  ninth_roll_no: number;

  @Column({ nullable: true, type: "integer" })
  matric_roll_no: number;

  @Column({ nullable: true, type: "integer" })
  passing_year: number;

  @Column({ nullable: true, type: "integer" })
  class8_passing_year: number;

  @OneToOne(() => District, (district) => district, { nullable: true })
  @JoinColumn({ name: "class8_passing_district_id" })
  class8_passing_district_id: District;

  @Column({ nullable: true, type: "varchar" })
  class8_school_name: string;

  @Column({ nullable: true, type: "integer" })
  class5_passing_year: number;

  @OneToOne(() => District, (district) => district, { nullable: true })
  @JoinColumn({ name: "class5_passing_district_id" })
  class5_passing_district_id: District;

  @Column({ nullable: true, type: "varchar" })
  class5_school_name: string;

  @OneToOne(() => Province, (province) => province, { nullable: true })
  @JoinColumn({ name: "province_id" })
  province_id: Province;

  @OneToOne(() => Board, (board) => board, { nullable: true })
  @JoinColumn({ name: "board_id" })
  board_id: Board;

  @OneToOne(() => Group, (group) => group, { nullable: true })
  @JoinColumn({ name: "group_id" })
  group_id: Group;

  @OneToOne(() => SubGroup, (subGroup) => subGroup, { nullable: true })
  @JoinColumn({ name: "sub_group_id" })
  sub_group_id: SubGroup;

  @Column({ nullable: true, type: "integer" })
  total_marks: number;

  @Column({ nullable: true, type: "integer" })
  obtained_marks: number;

  @Column({ nullable: true, type: "integer" })
  scaled_total_marks: number;

  @Column({ nullable: true, type: "integer" })
  scaled_obtained_marks: number;

  @Column({ nullable: true, type: "varchar" })
  school_name: string;

  @OneToOne(() => SchoolType, (schoolType) => schoolType, { nullable: true })
  @JoinColumn({ name: "school_type_id" })
  school_type_id: SchoolType;

  @Column({ nullable: true, type: "varchar" })
  home_address: string;

  @Column({ nullable: true, type: "varchar" })
  marksheet_image: string;

  @Column({ nullable: true, type: "varchar" })
  profile_image: string;

  @OneToOne(() => Region, (region) => region, { nullable: true })
  @JoinColumn({ name: "region_id" })
  region_id: Region;
}
