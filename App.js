//const http= require('http');
const path=require('path')
const express=require('express');
const bodyParser=require('body-parser')
const app=express()
const errorContoller=require('./controllers/error')

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
app.use(errorContoller.errorContoller)
// const server=http.createServer(app)
// server.listen(3000)

app.listen(3000)