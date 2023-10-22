//const http= require('http');
const path=require('path')
const express=require('express');
const bodyParser=require('body-parser')
const app=express()

const adminRoutes=require('./routes/admin')
const shopRoutes=require('./routes/shop')
const successRoutes=require('./routes/contact')
const sucmsgRoutes=require('./routes/success')

//console.log(routes.sometext)
app.use(bodyParser.urlencoded({extended:false}))
app.use('/admin',adminRoutes)
app.use(shopRoutes)
app.use(successRoutes)
app.use(sucmsgRoutes)
app.use(express.static(path.join(__dirname,'public')))
app.use('/',(req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'Views','404.html'))
})
// const server=http.createServer(app)
// server.listen(3000)

app.listen(3000)