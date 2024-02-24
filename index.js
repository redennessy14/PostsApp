import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { validationResult } from "express-validator";
import { registerValidation } from "./validations/auth.js";

mongoose
  .connect(
    "mongodb+srv://redennessy:Nortenos67@cluster0.fvxmkix.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("db ok");
  })
  .catch((err) => {
    console.log("db error", err);
  });

const app = express();

app.use(express.json());

app.post("/auth/register", registerValidation, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors.array());
  }
  res.json({
    success: true,
  });
});

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log("Server OK");
});
