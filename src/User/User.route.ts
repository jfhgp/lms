import { Router } from "express";
import { UserController } from "./User.controller";

const router = Router();

router.post("/signup", UserController.signUp);

router.post("/create-students", UserController.createStudent);
router.post("/create-staff", UserController.createStaff);

router.post("/signin", UserController.signIn);

router.use(UserController.protect);

router.get("/", UserController.getAll);
router.get("/:id", UserController.getOne);

export default router;
