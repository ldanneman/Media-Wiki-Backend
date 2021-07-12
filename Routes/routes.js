const router = require("express").Router();
const axios = require("axios");
const fetch = require("node-fetch");

router.post("/iframe", async (req, res) => {
  console.log(req.body);
  // try {
  //   const response = await axios.get(req.body);
  //   let x = response.data.query.recentchanges;
  // } catch (error) {
  //   console.error(error);
  // }
});

module.exports = router;
