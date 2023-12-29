const express = require("express")
const app= express()
const port =3001
const Product = require('./models/product')
const Customer = require('./routes/customer')
const cors = require('cors');
const db= require('./config/db/index')
const bodyParser = require('body-parser')
const productRouter = require('./routes/product');
const feedbackRouter = require('./routes/feedback')
const orderRouter = require('./routes/order');
const blogRouter = require('./routes/blog')
db.connect();
// app.use('/product',product )
// HTTP Request Logger
// const morgan = require("morgan")
// app.use(morgan("combined"))

//Mang route vào sử dung
// app.use('/product', product)

// API
// Error handling middleware

app.use(bodyParser.json());

app.use(cors());
app.use('/', productRouter);
app.use('/', orderRouter)
app.use('/', blogRouter)
app.use('/', feedbackRouter);
app.use('/', Customer)
app.listen(port, () =>{
    console.log(`My server's listening on port: ${port}`)
})

