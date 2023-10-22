const express =require('express');
const router=express.Router()
const productsContoller=require('../controllers/products')


router.get('/add-product',productsContoller.getAddProducts)
router.post('/add-product',productsContoller.postAddProducts)

module.exports=router;