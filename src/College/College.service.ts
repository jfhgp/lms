import { plainToClass } from "class-transformer";
import { getRepository } from "typeorm";
import { District } from "../District/District.entity";
import { Region } from "../Region/Region.entity";
import { Subdivision } from "../Subdivision/Subdivision.entity";
import { LMSUtils } from "../Utils/fectory";
import { CreateCollegeDto } from "./College-create.dto";
import { College } from "./College.entity";

export class CollegeService {
  static add = async (data: CreateCollegeDto) => {
    try {
      const dto = plainToClass(CreateCollegeDto, data);

      const error = await LMSUtils.validator(dto);
      if (error) return error;

      let subdivision_id = await getRepository(Subdivision).query(
        "SELECT id FROM subdivisions WHERE id = $1",
        [dto.subdivision_id]
      );
      if (subdivision_id.length < 1) {
        return { error: "subdivision_id not exists" };
      }

      let district_id = await getRepository(District).query(
        "SELECT id FROM districts WHERE id = $1",
        [dto.district_id]
      );
      if (district_id.length < 1) {
        return { error: "district_id not exists" };
      }

      let region_id = await getRepository(Region).query(
        "SELECT id FROM regions WHERE id = $1",
        [dto.region_id]
      );
      if (region_id.length < 1) {
        return { error: "region_id not exists" };
      }
      return await College.save(await College.create(dto));
    } catch (error) {
      return error;
    }
  };

  static getAll = async () => {
    try {
      return await getRepository(College).query("SELECT * FROM colleges");
    } catch (error) {
      return error;
    }
  };

  static get = async (id: number) => {
    try {
      return await getRepository(College).query(
        "SELECT * FROM colleges WHERE id = $1",
        [id]
      );
    } catch (error) {
      return error;
    }
  };
}
