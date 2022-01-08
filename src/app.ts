import path from "path";
import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
dotenv.config({ path: "./config/.env" });
import { createConnection } from "typeorm";
import { setup } from "./routes";

const app = express();
app.use(express.static(path.join(__dirname, "../public")));
createConnection();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

setup(app);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
