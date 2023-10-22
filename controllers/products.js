const path=require('path');
const rootDir=require('../util/path')
let products=[]

exports.getAddProducts=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'Views','add-product.html'))
}

exports.postAddProducts=(req,res)=>{
    products.push({title:req.body.title})
    console.log(req.body)
    res.redirect('/')
}

exports.getProducts=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'Views','shop.html'))
}