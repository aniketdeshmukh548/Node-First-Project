// var name='Aniket';
// var age=25;
// var hobby=true

const { resolve } = require("path");

//Arrow function

// const summary=(username,userage,userhobby)=>{
//     return(
//         'User Name is'+':'+username+'User Age is'+':'+userage+'User hobby is'+':'+userhobby
//     )
// }

//Normal Function
// function summary(username,userage,userhobby){
//     return(
//         'User Name is'+':'+username+'User Age is'+':'+userage+'User hobby is'+':'+userhobby
//     )
// }

//console.log(summary(name,age,hobby))


//OBJECTS
// const student={
//     name:'Aniket',
//     age:25,
//     rollNO:1,
//     greet(){
//       console.log('Hi my name is'+this.name+' My age is'+ this.age+' & roll no is'+ this.rollNO)
//     }
//   }
//   student.greet()

//ARRAY

//const hobbies=['sports','read']
// console.log(hobbies.map(e=>'hobby:'+' '+e))
// console.log(hobbies)
// hobbies.push('programming')
// console.log(hobbies)

//const copiedarray=hobbies.slice();

//SPREAD OPERATOR
// const copiedarray=[...hobbies]
// console.log(copiedarray)

//REST OPERATOR
// const rest=(...args)=>{
//     return args;
// }
// console.log(rest(1,2,3,4))

//DESTRUCTURING ARRAY & OBJECT
//destruting is extracting elements from array/object and store them in some constants
//ARRAY
// const hobbies=['sports','read']
// const [h1,h2]=hobbies;
// console.log(h1,h2)
//OBJECT
// const student={
//     name:'Aniket',
//     age:25,
//     rollNO:1,
//     greet(){
//       console.log('Hi my name is'+this.name+' My age is'+ this.age+' & roll no is'+ this.rollNO)
//     }
//   }
// const {name,age}=student
// console.log(name,age)

////////AYNC & PROMISES
// setTimeout(() => {
//     console.log('Aniket')
// }, 2000);
// console.log('Hello');
// console.log('hi')

// const fetchData=(callback)=>{
//     setTimeout(()=>{
//         callback('DOne!')
//     },1500)
// }
// setTimeout(() => {
//     console.log('Aniket')
//     fetchData(text=>{
//         console.log(text)
//     })
// }, 2000);
// console.log('Hello');
// console.log('hi')

//PROMISE
const fetchData=()=>{
    const promise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('DOne!')
        },1500)
    })
    return promise
}
setTimeout(() => {
    console.log('Aniket')
    fetchData().then(text=>{
        console.log('Timer')
    })
}, 2000);
console.log('Hello');
console.log('hi')