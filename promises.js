// let promise = new Promise((resolve,reject)=>{
//     console.log("Order item");
//     reject("Error Occured While Ordering")
// })


// function getData(dataId){
// return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Data Id = ",dataId);
//         resolve("success");
//     },2000)
// })
// }
// let finalVal = getData(1);

// const getPromise = ()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("I am Promise");
//         resolve("Promise fulfilled");
//     })
// }
// let promise = getPromise();
// promise.then((re)=>{
//     console.log("Success",re)
// });

// const notfullfiled = ()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("Not Fulfilled");
//         reject("Data not found");
//     })
// }
// let printReject = notfullfiled();
// printReject.catch((err)=>{
//     console.log("Error",err)
// })

//promise chaining

// function database(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
// console.log("Data = ",dataId);
// resolve("Success");
//         },3000)
//     })
// }

// database(1).then((result)=>{
// console.log("loading data 2...");
//     return database(2);

// }).
// then((result)=>{
//     console.log(result);
// })

// function userInfo(id,nextID){
//     setTimeout(()=>{
// console.log("ID = ",id);
// if(nextID){
//     console.log("Loading Data",id+1)
//     return nextID();
// }
//     },2000)
// }
// userInfo(1,()=>{
//     userInfo(2,()=>{
//         userInfo(3);
//     });
// })


