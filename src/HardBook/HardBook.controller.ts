import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { CreateHardBookDto } from "./HardBook-create.Dto";
import { UpdateHardBookDto } from "./HardBook-update.Dto";
import { HardBook } from "./HardBook.entity";
import { HardBookService } from "./HardBook.service";
export class HardBookController {
  static add = async (req: Request, res: Response): Promise<Response> => {
    
    
    try {
      const data: CreateHardBookDto = req.body;
      data.added_by = req.user.id;
      data.college_id = req.user.college_id;
      const result = await HardBookService.add(data);
      if (!(result instanceof HardBook)) {
        return res.status(400).json({ status: 400, error: result });
      }
      return res.status(201).json({ status: 201, data: result });
    } catch (error) {
      return res.status(500).json({ status: 500, error });
    }
  };

  static get = async (req: Request, res: Response): Promise<Response> => {
    try {
      const result = await getRepository(HardBook).query(
        "SELECT * FROM hard_books WHERE id = $1",
        [Number(req.params.id)]
      );
      return res.status(201).json({ status: 201, data: result[0] });
    } catch (error) {
      return res.status(500).json({ status: 500, error });
    }
  };

  static getAll = async (req: Request, res: Response): Promise<Response> => {
    try {
      const result = await getRepository(HardBook).query(
        "SELECT * FROM hard_books"
      );
      return res.status(201).json({ status: 201, data: result });
    } catch (error) {
      return res.status(500).json({ status: 500, error });
    }
  };

  static update = async (req: Request, res: Response): Promise<Response> => {
    try {
      const data: UpdateHardBookDto = req.body;
      data.updated_by = req.user.id;

      const result = await HardBookService.update(data);
      if (!(result instanceof HardBook)) {
        return res.status(400).json({ status: 400, error: result });
      }
      return res.status(201).json({ status: 201, data: result });
    } catch (error) {
      return res.status(500).json({ status: 500, error });
    }
  };
}
