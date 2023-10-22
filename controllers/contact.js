const path=require('path');
const rootDir=require('../util/path')


exports.getContact=(req,res,next)=>{
    //res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title" placeholder="Add Product"><br><input type="number" name="size" placeholder="Add Size"></input><br><button type="submit">Submit</button></form>');
    res.sendFile(path.join(rootDir,'Views','contact.html'))
}

exports.postContact=(req,res)=>{
    console.log(req.body)
    res.redirect('/success')
}

exports.getSuccess=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'Views','success.html'))
}