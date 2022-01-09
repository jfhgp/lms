import { compare, hash } from "bcryptjs";
import { plainToClass } from "class-transformer";
import { getRepository } from "typeorm";
import { signJwt } from "../auth/Auth";
import { College } from "../College/College.entity";
import { Employee } from "../Employee/Employee.entity";
import { Region } from "../Region/Region.entity";
import { Student } from "../Student/Student.entity";
import { LogisticsUtils } from "../Utils/fectory";
import { SignInDto } from "./SignIn.dto";
import { CreateUserDto } from "./User-create.dto";
import { User } from "./User.entity";

export class UserService {
  static signUp = async (data: CreateUserDto) => {
    try {
      if (!data.student_id && !data.employee_id) {
        return { error: "atleast student or employee id should be present" };
      }

      if (data.student_id && data.employee_id) {
        return { error: "required only one id student or employee" };
      }

      if (data.student_id) {
        let student = await getRepository(Student).query(
          "SELECT id FROM students WHERE id = $1",
          [data.student_id]
        );
        if (student.length < 1) {
          return { error: "incorrect student id" };
        }
      }

      if (data.employee_id) {
        let student = await getRepository(Employee).query(
          "SELECT id FROM employees WHERE id = $1",
          [data.employee_id]
        );
        if (student.length < 1) {
          return { error: "incorrect employee id" };
        }
      }

      if (data.college_id) {
        let student = await getRepository(College).query(
          "SELECT id FROM colleges WHERE id = $1",
          [data.college_id]
        );
        if (student.length < 1) {
          return { error: "incorrect college id" };
        }
      }

      if (data.region_id) {
        let student = await getRepository(Region).query(
          "SELECT id FROM regions WHERE id = $1",
          [data.region_id]
        );
        if (student.length < 1) {
          return { error: "incorrect region id" };
        }
      }

      const dto = plainToClass(CreateUserDto, data);

      const error = await LogisticsUtils.validator(dto);
      if (error) return error;

      if (data.password !== data.passwordConfirm) {
        return { message: "Both passwords are not matching" };
      }

      dto.password = await hash(dto.password, 10);

      return await User.save(await User.create(dto));
    } catch (error) {
      return error;
    }
  };

  static signIn = async (data: SignInDto) => {
    try {
      const dto = plainToClass(SignInDto, data);
      const error = await LogisticsUtils.validator(dto);
      if (error) return error;

      let user = await getRepository(User).query(
        "SELECT * FROM users WHERE email = $1",
        [dto.email]
      );

      user = user[0];

      if (!user || !(await compare(dto.password, user.password))) {
        return { error: "Incorrect email or password" };
      }
      user.token = signJwt(user.id);
      delete user.password;

      return user;
    } catch (error) {
      return error;
    }
  };

  static getAll = async () => {
    try {
      return await getRepository(User).query("SELECT * FROM users");
    } catch (error) {
      return error;
    }
  };

  static getOne = async (id: number) => {
    try {
      return await getRepository(User).query(
        "SELECT * FROM users WHERE id = $1",
        [id]
      );
    } catch (error) {
      return error;
    }
  };
}
