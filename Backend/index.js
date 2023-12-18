const express = require("express")
const app= express()
const port =3000
const Product = require('./models/product')
const Customer = require('./models/customer')
const cors = require('cors');
const db= require('./config/db/index')
const bodyParser = require('body-parser')
const productRouter = require('./routes/product');
const categoryRouter = require('./routes/category')
db.connect();
// app.use('/product',product )
// HTTP Request Logger
// const morgan = require("morgan")
// app.use(morgan("combined"))

//Mang route vào sử dung
// app.use('/product', product)

// API
app.use('/', productRouter);
app.use('/', categoryRouter);
app.listen(port, () =>{
    console.log(`My server's listening on port: ${port}`)
})

