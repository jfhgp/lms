import { plainToClass } from "class-transformer";
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { LMSUtils } from "../Utils/fectory";
import { BookSubCategoryDto } from "./BookSubCategory.dto";
import { BookSubCategory } from "./BookSubCategory.entity";
export class BookSubCategoryController {
  static add = async (req: Request, res: Response) => {
    try {
      const data: BookSubCategoryDto = req.body;
      data.added_by = req.user.id;

      const dto = plainToClass(BookSubCategoryDto, data);

      const error = await LMSUtils.validator(dto);
      if (error) return res.status(400).json({ status: 400, error });

      const result = await BookSubCategory.save(await BookSubCategory.create(dto));

      return res.status(201).json({ status: 201, data: result });
    } catch (error) {
      return res.status(500).json({ status: 500, error });
    }
  };

  static get = async (req: Request, res: Response) => {
    try {
      const result = await getRepository(BookSubCategory).query(
        "SELECT * FROM book_sub_categories WHERE id = $1",
        [Number(req.params.id)]
      );
      return res.status(200).json({ status: 200, data: result[0] });
    } catch (error) {
      return res.status(500).json({ status: 500, error });
    }
  };

  static getAll = async (req: Request, res: Response) => {
    try {
      const result = await getRepository(BookSubCategory).query("SELECT * FROM book_sub_categories");
      return res.status(200).json({ status: 200, data: result });
    } catch (error) {
      return res.status(500).json({ status: 500, error });
    }
  };
}
