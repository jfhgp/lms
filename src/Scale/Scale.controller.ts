import { plainToClass } from "class-transformer";
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { LogisticsUtils } from "../Utils/fectory";
import { ScaleDto } from "./Scale.dto";
import { Scale } from "./Scale.entity";
export class ScaleController {
  static add = async (req: Request, res: Response) => {
    try {
      const data: ScaleDto = req.body;

      const dto = plainToClass(ScaleDto, data);

      const error = await LogisticsUtils.validator(dto);
      if (error) return res.status(400).json({ status: 400, error });

      const result = await Scale.save(await Scale.create(dto));

      return res.status(201).json({ status: 201, data: result });
    } catch (error) {
      return res.status(500).json({ status: 500, error });
    }
  };

  static get = async (req: Request, res: Response) => {
    try {
      const result = await getRepository(Scale).query(
        "SELECT * FROM scales WHERE id = $1",
        [Number(req.params.id)]
      );
      return res.status(200).json({ status: 200, data: result[0] });
    } catch (error) {
      return res.status(500).json({ status: 500, error });
    }
  };

  static getAll = async (req: Request, res: Response) => {
    try {
      const result = await getRepository(Scale).query("SELECT * FROM scales");
      return res.status(200).json({ status: 200, data: result });
    } catch (error) {
      return res.status(500).json({ status: 500, error });
    }
  };
}
