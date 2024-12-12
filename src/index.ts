import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config()
const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200);
  res.send({
    "message": "Welcome to seakun.id blog"
  });
  return;
})


app.listen(process.env.APP_PORT, () => {
  console.log(`server running on http://localhost:${process.env.APP_PORT}`);
});