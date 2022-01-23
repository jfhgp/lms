import { Router, RouterOptions } from "express";
import { UserController } from "../User/User.controller";
import { SectionController } from "./Section.controller";

const router = Router();
router.use(UserController.protect);

router.post("/", SectionController.add);
router.get("/:id", SectionController.get);
router.get("", SectionController.getAll);
// router.patch("/:id", SectionController.update);

export default router;
