const http= require('http');
const { text } = require('stream/consumers');

//Can create in this way or below is anonymous arrow function
// function rqListner(req,res){
// }
// http.createServer(rqListner)
const server=http.createServer((req,res)=>{
    //console.log(req.url,req.method,req.headers)
   // process.exit()
   const url=req.url;
   if(url==='/'){
    res.write('<html>');
   res.write('<head><title>Submit Form</title></head>')
   res.write('<body><form action="/message" method="POST"><input type="text" name="data"><button type="submit">SEND</button></form></body>')
   res.write('<body><form action="/home" method="POST"><input type="text" placeholder="HOME PAGE REDIRECT" name="data"><button type="submit">SEND</button></form></body>')
   res.write('</html>')
   return res.end()
   }
   if(url==='/home'){
    res.write('<html>');
   res.write('<head><title>Home Page</title></head>')
   res.write('<body><h1>Welcome home</h1></body>')
   res.write('</html>')
   return res.end()
   }
   if(url==='/about'){
    res.write('<html>');
   res.write('<head><title>About Page</title></head>')
   res.write('<body><h1>Welcome to About Us page</h1></body>')
   res.write('</html>')
   return res.end()
   }
   if(url==='/node'){
    res.write('<html>');
   res.write('<head><title>Node Page</title></head>')
   res.write('<body><h1>Welcome to my Node Js project</h1></body>')
   res.write('</html>')
   return res.end()
   }
   if(url==='/'){
    res.write('<html>');
   res.write('<head><title>Submit Form</title></head>')
   res.write('<body><form action="/message" method="POST"><input type="text" name="data"><button type="submit">SEND</button></form></body>')
   res.write('</html>')
   return res.end()
   }
   res.setHeader('Context-Type','test/html');
   res.write('<html>');
   res.write('<head><title>My first project</title></head>')
   res.write('<body><h1>My node server connection</h1></body>')
   res.write('</html>')
   res.end()
})
server.listen(3000)