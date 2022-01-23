import { Router, RouterOptions } from "express";
import { UserController } from "../User/User.controller";
import { DesignationController } from "./Designation.controller";

const router = Router();
router.use(UserController.protect);

router.post("/", DesignationController.add);
router.get("/:id", DesignationController.get);
router.get("", DesignationController.getAll);
// router.patch("/:id", DesignationController.update);

export default router;
