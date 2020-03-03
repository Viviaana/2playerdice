let activePlayer = 1;
let current1 = 0;
let current2 = 0;
let total1 = 0;
let total2 = 0;

const totalResult1 = document.getElementById("total1");
const totalResult2 = document.getElementById("total2");
const currentResult1 = document.getElementById("current1");
const currentResult2 = document.getElementById("current2");
const rollBtn = document.getElementById("roll");
const holdBtn = document.getElementById("hold");
const nextBtn = document.getElementById("nextPlayer");
const newgameBtn = document.getElementById("newGame")
const name1 = document.getElementById("name1");
const name2 = document.getElementById("name2");


const image = document.getElementById("image")


//WHEN THE ROLL BUTTON IS PRESSED, CHECK FOR 1 THEN RUN FUNCTION TO ADD RESULTS
rollBtn.addEventListener("click", () =>{
    let ranNum = Math.floor(Math.random() *6) +1;
    if (ranNum == 1){
        headerInfo.innerText = "You rolled 1!";
        roll.style.display = "none";
        hold.style.display = "none";
        nextPlayer.style.display = "";
        image.setAttribute('src',`./img/dice-${ranNum}.png`);
    }
    else {
        init(ranNum);
    }

});

const init = (ranNum) =>{
    if (activePlayer ==1){
        current1 += ranNum;
        currentResult1.innerText = current1
        image.setAttribute('src',`./img/dice-${ranNum}.png`);
    }
    else {
        current2 += ranNum;
        currentResult2.innerText = current2
        image.setAttribute('src',`./img/dice-${ranNum}.png`);
    }

};

//WHEN HOLD IS CLICKED ACTIVE PLAYER IS SWITCHED AND CURRENT IS ADDED TO TOTAL

holdBtn.addEventListener("click", () =>{
    roll.style.display = "none";
    hold.style.display = "none";
    nextPlayer.style.display = "";
    winning();
});

const addingTotal = () =>{
    if (activePlayer == 1){
        total1 += current1
        totalResult1.innerText = total1
    }
    else{
        total2 += current2
        totalResult2.innerText = total2
    }
}

const winning = () =>{
    addingTotal();
    if (total1 >20){
        roll.style.display = "none";
        hold.style.display = "none";
        nextPlayer.style.display = "none";
        headerInfo.innerText = "Player 1 wins!!!";
    }
    else if (total2 >20){
        roll.style.display = "none";
        hold.style.display = "none";
        nextPlayer.style.display = "none";
        headerInfo.innerText = "Player 2 wins!!";
 }
}

//NEXT PLAYER BUTTON

nextBtn.addEventListener("click", () => {
    roll.style.display = "";
    hold.style.display = "";
    nextPlayer.style.display = "none";
    current1 = 0;
    current2 = 0;
    currentResult1.innerText = current1;
    currentResult2.innerText = current2;
    headerInfo.innerText = " ";
    if (activePlayer == 1){
        activePlayer = 2
    }
    else{
        activePlayer = 1
    }
})

//NEW GAME BUTTON

newgameBtn.addEventListener("click", () =>{
    activePlayer = 1;
    current1 = 0;
    current2 = 0;
    total1 = 0;
    total2 = 0;
    headerInfo.innerText = " ";
    currentResult1.innerText = current1;
    currentResult2.innerText = current2;
    totalResult1.innerText = total1;
    totalResult2.innerText = total2;
    roll.style.display = "";
    hold.style.display = "";
    nextPlayer.style.display = "none";
    image.setAttribute('src',`./img/dice-1.png`);
})