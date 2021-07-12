const router = require("express").Router();
const axios = require("axios");
const fetch = require("node-fetch");

router.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      "https://www.mixesdb.com/db/api.php?action=query&format=json&list=recentchanges&rcnamespace=0&rcstart=&rcprop=user%7Ctimestamp%7Ctitle&rclimit=75&rctype=new&redirects="
    );
    let x = response.data.query.recentchanges;
    // console.log(x[0])
    let array = [];
    let array2 = [];
    for (i = 0; i < 10; i++) {
      array.push(`https://www.mixesdb.com/w/${x[i].title}`);
    }
    // for (let i = 0; i < array.length; i++) {
    //   try {
    //     console.log(array[i].split("-")[3]);
    //     const response = await axios.get(
    //       `https://www.mixesdb.com/db/api.php?action=query&list=categorymembers&cmtitle=Category:${
    //         array[i].split("-")[3]
    //       }`
    //     );
    //     let x = response.data;
    //     let z = x.split('"warnings":');
    //     // array2.push(z[1]);
    //     // console.log(z[1]);
    //     let y = z[1].split("</pre>");
    //     console.log(y[0]);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }

    console.log(array);
    res.send(array);
  } catch (error) {
    console.error(error);
  }
});

router.post("/iframe", async (req, res) => {
  console.log("REQ BODY", req.body, "REQ>BDOY", req.body.item);
  console.log("called");
  try {
    const response = await axios.get(req.body.item);
    let x = response.data;
    console.log(x);
  } catch (error) {
    console.error(error);
  }
  res.send("inddeed");
});

module.exports = router;
