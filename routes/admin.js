const path=require('path')
const express =require('express');
const router=express.Router()
const rootDir=require('../util/path')

router.get('/add-product',(req,res,next)=>{
    //res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title" placeholder="Add Product"><br><input type="number" name="size" placeholder="Add Size"></input><br><button type="submit">Submit</button></form>');
    res.sendFile(path.join(rootDir,'Views','add-product.html'))
})
router.post('/add-product',(req,res)=>{
    console.log(req.body)
    res.redirect('/')
})

module.exports=router