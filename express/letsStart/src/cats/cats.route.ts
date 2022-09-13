import { Cat, CatType } from "./cats.model";
import { Router } from "express";

const router = Router();

// READ 고영이 데이터 전체 조회
router.get("/cats", (req, res) => {
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

//* UPDATE 고양이 데이터 업데이터 PUT
router.put("/cats:id", (req, res) => {
  try {
    const body = req.body;
    const params = req.params;
    let result;
    Cat.forEach((cat) => {
      if (cat.id == params.id) {
        cat = body;
        result = cat;
      }
    });

    res.status(200).send({
      success: true,
      data: {
        result,
      },
    });
  } catch (e) {
    res.status(400).send({
      success: false,
      error: e,
    });
  }
});

//* UPDATE 고양이 데이터 부분적 업데이트 -> Patch
router.patch("/cats:id", (req, res) => {
  try {
    const body = req.body;
    const params = req.params;
    let result;
    Cat.forEach((cat) => {
      if (cat.id == params.id) {
        cat = { ...cat, ...body };
        // 구조 분해 할당
        result = cat;
      }
    });

    res.status(200).send({
      success: true,
      data: {
        result,
      },
    });
  } catch (e) {
    res.status(400).send({
      success: false,
      error: e,
    });
  }
});

//* DELETE 고양이 데이터 삭제  -> DELETE
router.delete("/cats/:id", (req, res) => {
  try {
    const params = req.params;
    const newCat = Cat.filter((cat) => cat.id !== params.id);
    // list에서 filter알아보기

    res.status(200).send({
      success: true,
      data: newCat,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error,
    });
  }
});
export default router;
