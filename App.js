const http= require('http')

//Can create in this way or below is anonymous arrow function
// function rqListner(req,res){
// }
// http.createServer(rqListner)
const server=http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers)
   // process.exit()
})
server.listen(3000)