import { Application } from "express";
import userRoute from "./User/User.route";

export function setup(app: Application) {
  app.use("/api/v1/users", userRoute);
}
