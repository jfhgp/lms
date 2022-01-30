import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { CreateReturnBookDto } from "./ReturnBook-create.dto";
import { ReturnBook } from "./ReturnBook.entity";
import { ReturnBookService } from "./ReturnBook.service";
export class ReturnBookController {
  static add = async (req: Request, res: Response): Promise<Response> => {
    try {
      const data: CreateReturnBookDto = req.body;
      data.added_by = req.user.id;
      data.college_id = req.user.college_id;
      const result = await ReturnBookService.add(data);
      if (!(result instanceof ReturnBook)) {
        return res.status(400).json({ status: 400, error: result });
      }
      return res.status(201).json({ status: 201, data: result });
    } catch (error) {
      return res.status(500).json({ status: 500, error });
    }
  };

  static getAll = async (req: Request, res: Response): Promise<Response> => {
    try {
      const result = await getRepository(ReturnBook).query(
        "select * FROM return_books WHERE is_returned = true"
      );
      return res.status(200).json({ status: 200, data: result });
    } catch (error) {
      return res.status(500).json({ status: 500, error });
    }
  };
}
