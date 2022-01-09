import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";
import { tokenVerification } from "../auth/Auth";
import { Token } from "../Utils/fectory";
import { SignInDto } from "./SignIn.dto";
import { CreateUserDto } from "./User-create.dto";
import { User } from "./User.entity";
import { UserService } from "./User.service";
export class UserController {
  static signUp = async (req: Request, res: Response) => {
    try {
      const data: CreateUserDto = req.body;
      const result = await UserService.signUp(data);
      if (!(result instanceof User)) {
        return res.status(201).json({ status: 400, error: result });
      }

      return res.status(201).json({ status: 201, data: result });
    } catch (error) {
      return res.status(500).json({ error });
    }
  };

  static signIn = async (req: Request, res: Response) => {
    try {
      let data: SignInDto = req.body;
      const result = await UserService.signIn(data);
      return res.status(201).json({ status: 201, data: result });
    } catch (error) {
      return res.status(500).json({ error });
    }
  };

  static getAll = async (req: Request, res: Response) => {
    try {
      const result = await UserService.getAll();
      result.forEach((element: any) => delete element.password);
      return res.status(200).json({ status: 200, data: result });
    } catch (error) {
      return res.status(500).json({ error });
    }
  };

  static getOne = async (req: Request, res: Response) => {
    try {
      const result = await UserService.getOne(req.params.id as any);
      delete result[0].password;
      return res.status(200).json({ status: 200, data: result[0] });
    } catch (error) {
      return res.status(500).json({ error });
    }
  };

  static protect = async (req: Request, res: Response, next: NextFunction) => {
    try {
      let token;
      if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
      ) {
        token = req.headers.authorization.split(" ")[1];
      }

      if (!token) {
        return res.status(401).json({
          status: 401,
          message: "You are not logged in! Please log in to get access.",
        });
      }

      const decoded: any = await tokenVerification(token);

      let currentUser = await getRepository(User).query(
        "SELECT id, name, role, student_id FROM users WHERE id = $1",
        [decoded.id]
      );

      currentUser = currentUser[0];

      if (!currentUser) {
        return res.status(401).json({
          status: 401,
          message: "The user belonging to this token does no longer exist.",
        });
      }
      const user: Token = {
        id: currentUser.id,
        name: currentUser.name,
        role: currentUser.role,
        isStudent: currentUser.student_id ? true : false,
      };
      req.user = user;

      next();
    } catch (error) {
      return res.status(401).json({
        status: 401,
        message: "The user belonging to this token does no longer exist.",
      });
    }
  };
}