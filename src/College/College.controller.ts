import { Request, Response } from "express";
import { CreateCollegeDto } from "./College-create.dto";
import { College } from "./College.entity";
import { CollegeService } from "./College.service";
export class CollegeController {
  static add = async (req: Request, res: Response): Promise<Response> => {
    try {
      const data: CreateCollegeDto = req.body;
      data.added_by = req.user.id;
      const result = await CollegeService.add(data);
      if (!(result instanceof College)) {
        return res.status(400).json({ status: 400, error: result });
      }
      return res.status(201).json({ status: 201, data: result });
    } catch (error) {
      return res.status(500).json({ status: 500, error });
    }
  };

  static getAll = async (req: Request, res: Response): Promise<Response> => {
    try {
      const result = await CollegeService.getAll();
      return res.status(201).json({ status: 201, data: result });
    } catch (error) {
      return res.status(500).json({ status: 500, error });
    }
  };

  static get = async (req: Request, res: Response): Promise<Response> => {
    try {
      const result = await CollegeService.get(req.params.id as any);
      return res.status(201).json({ status: 201, data: result[0] });
    } catch (error) {
      return res.status(500).json({ status: 500, error });
    }
  };
}
