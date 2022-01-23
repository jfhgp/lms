import { Router, RouterOptions } from "express";
import { UserController } from "../User/User.controller";
import { QualificationController } from "./Qualification.controller";

const router = Router();
router.use(UserController.protect);

router.post("/", QualificationController.add);
router.get("/:id", QualificationController.get);
router.get("", QualificationController.getAll);
// router.patch("/:id", QualificationController.update);

export default router;
