//const http= require('http');
const express=require('express');
const bodyParser=require('body-parser')
const app=express()
//console.log(routes.sometext)
app.use(bodyParser.urlencoded({extended:false}))
app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="title" placeholder="Add Product"><br><input type="number" name="size" placeholder="Add Size"></input><br><button type="submit">Submit</button></form>');
})
app.post('/product',(req,res)=>{
    console.log(req.body)
    res.redirect('/')
})
app.use('/',(req,res,next)=>{
    res.send("<h1>Hello!!</h1>");
})
// const server=http.createServer(app)
// server.listen(3000)

app.listen(3000)