import { Router, RouterOptions } from "express";
import { UserController } from "../User/User.controller";
import { BookSubCategoryController } from "./BookSubCategory.controller";

const router = Router();
router.use(UserController.protect);

router.post("/", BookSubCategoryController.add);
router.get("/:id", BookSubCategoryController.get);
router.get("", BookSubCategoryController.getAll);
// router.patch("/:id", BookSubCategoryController.update);

export default router;
