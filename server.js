require('dotenv').config() 
require('express-async-errors')
const express = require('express') // ดึง Library Express มาใช้งาน
const app = express() //เรียกใช้งาน
const cors = require('cors') //กำหนด http ที่เข้ามา
const corsOptions = require('./src/config/corsOption')
const mongoose = require('mongoose')


app.use(express.json()) 
app.use(cors())

console.log(process.env.PORT) 

app.listen(3300 , () => console.log('server is runing with port 3300'))