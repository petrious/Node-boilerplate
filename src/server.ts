require("dotenv").config({
  path:
    process.env.NODE_ENV === "development"
      ? ".env.development"
      : ".env.production",
});
import "reflect-metadata";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";

//config

//Rotas
import auth from "./api/routes/auth";

//Middlewares

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// app.use(authMiddleware.unless(unless));

app.use("/", auth);

const server = app.listen(port, () => {
  const address = server.address();

  let addressPort = 0;

  if (address && typeof address === "object") addressPort = address.port;
  else if (address) addressPort = +address;

  console.log("💥 Express listening at ", addressPort);
});
