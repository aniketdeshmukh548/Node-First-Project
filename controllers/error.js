const path=require('path')
const rootDir=require('../util/path')

exports.errorContoller=(req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,'Views','404.html'))
}