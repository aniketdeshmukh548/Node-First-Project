const fs= require('fs')
//create a file
fs.writeFileSync('bio.txt','Welcome to my bio!');
//add data to bio.txt
fs.appendFileSync('bio.txt',' My name is Aniket Deshmukh.')
//read file w/o getting buffer data
// const data=fs.readFileSync('bio.txt')
// const string=data.toString()
// console.log(string);
//using character encoding 
const data=fs.readFileSync('mybio.txt','utf-8');
console.log(data)
//rename file name
fs.renameSync('bio.txt','mybio.txt')