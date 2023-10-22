
const express=require('express');
const router=express.Router()
const successContoller=require('../controllers/contact')

router.get('/success',successContoller.getSuccess)

module.exports=router