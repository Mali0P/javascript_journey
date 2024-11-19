// let array = [1,2,3,4]
// array.forEach((value,index)=>{
//     console.log(value,index)
// })//higher order function using another function as a parameter or return another function
//calback function is a function passed as an argument to another function
let array = [1,2,3,4,5]
array.forEach((value,i)=>{
    array[i]=value*value;
   console.log(`${i+1}. The Square Of ${value} is ${array[i]}`) ;
})

