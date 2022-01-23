import { Router, RouterOptions } from "express";
import { UserController } from "../User/User.controller";
import { SubjectController } from "./Subject.controller";

const router = Router();
router.use(UserController.protect);

router.post("/", SubjectController.add);
router.get("/:id", SubjectController.get);
router.get("", SubjectController.getAll);
// router.patch("/:id", SubjectController.update);

export default router;
