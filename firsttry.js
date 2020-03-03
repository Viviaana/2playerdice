const roll1 = document.getElementById("roll1");
const name1 = document.getElementById("name1");
const current1 = document.getElementById("current1");
const total1 = document.getElementById("total1");


const roll2 = document.getElementById("roll2");
const name2 = document.getElementById("name2");
const current2 = document.getElementById("current2");
const total2 = document.getElementById("total2");


const hold = document.getElementById("hold");
const newGame = document.getElementById("newGame");
const image = document.getElementById("diceImage");
const nextPlayer = document.getElementById("nextPlayer");


let p1Sum = 0;
let p2Sum = 0;
let p1Current = 0;
let p2Current = 0;

function swapReset() {
    if (roll1.style.display == "none") {
        roll1.style.display = "";
        roll2.style.display = "none"
    }
    else {
        roll2.style.display = "";
        roll1.style.display = "none"

    }
}

roll1.addEventListener("click", () =>{
    let ranNum = Math.floor(Math.random() *6) +1;
    p1Current += ranNum;
    if (ranNum == 1){
        infoHeader.innerText = "You rolled 1!";
        roll1.style.display = "none";
        hold.style.display = "none";
        nextPlayer.style.display = "";
    }
    else{
        current1.innerText = `${p1Current}`;
    }
});

roll2.addEventListener("click", () =>{
    let ranNum = Math.floor(Math.random() *6) +1;
    p2Current += ranNum;
    if (ranNum == 1){
        infoHeader.innerText = "You rolled 1!";
        roll2.style.display = "none";
        hold.style.display = "none";
        nextPlayer.style.display = "";
    }
    else{
        current2.innerText = `${p2Current}`;
    }
});

hold.addEventListener("click", () =>{
    p1Sum += p1Current;
    p2Sum += p2Current;
    p1Current = 0;
    p2Current = 0;
    p1total.innerText = `${p1Current}`;
    p2total.innerText = `${p2Current}`;
    swapReset();
})

nextPlayer.addEventListener("click", () =>{
    p1Sum += p1Current;
    p2Sum += p2Current;
    p1Current = 0;
    p2Current = 0;
    p1total.innerText = `${p1Current}`;
    p2total.innerText = `${p2Current}`;
    hold.style.display = "";
    nextPlayer.style.display="none";
    infoHeader.innerText = ""
    swapReset();
})

newGame.addEventListener("click", ()=>{
    playerTurn = 1;
    p1Sum = 0;
    p2Sum = 0;
    p1Current = 0;
    p2Current = 0;
    roll1.style.display = "";
    roll2.style.display = "none";
    hold.style.display = "";
    current1.innerText = `${p1Current}`;
    infoHeader.innerText = ""
})