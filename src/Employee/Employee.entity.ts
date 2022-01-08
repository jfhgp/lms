import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
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
import { BaseAuto } from "../Utils/BaseAuto";

@Entity("employees")
export class Employee extends BaseAuto {
  @Column({ nullable: false, unique: true, type: "integer" })
  personnel_no: number;

  @Column({ nullable: false, type: "varchar" })
  name: string;

  @Column({ nullable: true, type: "varchar" })
  father_name: string;

  @Column({ nullable: true, type: "varchar" })
  family_name: string;

  @OneToOne(() => PostingPlace, (postingPlace) => postingPlace, {
    nullable: true,
  })
  @JoinColumn({ name: "posting_place_id" })
  posting_place_id: PostingPlace;

  @OneToOne(() => Region, (region) => region, { nullable: true })
  @JoinColumn({ name: "posting_region_id" })
  posting_region_id: Region;

  @OneToOne(() => College, (college) => college, { nullable: true })
  @JoinColumn({ name: "posting_college_id" })
  posting_college_id: College;

  @OneToOne(() => Section, (section) => section, { nullable: true })
  @JoinColumn({ name: "posting_section_id" })
  posting_section_id: Section;

  @OneToOne(() => PostingPlace, (postingPlace) => postingPlace, {
    nullable: true,
  })
  @JoinColumn({ name: "working_place_id" })
  working_place_id: PostingPlace;

  @OneToOne(() => Region, (region) => region, { nullable: true })
  @JoinColumn({ name: "working_region_id" })
  working_region_id: Region;

  @OneToOne(() => College, (college) => college, { nullable: true })
  @JoinColumn({ name: "working_college_id" })
  working_college_id: College;

  @OneToOne(() => Section, (section) => section, { nullable: true })
  @JoinColumn({ name: "working_section_id" })
  working_section_id: Section;

  @OneToOne(() => Gender, (gender) => gender, { nullable: true })
  @JoinColumn({ name: "gender_id" })
  gender_id: Gender;

  @OneToOne(() => MaritalStatus, (marital_status) => marital_status, {
    nullable: true,
  })
  @JoinColumn({ name: "marital_status_id" })
  marital_status_id: MaritalStatus;

  @OneToOne(() => Designation, (designation) => designation, {
    nullable: true,
  })
  @JoinColumn({ name: "designation_id" })
  designation_id: Designation;

  @OneToOne(() => Scale, (scale) => scale, { nullable: true })
  @JoinColumn({ name: "scale_id" })
  scale_id: Scale;

  @Column({ nullable: true, type: "varchar" })
  email: string;

  @Column({ nullable: true, type: "varchar" })
  cnic: string;

  @Column({ nullable: true, type: "varchar" })
  contact_no: string;

  @Column({ nullable: true, type: "varchar" })
  home_contact_no: string;

  @Column({ nullable: true, type: "varchar" })
  relative_contact_no: string;

  @Column({ nullable: true, type: "integer" })
  seniorty_no: number;

  @Column({ nullable: true, type: "date" })
  date_of_birth: Date;

  @Column({ nullable: true, type: "date" })
  joining_date: Date;

  @Column({ nullable: true, type: "date" })
  current_posting_joining_date: Date;

  @Column({ nullable: true, type: "date" }) // need to be logic to add + 60 years for retirement
  retirement_date: Date;

  @OneToOne(() => Region, (region) => region, { nullable: true })
  @JoinColumn({ name: "address_region_id" })
  address_region_id: Region;

  @OneToOne(() => District, (district) => district, { nullable: true })
  @JoinColumn({ name: "address_district_id" })
  address_district_id: District;

  @OneToOne(() => District, (district) => district, { nullable: true })
  @JoinColumn({ name: "domicile_district_id" })
  domicile_district_id: District;

  @OneToOne(() => DomicileType, (domicile_type) => domicile_type, {
    nullable: true,
  })
  @JoinColumn({ name: "domicile_type_id" })
  domicile_type_id: DomicileType;

  @Column({ nullable: true, type: "varchar" })
  languages: string;

  @Column({ nullable: true, type: "integer" })
  no_of_children: number;

  @Column({ nullable: true, type: "boolean", default: false })
  disablity: boolean;

  @OneToOne(() => Qualification, (qualification) => qualification, {
    nullable: true,
  })
  @JoinColumn({ name: "qualification_id" })
  qualification_id: Qualification;

  @Column({ nullable: true, type: "integer" })
  passing_year: number;

  @OneToOne(() => TeachingStatus, (teaching_status) => teaching_status, {
    nullable: true,
  })
  @JoinColumn({ name: "teaching_status_id" })
  teaching_status_id: TeachingStatus;

  @OneToOne(() => Subject, (subject) => subject, {
    nullable: true,
  })
  @JoinColumn({ name: "subject_id" })
  subject_id: Subject;

  @OneToOne(() => Subdivision, (subdivision) => subdivision, {
    nullable: true,
  })
  @JoinColumn({ name: "address_subdivision_id" })
  address_subdivision_id: Subdivision;

  @Column({ nullable: true, type: "text" })
  home_address: string;

  @Column({ nullable: true, default: true, type: "boolean" })
  working_status: boolean;

  @Column({ nullable: true, type: "varchar" })
  image_name: string;
}
