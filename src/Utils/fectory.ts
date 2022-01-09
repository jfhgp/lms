import { validate } from "class-validator";
export class LogisticsUtils {
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
  isStudent: boolean;
}
