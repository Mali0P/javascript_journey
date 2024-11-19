function sum(a){//local variable and block scoped 
  
    console.log(a)//before return
    return a;
    console.log(a)//after return wala code execute hudaina
}
let val = sum("kcha")
console.log(val)
//arrow function
const value = (a,b)=>{//function variable
  console.log((a+b))
}
value(1,2)