import { plainToClass } from "class-transformer";
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { LogisticsUtils } from "../Utils/fectory";
import { ProvinceDto } from "./Province.dto";
import { Province } from "./Province.entity";
export class ProvinceController {
  static add = async (req: Request, res: Response) => {
    try {
      const data: ProvinceDto = req.body;

      const dto = plainToClass(ProvinceDto, data);

      const error = await LogisticsUtils.validator(dto);
      if (error) return res.status(400).json({ status: 400, error });

      const result = await Province.save(await Province.create(dto));

      return res.status(201).json({ status: 201, data: result });
    } catch (error) {
      return res.status(500).json({ status: 500, error });
    }
  };

  static get = async (req: Request, res: Response) => {
    try {
      const result = await getRepository(Province).query(
        "SELECT * FROM provinces WHERE id = $1",
        [Number(req.params.id)]
      );
      return res.status(200).json({ status: 200, data: result[0] });
    } catch (error) {
      return res.status(500).json({ status: 500, error });
    }
  };

  static getAll = async (req: Request, res: Response) => {
    try {
      const result = await getRepository(Province).query("SELECT * FROM provinces");
      return res.status(200).json({ status: 200, data: result });
    } catch (error) {
      return res.status(500).json({ status: 500, error });
    }
  };
}
