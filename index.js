require('dotenv').config()
const express = require('express')
const app=express()
const port=4000;
app.get('/',(req,res)=>{
    res.send('welcome tahfeez only enjoy')
});
app.get('/only',(req,res)=>{
    res.send('welcome again tahfeez')
})
console.log(process.env);

app.listen(process.env.PORT,()=>{
    console.log(`listening on the port ${process.env.PORT}`)
});