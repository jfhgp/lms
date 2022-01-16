import { Router, RouterOptions } from "express";
import * as multer from "multer";
import { uploadConfig } from "../Utils/upload";
import { UserController } from "../User/User.controller";
import { SoftBookController } from "./SoftBook.controller";

const router = Router();
router.use(UserController.protect);

router.post("/", SoftBookController.add);
// router.get("/:id", ShippingController.get);
// router.get("", ShippingController.getAll);
// router.patch("/:id", ShippingController.update);

export default router;
