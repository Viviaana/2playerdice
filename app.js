let activePlayer = 2;
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
const name1 = document.getElementById("name1");
const name2 = document.getElementById("name2");


const image = document.getElementById("image")


//WHEN THE ROLL BUTTON IS PRESSED, CHECK FOR 1 THEN RUN FUNCTION TO ADD RESULTS
rollBtn.addEventListener("click", () =>{
    let ranNum = Math.floor(Math.random() *6) +1;
    console.log(ranNum)
    if (ranNum == 1){
        name1.innerText = "You rolled 1!";
        roll.style.display = "none";
        hold.style.display = "none";
        nextPlayer.style.display = "";
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

// holdBtn.addEventListener("click", () =>{