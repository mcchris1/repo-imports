import express from "express";

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log("Express is up and running!");
});

app.get("/", (req, res) => {
  res.json({
    message: "99 bottles of beer on the wall",
    next: "http://localhost:3000/98",
  });
});

app.get("/:number_of_bottles", (req, res) => {
  let numBottles = req.params.number_of_bottles;

  if (numBottles > 0) {
    res.json({
      message: `${numBottles} bottles of beer on the wall`,
      next: `http://localhost:3000/${numBottles - 1}`,
    });
  } else {
    res.json({
      message: `0 bottles of beer on the wall`,
      next: `http://localhost:3000/`,
    });
  }
});