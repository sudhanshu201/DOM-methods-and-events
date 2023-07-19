
let playerName = document.querySelectorAll("input") //it returns all input tags in form of an array. further we have to access particular tag  by having indexing of this array

//select all buttons
let btns = document.getElementsByClassName("diceRollButton")

//select scores
let scores = document.getElementsByTagName("span")

let winnerbtn = document.getElementById("winner")

let output = document.querySelector(".output")
 
winnerbtn.disabled = true
//events, addEventListner

for (let i = 0; i < btns.length; i++) {
    //console.log(btns[i].id);

    btns[i].addEventListener("click", ()=>{rollDice(btns[i].id)}) //using addEventListner
    
}

let btn_click = 0

function rollDice(btn_id) //this help me to understand which btn is pressed
{
    //console.log(btn_id);
    btn_click++

    if(btn_click == 5){
        winnerbtn.disabled = false
    }
    btns[btn_id].disabled = true
    let arr = ["1","2","3","4","5","6"]
    let randomIndex = Math.floor(Math.random()*arr.length)  //0-6 6 is not included
    //only integers
    let randomDice = arr[randomIndex];
    //console.log(randomDice)
    scores[btn_id].innerText = randomDice    //applying innerText method in span tag

}

winnerbtn.addEventListener("click", decideWinner)

function decideWinner(){
    //highest score

    let big = 0
    for(let t of scores){
        if(t.innerText > big){
            big = t.innerText
        }
    }

    //find all those who have highest score:
    let winnerList = []

    for(let i=0; i<=scores.length-1; i++){
        if(scores[i ].innerText == big){
            winnerList.push(i)
        }
    }

    let names = []
    for(let t of winnerList){
       names.push( playerName[t].value )
    }

    output.innerText = names + " " + "won the game"
}



