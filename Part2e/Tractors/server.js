import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());

app.get("/api/tractors", (req, res) => {
  fs.readFile("tractors.json", "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error reading file!");
    } else {
      const tractors = JSON.parse(data);
      res.json(tractors);
    }
  });
});

app.listen(port, () =>
  console.log("Server listen in port http://localhost:${port}")
);
