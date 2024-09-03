import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
dotenv.config({});

const app = express();
const PORT = process.env.PORT || 8080;

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const corsOptions = {
  origin: "http//localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(cookieParser());

app.listen(PORT, () => {
  connectDB();
  console.log(`server is started on port ${PORT}`);
});
