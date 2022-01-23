import { Router, RouterOptions } from "express";
import { UserController } from "../User/User.controller";
import { GenderController } from "./Gender.controller";

const router = Router();
router.use(UserController.protect);

router.post("/", GenderController.add);
router.get("/:id", GenderController.get);
router.get("", GenderController.getAll);
// router.patch("/:id", GenderController.update);

export default router;
