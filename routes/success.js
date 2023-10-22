const path=require('path')
const express=require('express');
const rootDir=require('../util/path')
const router=express.Router()

router.get('/success',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'Views','success.html'))
})

module.exports=router