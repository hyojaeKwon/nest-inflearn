import * as express from "express";
import { Cat, CatType } from "./app.model";

const app: express.Express = express();
// instance of express

const port: number = 8000;

// loagging middleware
app.use((req, res, next) => {
  console.log("this is logging middle ware");

  next();
});

//* json middleware
app.use(express.json);

// READ 고영이 데이터 전체 조회
app.get("/cats", (req, res) => {
  try {
    const cats = Cat;

    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (e) {
    res.status(400).send({
      success: false,
      error: e,
    });
  }
});

// READ 특정 고양이 데이터 조회
app.get("/cats/:id", (req, res) => {
  try {
    const params = req.params;
    const cat = Cat.find((cat) => {
      return cat.id === params.id;
    });

    res.status(200).send({
      success: true,
      data: {
        cat,
      },
    });
  } catch (e) {
    res.status(400).send({
      success: false,
      error: e,
    });
  }
});

//* CREATE 새로운 고양이 추가 api
app.post("/cats", (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    // 저장하는 부분
    Cat.push(data); // Create Part
    res.status(200).send({
      success: true,
      data: { data },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error,
    });
  }
});

// 잘못된 url
app.use((req, res, next) => {
  res.send({ error: "404 not found error" });
});

// opening a server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
