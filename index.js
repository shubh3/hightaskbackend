const bodyParser = require('body-parser');
var express = require('express');
var app = express();
var cors = require('cors');
const wallet = require('./routes/walletRoute')

require('dotenv').config()
const connectWithDb = require('./utils/db');
app.use(cors())
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

//connect with database
connectWithDb();

// app.use('/eBank/v1/',entity)
app.use('/eBank/v1/',wallet)

app.get('/check',(req,res)=>{

    res.send('working');
    
})

app.listen(port , () =>{
console.log(`Server started at ${port}`)
})