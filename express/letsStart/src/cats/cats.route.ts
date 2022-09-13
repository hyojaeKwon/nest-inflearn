import { Cat, CatType } from "./cats.model";
import { Router } from "express";

const router = Router();

// READ 고영이 데이터 전체 조회
router.get("/cats", (req, res) => {
  console.log("cat read api called");
  console.log(req.body[1]);
  const cats = Cat;

  try {
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
router.get("/cats/:id", (req, res) => {
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
router.post("/cats", (req, res) => {
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

export default router;
