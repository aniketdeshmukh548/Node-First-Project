const fs=require('fs')

const requestHandler=(req,res)=>{
    const url=req.url;
    const method=req.method;
    if(url==='/'){
        res.write('<html>');
       res.write('<head><title>Submit Form</title></head>')
       res.write('<body><form action="/message" method="POST"><input type="text" name="data"><button type="submit">SEND</button></form></body>')
       res.write('</html>')
       return res.end()
       }
       if(url==='/message' && method=='POST'){
        const body=[];
        req.on('data',(chunk)=>{
            console.log(chunk)
            body.push(chunk)
        })
        return req.on('end',()=>{
            const parsedBody=Buffer.concat(body).toString();
            const message=parsedBody.split('=')[1];
            fs.writeFile('msg.txt',message,err=>{
                res.statusCode=302;
                res.setHeader=('Location','/');
                return res.end()
            });
        })
       }
    res.setHeader('Context-Type','test/html');
       res.write('<html>');
       res.write('<head><title>My first project</title></head>')
       res.write('<body><h1>My node server connection</h1></body>')
       res.write('</html>')
       res.end()
}
//3 ways of exporting
//1 => module.exports=requestHandler;
//2 =>  module.exports={
//     handler:requestHandler,
//     sometext:'hard coded txt'
// }

//3 =>
module.exports.handler=requestHandler;
module.exports.sometext='hard coded text';