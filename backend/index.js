import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
dotenv.config({});
import userRoute from "./routes/user.route.js";
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

//api's
app.use("api/v1/user", userRoute);

app.listen(PORT, () => {
  connectDB();
  console.log(`server is started on port ${PORT}`);
});
