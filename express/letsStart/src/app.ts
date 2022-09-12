import * as express from "express";
import { Cat, CatType } from "./app.model";

const app: express.Express = express();
// instance of express

const port: number = 8000;

app.use((req, res, next) => {
  console.log("this is logging middle ware");
  console.log(req.rawHeaders[1]);
  next();
});
// 미들웨어는 가장 상단에 위치해야함.

app.get("/", (req: express.Request, res: express.Response) => {
  console.log(req);
  res.send({ cats: Cat });
  //   res.send(req.body);
});

// opening a server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
