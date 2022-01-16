import { Application } from "express";
import userRoute from "./User/User.route";
import hardBookRoute from "./HardBook/HardBook.route";
import softBookRoute from "./SoftBook/SoftBook.route";

export function setup(app: Application) {
  app.use("/api/v1/users", userRoute);
  app.use("/api/v1/books/hard", hardBookRoute);
  app.use("/api/v1/books/soft", softBookRoute);
}
