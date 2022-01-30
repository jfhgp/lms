import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { CreateIssueBookDto } from "./IssueBook-create.dto";
import { IssueBook } from "./IssueBook.entity";
import { IssueBookService } from "./IssueBook.service";
export class IssueBookController {
  static add = async (req: Request, res: Response): Promise<Response> => {
    try {
      const data: CreateIssueBookDto = req.body;
      data.added_by = req.user.id;
      data.college_id = req.user.college_id;
      const result = await IssueBookService.add(data);
      if (!(result instanceof IssueBook)) {
        return res.status(400).json({ status: 400, error: result });
      }
      return res.status(201).json({ status: 201, data: result });
    } catch (error) {
      return res.status(500).json({ status: 500, error });
    }
  };

  static getAll = async (req: Request, res: Response): Promise<Response> => {
    try {
      const result = await getRepository(IssueBook).query('select * FROM issue_books WHERE is_returned = false')
      return res.status(201).json({ status: 201, data: result });
    } catch (error) {
      return res.status(500).json({ status: 500, error });
    }
  };
}
