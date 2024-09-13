import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js";
import { connectDB } from "./db/index.js";

dotenv.config();

const app = express();

app.use(express.urlencoded());
app.use(express.json());

connectDB();

app.use(cors());

app.use("/api/user", userRouter);

app.listen(5000, () => {
  console.log("server listening on post 3000");
});
