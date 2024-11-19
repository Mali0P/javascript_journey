let name = "rAm"
// name.toUpperCase()//does not change the original string
// //in js strings are immutable
// console.log(name)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// name="   aaa  aaaa   "
// console.log(name.trim()) // starting ra last ko spaces trim garcha
// console.log(name.slice(2,6))//end ko hudaina 
let surname = "Adhikari"
// let username = name.concat( surname)
let username = name + surname
console.log(username)
console.log(surname.replace("A","a"))//first time A match vako bela replace
console.log(surname.replaceAll("i","b"))
console.log(surname.charAt(1)) 
