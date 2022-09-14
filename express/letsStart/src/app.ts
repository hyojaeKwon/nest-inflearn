import * as express from "express";
import { Cat, CatType } from "./cats/cats.model";
import catsRouter from "./cats/cats.route";

//* Singleton
class Server {
  public app: express.Application;

  constructor() {
    const app: express.Application = express();
    this.app = app;
  }

  private setRoute() {
    // 중간 route겸 middle ware 추가
    // router 분리
    this.app.use(catsRouter);
  }

  private setMiddleWare() {
    this.app.use((req, res, next) => {
      console.log("this is logging middle ware");
      next();
    });

    //* json middleware
    this.app.use(express.json());

    this.setRoute();

    // 잘못된 url
    this.app.use((req, res, next) => {
      res.send({ error: "404 not found error" });
    });
  }

  public listen() {
    this.setMiddleWare();
    this.app.listen(8000, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  }
}

function init() {
  const server = new Server();
  server.listen();
}

init();
