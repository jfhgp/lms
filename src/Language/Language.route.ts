import { Router, RouterOptions } from "express";
import { UserController } from "../User/User.controller";
import { LanguageController } from "./Language.controller";

const router = Router();
router.use(UserController.protect);

router.post("/", LanguageController.add);
router.get("/:id", LanguageController.get);
router.get("", LanguageController.getAll);
// router.patch("/:id", LanguageController.update);

export default router;
