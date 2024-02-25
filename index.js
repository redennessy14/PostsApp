import express from "express";
import mongoose from "mongoose";
import {
  registerValidation,
  loginValidation,
} from "./validations/validations.js";
import checkAuth from "./utils/checkAuth.js";

import * as UserController from "./controllers/UserController.js";

mongoose
  .connect(
    "mongodb+srv://redennessy:Nortenos67@cluster0.fvxmkix.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("db ok");
  })
  .catch((err) => {
    console.log("db error", err);
  });

const app = express();

app.use(express.json());

app.post("/auth/login", loginValidation, UserController.login);

app.post("/auth/register", registerValidation, UserController.register);

app.get("/auth/me", checkAuth, UserController.getMe);

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log("Server OK");
});
