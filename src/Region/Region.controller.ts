import { plainToClass } from "class-transformer";
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { LogisticsUtils } from "../Utils/fectory";
import { RegionDto } from "./Region.dto";
import { Region } from "./Region.entity";
export class RegionController {
  static add = async (req: Request, res: Response) => {
    try {
      const data: RegionDto = req.body;

      const dto = plainToClass(RegionDto, data);

      const error = await LogisticsUtils.validator(dto);
      if (error) return res.status(400).json({ status: 400, error });

      const result = await Region.save(await Region.create(dto));

      return res.status(201).json({ status: 201, data: result });
    } catch (error) {
      return res.status(500).json({ status: 500, error });
    }
  };

  static get = async (req: Request, res: Response) => {
    try {
      const result = await getRepository(Region).query(
        "SELECT * FROM regions WHERE id = $1",
        [Number(req.params.id)]
      );
      return res.status(200).json({ status: 200, data: result[0] });
    } catch (error) {
      return res.status(500).json({ status: 500, error });
    }
  };

  static getAll = async (req: Request, res: Response) => {
    try {
      const result = await getRepository(Region).query("SELECT * FROM regions");
      return res.status(200).json({ status: 200, data: result });
    } catch (error) {
      return res.status(500).json({ status: 500, error });
    }
  };
}
