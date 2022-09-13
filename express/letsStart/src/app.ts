import * as express from "express";
import { Cat, CatType } from "./cats/cats.model";
import catsRouter from "./cats/cats.route";

const app: express.Express = express();
// instance of express

const port: number = 8000;

// loagging middleware
app.use((req, res, next) => {
  console.log("this is logging middle ware");
  next();
});

//* json middleware
app.use(express.json());

// 중간 route겸 middle ware 추가
// router 분리
app.use(catsRouter);

// 잘못된 url
app.use((req, res, next) => {
  res.send({ error: "404 not found error" });
});

// opening a server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
