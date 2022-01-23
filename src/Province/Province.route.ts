import { Router, RouterOptions } from "express";
import { UserController } from "../User/User.controller";
import { ProvinceController } from "./Province.controller";

const router = Router();
router.use(UserController.protect);

router.post("/", ProvinceController.add);
router.get("/:id", ProvinceController.get);
router.get("", ProvinceController.getAll);
// router.patch("/:id", ProvinceController.update);

export default router;
