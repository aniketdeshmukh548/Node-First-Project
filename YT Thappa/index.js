const fs= require('fs');
//creating a new file
fs.writeFileSync('msg.txt','create a new file')
//appending to that file
fs.appendFileSync('msg.txt',' Hi!');
//reading from file
const read_data =fs.readFileSync('msg.txt');
//console.log(read_data);
//making buffer to readablestring
const string=read_data.toString();
console.log(string)
//rename the file
fs.renameSync('msg.txt','readwrite.txt')