import express, { Request, Response } from "express";
import dotenv from "dotenv";
import router from "./routes/Routes"

dotenv.config()
const app = express();
app.use(express.json());

const URL_PREFIX = process.env.URL_PREFIX || "/api/v1"

app.get(`${URL_PREFIX}/`, (req: Request, res: Response) => {
  res.status(200);
  res.send({
    "message": "Welcome to seakun.id blog"
  });
  return;
})

app.use(URL_PREFIX, router);

app.listen(process.env.APP_PORT, () => {
  console.log(`server running on http://localhost:${process.env.APP_PORT}${URL_PREFIX}`);
});