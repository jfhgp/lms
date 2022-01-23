import { plainToClass } from "class-transformer";
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { LogisticsUtils } from "../Utils/fectory";
import { BookConditionDto } from "./BookCondition.dto";
import { BookCondition } from "./BookCondition.entity";
export class BookConditionController {
  static add = async (req: Request, res: Response) => {
    try {
      const data: BookConditionDto = req.body;
      data.added_by = req.user.id;

      const dto = plainToClass(BookConditionDto, data);

      const error = await LogisticsUtils.validator(dto);
      if (error) return res.status(400).json({ status: 400, error });

      const result = await BookCondition.save(await BookCondition.create(dto));

      return res.status(201).json({ status: 201, data: result });
    } catch (error) {
      return res.status(500).json({ status: 500, error });
    }
  };

  static get = async (req: Request, res: Response) => {
    try {
      const result = await getRepository(BookCondition).query(
        "SELECT * FROM book_conditions WHERE id = $1",
        [Number(req.params.id)]
      );
      return res.status(200).json({ status: 200, data: result[0] });
    } catch (error) {
      return res.status(500).json({ status: 500, error });
    }
  };

  static getAll = async (req: Request, res: Response) => {
    try {
      const result = await getRepository(BookCondition).query("SELECT * FROM book_conditions");
      return res.status(200).json({ status: 200, data: result });
    } catch (error) {
      return res.status(500).json({ status: 500, error });
    }
  };
}
