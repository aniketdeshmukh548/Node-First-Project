const express =require('express');
const router=express.Router()
const contactContoller=require('../controllers/contact')

router.get('/contact',contactContoller.getContact)
router.post('/contact',contactContoller.postContact)

module.exports=router