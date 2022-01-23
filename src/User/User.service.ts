import { compare, hash } from "bcryptjs";
import { randomBytes, createHash } from "crypto";
import { plainToClass } from "class-transformer";
import { getRepository } from "typeorm";
import { signJwt } from "../auth/Auth";
import { College } from "../College/College.entity";
import { Designation } from "../Designation/Designation.entity";
import { Employee } from "../Employee/Employee.entity";
import { Region } from "../Region/Region.entity";
import { Student } from "../Student/Student.entity";
import { LMSUtils } from "../Utils/fectory";
import { ChangePasswordDto } from "./ChangePassword.dto";
import { SignInDto } from "./SignIn.dto";
import { CreateStaffDto } from "./Staff-create.dto";
import { CreateStudentDto } from "./Student-create.dto";
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

      const error = await LMSUtils.validator(dto);
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

  static createStudent = async (data: CreateStudentDto) => {
    try {
      if (data.password !== data.passwordConfirm) {
        return { error: "password and password confirm not matches" };
      }

      if (data.email) {
        let email = await getRepository(User).query(
          "SELECT email FROM users WHERE email = $1",
          [data.email]
        );
        if (email.length > 0) {
          return { error: "email already exists" };
        }
      }

      if (data.contact_no) {
        let contact_no = await getRepository(User).query(
          "SELECT contact_no FROM users WHERE contact_no = $1",
          [data.contact_no]
        );
        if (contact_no.length > 0) {
          return { error: "contact_no already exists" };
        }
      }

      const dto = plainToClass(CreateStudentDto, data);

      const error = await LMSUtils.validator(dto);
      if (error) return error;

      dto.password = await hash(dto.password, 10);
      dto.is_student = true;
      return await User.save(await User.create(dto));
    } catch (error) {
      return error;
    }
  };

  static createStaff = async (data: CreateStaffDto) => {
    try {
      if (data.password !== data.passwordConfirm) {
        return { error: "password and password confirm not matches" };
      }

      if (data.designation_id) {
        let designation = await getRepository(Designation).query(
          "SELECT id FROM designations WHERE id = $1",
          [data.designation_id]
        );
        if (designation.length < 1) {
          return { error: "designation id not exists" };
        }
      }

      if (data.email) {
        let email = await getRepository(User).query(
          "SELECT email FROM users WHERE email = $1",
          [data.email]
        );
        if (email.length > 0) {
          return { error: "email already exists" };
        }
      }

      if (data.contact_no) {
        let contact_no = await getRepository(User).query(
          "SELECT contact_no FROM users WHERE contact_no = $1",
          [data.contact_no]
        );
        if (contact_no.length > 0) {
          return { error: "contact_no already exists" };
        }
      }

      const dto = plainToClass(CreateStaffDto, data);

      const error = await LMSUtils.validator(dto);
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
      const error = await LMSUtils.validator(dto);
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

  static changePassword = async (data: ChangePasswordDto) => {
    try {
      const dto = plainToClass(ChangePasswordDto, data);

      const error = await LMSUtils.validator(dto);
      if (error) return error;

      if (dto.password !== dto.passwordConfirm) {
        return { error: "both passwords not maches" };
      }

      const user = await getRepository(User).query(
        "SELECT password FROM users WHERE id = $1",
        [dto.id]
      );

      if (user.length > 1) {
        let check = await compare(dto.passwordOld, user[0].password);

        if (!check) {
          return { error: "Your current password is wrong." };
        }
      }

      dto.password = await hash(dto.password, 10);
      await User.update({ id: dto.id }, { password: dto.password });

      return signJwt(dto.id);
    } catch (error) {
      return error;
    }
  };

  static forgotPassword = async (email: string) => {
    try {
      if (!email) {
        return { error: "Please provide email address" };
      }
      let user = await getRepository(User).query(
        "SELECT email FROM users WHERE email = $1",
        [email]
      );
      user = user[0];
      if (!user) {
        return { error: "There is no user with this email address" };
      }

      const resetToken = randomBytes(32).toString("hex");

      let passwordResetToken = createHash("sha256")
        .update(resetToken)
        .digest("hex");

      let passwordResetExpires = Date.now() + 10 * 60 * 1000;

      let update = await User.update(
        { email },
        { passwordResetToken, passwordResetExpires }
      );
      if (update.affected === 1 || "1") {
        return resetToken;
      } else {
        return { error: "something went wrong" };
      }
    } catch (error) {
      return error;
    }
  };
}
