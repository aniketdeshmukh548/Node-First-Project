const path=require('path')
const express =require('express');
const router=express.Router()
const rootDir=require('../util/path')

router.get('/contact',(req,res,next)=>{
    //res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title" placeholder="Add Product"><br><input type="number" name="size" placeholder="Add Size"></input><br><button type="submit">Submit</button></form>');
    res.sendFile(path.join(rootDir,'Views','contact.html'))
})
router.post('/contact',(req,res)=>{
    console.log(req.body)
    res.redirect('/success')
})

module.exports=router