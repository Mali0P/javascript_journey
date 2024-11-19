// setTimeout(()=>{
//     console.log("Hello World") //parallelli chaaune
// },2000) //kati milisecond pachi execute huncha vanna lai asynchronous js
//setTimeout(callBack,time)
// function sum(a,b){
//     console.log(a+b);
// }
// function calculate(a,b,sumCallback){
//     sumCallback(a,b);
// }
// calculate(4,5,sum)

//nesting of callback causes callback hell
// function getData(dataId, getNextData){
//     setTimeout(()=>{
//         console.log("Data",dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },2000);
// }
// getData(1,()=>{
//     console.log("loading data 2...")
//     getData(2)
// });

//callback hell
function getData(dataId, getNextData){
    setTimeout(()=>{
        console.log("ID = ",dataId);
        if(getNextData){
            getNextData();
        }
    },1000)
}
getData(1,()=>{
    console.log("Data 2 loading...")
    getData(2,()=>{
        console.log("Data 3 loading...")
        getData(3);
    });
   
})




