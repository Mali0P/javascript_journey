// const student ={
//     name:"Mali",
//     age:24,
//     //printDetails(){}
//     printDetails:function (){
// console.log(`Name = ${this.name}\nAge = ${this.age}`);
//     }
// };
// console.log(student.printDetails())

// const employee = {
//     cal(){
//         console.log("10% Tax");
//     }
// }
// const karanArjun = {
//     salary:3000 //afnai object ma vako same method cha vani tyo use huncha
// };
// karanArjun.__proto__ = employee;
// console.log(karanArjun)

// class Toyota {
//     start(){
//         console.log("Start")
//     }
//     close(){
//         console.log("close");
//     }
//     setBrand(brand)
//     {
//         this.brandName = brand;
//     }
// }
// let Mercedies = new Toyota();

class Toyota {
    constructor(){
        console.log("Build your own Dream car");
    }
    color(color){
        this.color = color;
        console.log(`Color = ${this.color}`)
    }
}
let display = new Toyota();
display.color("Red")

