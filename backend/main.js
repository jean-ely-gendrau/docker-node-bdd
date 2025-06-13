import express from "express"
import cors from "cors"
import mysql from 'mysql2/promise';

const apiRest = express();
apiRest.use(cors());

const PORT = process.env.PORT || 3000;

const connection = await mysql.createConnection({
  host: 'bd',
  user: 'admin-user',
  password: 'admin-user',
  database: 'node_product',
  port: 3306
});



apiRest.get("/", async (req, res) => {
  try {
    // execute will internally call prepare and query
    const [results, fields] = await connection.execute(
      'SELECT * FROM `products`'
    );

    res.json(results);
  } catch (err) {
    console.log(err);
  }


});

apiRest.listen(PORT, "0.0.0.0", () => {
  console.log("Server start on http://localhost:" + PORT);
})