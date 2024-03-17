const express = require("express");

const app = express();

app.get("/api", (req, res) => {
  setTimeout(() => {
    res.set("Access-Control-Allow-Origin", "http://localhost:4200");

    res.json({
      users: [
        { id: "ID1", name: "test1" },
        { id: "ID2", name: "test2" },
      ],
    });
    console.log("wait");
  }, 3000);
});

app.listen(5001, () => {
  console.log("STARTED SERVER");
});
