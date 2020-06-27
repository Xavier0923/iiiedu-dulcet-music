const express = require('express');
const router = express.Router();
const db = require(__dirname + "/db_connect2");

router.post("/newsList", async (req, res) => {
    const [data] = await db.query(
      "SELECT * FROM `news`"
    );
    res.json(data);
  }); 

 router.post("/newsCatrgory", async (req, res) => {
    const [data] = await db.query(
      "SELECT * FROM `news_category`"
    );
    res.json(data);
 }); 

router.post("/newsid", async (req, res) => {
    let { NewsCategory,NewsID } = req.body;
    const [data] = await db.query(
      "SELECT *  FROM `news` WHERE (`NewsID`, `NewsCategory`)=(?,?)",
      [NewsID,NewsCategory]
    );
    res.json(data);
  });  

module.exports = router;