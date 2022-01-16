import { Router } from "express";
import { UserController } from "../User/User.controller";
import { HardBookController } from "./HardBook.controller";

const router = Router();
// router.use(UserController.protect);

router.post("/", HardBookController.add);
// router.get("/:id", ShippingController.get);
// router.get("", ShippingController.getAll);
// router.patch("/:id", ShippingController.update);

export default router;
