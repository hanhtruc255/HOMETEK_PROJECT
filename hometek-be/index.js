const express = require('express')
const app=express()
// const port=3000
const cors=require('cors')
app.use(cors());
const db=require("./config/db")//ket noi voi mongodb
db.connect()

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const {acc_Router,cust_Router} = require('./routes/index')
app.use('/account', acc_Router )
app.use('/customer', cust_Router )

app.get('/', (req,res)=>{
    res.send('nay la trang chu nhe, Home Page')
})

// const AccountModel=require('./models/Account')

// app.post('/register', (req,res,next)=>{
//     var username = req.body.username
//     var password = req.body.password
    
//     AccountModel.create({
//         username: username,
//         password: password
//     })
//     try {
//         res.json("tao thanh cong ");
//     } catch (error) {
//                 res.status(500).json({ error: 'khong tao duoc' })}
// })


const ports = process.env.PORT??3000
app.listen(ports,()=>{
    console.log(`Đang chạy á, chờ tí ${ports}`)
})


//http request logger
const morgan=require('morgan')
app.use(morgan('combined'))

// const example=require('./routes/router')
// app.use('/',example)




//PHAN API 
// app.get('/', (req,res)=>{
//     res.send('hello moi nguoi')
// })
