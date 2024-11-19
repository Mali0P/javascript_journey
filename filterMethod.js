// let array= [1,2,3,4]
// let evenArray = array.filter((val)=>{
//     return val%2===0;

// })
// console.log(evenArray)
let array = [1,2,3,4]
let result = array.reduce((cur,pre)=>{
    return pre>cur?pre:cur;
})
console.log(result)