






















let playerName = document.querySelectorAll("input") //it returns all input tags in form of an array. further we have to access particular tag  by having indexing of this array

//select all buttons
let btns = document.getElementsByClassName("diceRollButton")

//select scores
let scores = document.getElementsByTagName("span")
 
//events, addEventListner

for (let i = 0; i < btns.length; i++) {
    //console.log(btns[i].id);

    btns[i].addEventListener("click", ()=>{rollDice(btns[i].id)}) //using addEventListner
    
}

function rollDice(btn_id) //this help me to understand which btn is pressed
{
    //console.log(btn_id);
    btns[btn_id].disabled = true
    let arr = ["1","2","3","4","5","6"]
    let randomIndex = Math.floor(Math.random()*arr.length)  //0-6 6 is not included
    //only integers
    let randomDice = arr[randomIndex];
    //console.log(randomDice)
    scores[btn_id].innerText = randomDice    //applying innerText method in span tag
}