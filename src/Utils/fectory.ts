import { validate } from "class-validator";
export class LMSUtils {
  static validator = async (dto: any) => {
    const errors = await validate(dto);
    if (errors.length) {
      for (let i = 0; i < errors.length; i++) {
        const element = errors[i];

        return element.constraints;
      }
    }
  };
}

export abstract class Token {
  id: number;
  name: string;
  role: string;
  is_student: boolean;
  college_id: number;
  region_id: number;
}
