import { plainToClass } from "class-transformer";
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { LMSUtils } from "../Utils/fectory";
import { SubdivisionDto } from "./Subdivision.dto";
import { Subdivision } from "./Subdivision.entity";
export class SubdivisionController {
  static add = async (req: Request, res: Response) => {
    try {
      const data: SubdivisionDto = req.body;
      data.added_by = req.user.id;

      const dto = plainToClass(SubdivisionDto, data);

      const error = await LMSUtils.validator(dto);
      if (error) return res.status(400).json({ status: 400, error });

      const result = await Subdivision.save(await Subdivision.create(dto));

      return res.status(201).json({ status: 201, data: result });
    } catch (error) {
      return res.status(500).json({ status: 500, error });
    }
  };

  static get = async (req: Request, res: Response) => {
    try {
      const result = await getRepository(Subdivision).query(
        "SELECT * FROM subdivisions WHERE id = $1",
        [Number(req.params.id)]
      );
      return res.status(200).json({ status: 200, data: result[0] });
    } catch (error) {
      return res.status(500).json({ status: 500, error });
    }
  };

  static getAll = async (req: Request, res: Response) => {
    try {
      const result = await getRepository(Subdivision).query("SELECT * FROM subdivisions");
      return res.status(200).json({ status: 200, data: result });
    } catch (error) {
      return res.status(500).json({ status: 500, error });
    }
  };
}
