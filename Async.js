// async function userInfo(){
// console.log("Hello World");
// }
// console.log(userInfo())
function api(data){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
console.log("ID = ",data)
        },2000);
    })
}
(async function apiReturn(){
    await api(1);
})()



