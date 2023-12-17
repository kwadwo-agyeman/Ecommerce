const express = require('express');
const app = express()
const cors = require('cors')
app.use(cors())
const POST = 5000;
const {storeProducts} = require('./data.js')
app.get('/api/products',(req,res)=>{
    res.json(storeProducts)
})
app.all('*',(req,res)=>{
    res.send('404 Page Not Found')
})
app.listen(POST,()=>{
    console.log('server listening at port 5000');
})
