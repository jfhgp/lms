import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { District } from "../District/District.entity";
import { Region } from "../Region/Region.entity";
import { Subdivision } from "../Subdivision/Subdivision.entity";
import { BaseAuto } from "../Utils/BaseAuto";
import { GenderEnum } from "./GenderEnum";

@Entity("colleges")
export class College extends BaseAuto {
  @Column({ nullable: false, type: "varchar" })
  ddo_code: string;

  @Column({ nullable: false, type: "varchar" })
  name: string;

  @Column({ nullable: false, enum: GenderEnum, type: "enum" })
  gender: GenderEnum;

  @ManyToOne(() => Subdivision, (subdivision) => subdivision, {
    nullable: false,
  })
  @JoinColumn({ name: "subdivision_id" })
  subdivision_id: Subdivision;

  @ManyToOne(() => District, (district) => district, {
    nullable: false,
  })
  @JoinColumn({ name: "district_id" })
  district_id: District;

  @ManyToOne(() => Region, (region) => region, {
    nullable: false,
  })
  @JoinColumn({ name: "region_id" })
  region_id: Region;
}
