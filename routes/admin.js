const express =require('express');
const router=express.Router()

router.get('/add-product',(req,res,next)=>{
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title" placeholder="Add Product"><br><input type="number" name="size" placeholder="Add Size"></input><br><button type="submit">Submit</button></form>');
})
router.post('/add-product',(req,res)=>{
    console.log(req.body)
    res.redirect('/')
})

module.exports=router