import { compare, hash } from "bcryptjs";
import { plainToClass } from "class-transformer";
import { getRepository } from "typeorm";
import { signJwt } from "../auth/Auth";
import { LogisticsUtils } from "../Utils/fectory";
import { SignInDto } from "./SignIn.dto";
import { CreateUserDto } from "./User-create.dto";
import { User } from "./User.entity";

export class UserService {
  static signUp = async (data: CreateUserDto) => {
    try {
      if (data.password !== data.passwordConfirm) {
        return { message: "Both passwords are not matching" };
      }

      const dto = plainToClass(CreateUserDto, data);

      const error = await LogisticsUtils.validator(dto);
      if (error) return error;

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
