const path=require('path');
const rootDir=require('../util/path')
const Product=require('../models/product')

exports.getAddProducts=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'Views','add-product.html'))
}

exports.postAddProducts=(req,res)=>{
    const product=new Product(req.body.title)
    product.save()
    console.log(req.body)
    res.redirect('/')
}

exports.getProducts=(req,res,next)=>{
    const products=Product.fetchAll((prduct)=>{
        res.sendFile(path.join(rootDir,'Views','shop.html'),{
            prods:products
        });
    })
}