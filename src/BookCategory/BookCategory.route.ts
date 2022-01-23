import { Router, RouterOptions } from "express";
import { UserController } from "../User/User.controller";
import { BookCategoryController } from "./BookCategory.controller";

const router = Router();
router.use(UserController.protect);

router.post("/", BookCategoryController.add);
router.get("/:id", BookCategoryController.get);
router.get("", BookCategoryController.getAll);
// router.patch("/:id", BookCategoryController.update);

export default router;
