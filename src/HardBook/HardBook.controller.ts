import { Request, Response } from "express";
import { CreateHardBookDto } from "./HardBook-create.Dto";
import { HardBook } from "./HardBook.entity";
import { HardBookService } from "./HardBook.service";
export class HardBookController {
  static add = async (req: Request, res: Response): Promise<Response> => {
    try {
      const data: CreateHardBookDto = req.body;
      data.added_by = req.user.id;

      const result = await HardBookService.add(data);
      if (!(result instanceof HardBook)) {
        return res.status(400).json({ status: 400, error: result });
      }
      return res.status(201).json({ status: 201, data: result });
    } catch (error) {
      return res.status(500).json({ status: 500, error });
    }
  };
}
