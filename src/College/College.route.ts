import { Router } from "express";
import { UserController } from "../User/User.controller";
import { CollegeController } from "./College.controller";

const router = Router();
router.use(UserController.protect);

router.post("/", CollegeController.add);
router.get("/:id", CollegeController.get);
router.get("/", CollegeController.getAll);
// router.patch("/:id", HardBookController.update);

export default router;
