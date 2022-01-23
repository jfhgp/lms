import { Router, RouterOptions } from "express";
import { UserController } from "../User/User.controller";
import { MaritalStatusController } from "./MaritalStatus.controller";

const router = Router();
router.use(UserController.protect);

router.post("/", MaritalStatusController.add);
router.get("/:id", MaritalStatusController.get);
router.get("", MaritalStatusController.getAll);
// router.patch("/:id", MaritalStatusController.update);

export default router;
