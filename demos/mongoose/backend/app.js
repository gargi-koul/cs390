// app.js

import "./env.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import logger from "morgan";
import path from "node:path";
import mongoose from "mongoose";
import { fileURLToPath } from "node:url";
import indexRouter from "./routes/index.js";

import blogRouter from "./routes/blog.js";
import authRouter from "./routes/auth.js"; // Update: Import the authRouter

const app = express();
const __dirname = fileURLToPath(new URL(".", import.meta.url));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB");
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/", indexRouter);
app.use("/blog", blogRouter);
app.use("/auth", authRouter); // Update: Use the authRouter for authentication routes

export default app;
