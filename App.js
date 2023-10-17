//const http= require('http');
const express=require('express');
const app=express()
//console.log(routes.sometext)
app.use((req,res,next)=>{
    console.log('Inn the middleware!')
    next()
})
app.use((req,res,next)=>{
    console.log('In another middleware!')
    res.send("<h1>Hello!!</h1>");
    //res.send("{ key1: value }")
})
// const server=http.createServer(app)
// server.listen(3000)

app.listen(3000)