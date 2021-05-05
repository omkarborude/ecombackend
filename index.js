const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

// routes
const products = require("./routes/products.router");
const users = require("./routes/users.routes");
const carts = require("./routes/carts.router");

// middlewares
const routeNotFoundHandler = require("./middlewares/route.error");
const allErrorsHandler = require("./middlewares/all-error");

// connection
const initializeConnectionDb = require("./db/db.connect");


const app = express();

app.use(bodyParser.json())
app.use(cors());

const port = process.env.PORT || 3000;

initializeConnectionDb();
app.get("/", (req,res)=>{
  res.send("Hello word!");
})

app.use("/products", products);
app.use("/users", users);
app.use("/carts", carts);


app.use(routeNotFoundHandler);


app.use(allErrorsHandler);


app.listen( port, () => {
    console.log(`server Online!`)
  })