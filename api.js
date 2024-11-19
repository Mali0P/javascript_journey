const URL = "https://cat-fact.herokuapp.com/facts";
(async function dogData(){
    let value = await fetch(URL);
    console.log(value)
    let data = await value.json();
    console.log(data);
   let random = Math.floor(Math.random()*data.length);
   console.log(data[random].text)
})()