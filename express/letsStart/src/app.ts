import * as express from "express";

const app: express.Express = express();
// instance of express

const port: number = 8000;

const data = [1, 2, 3, 4];

app.get("/", (req: express.Request, res: express.Response) => {
  console.log(req);
  res.send({ data });
  //   res.send(req.body);
});

// opening a server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
