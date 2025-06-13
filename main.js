import express from "express"

const apiRest = express();

const PORT = process.env.PORT || 3000;

apiRest.get("/", (req, res) => {
  const product = [
    {
      name: "café1", price: 35
    },
    {
      name: "café2", price: 6
    }
  ];

  res.json(product);
});

apiRest.listen(PORT, "0.0.0.0", () => {
  console.log("Server start on http://localhost:" + PORT);
})