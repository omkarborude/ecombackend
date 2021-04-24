const express = require('express')

const cors = require('cors');

const app = express()
app.use(express.json())
app.use(cors());

const port = 3000;
const products = require('./routes/products.router.js')
const userRoutes = require('./routes/users.routes');

const { initializeDBconnection } = require("./db/db.connect.js")

initializeDBconnection()

app.use('/products',products);
app.use('/users',userRoutes)

app.get('/', function(req, res) {
   
   res.json({hello: "world"})
} )

app.listen(process.env.PORT || port, () => console.log(`Example app listening at http://localhost:${port}`))