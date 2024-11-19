// class Parent{
//     hello(){
//         console.log("Hello World");
//     }
// }
// class Child extends Parent{
//     constructor(){
//         super()
//     }
//     eat(){
//         super.hello();
//         console.log("Eat")
//     }

// } 
// let newObj = new Child();
// console.log(newObj.hello()) //methodoverriding child class has more 
// class User{
//     userDetails(name,email){
//         this.name=name;
//         this.email=email;
//     }
//     viewData(){
//         console.log(`User name is ${this.name}\nUser Email is ${this.email}`)
//     }
// }
// let newObj =new User();
// newObj.userDetails("Pranesh Mali","pranesh.malakar.1@gmail.com");
// newObj.viewData(); 

class Users{
    viewData(){
        console.log("View Profile");
    }
}
class Admin extends Users{
    editData(){
        console.log("Edit Data");
    }
}

let admin = new Admin();
admin.viewData()