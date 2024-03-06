// Purpose: This file contains the logic for the game Yahtzee.
let Dobbelsteen = [];
let lockedDie = [];
let points = [];

let tkind = false;
let fkind = false;

//starts the game
function rollDice() {
    Dobbelsteen = [];
    for (let i = 0; i < 5; i++) {
        let dice = document.getElementById('die' + (i + 1));
        if (lockedDie.includes(i + 1)) {
            Dobbelsteen.push(parseInt(dice.name));
            continue;
        }
        let number = RandomDice();
        Dobbelsteen.push(number);
        dice.name = number;
        dice.src = "images/dice" + number + ".png";
    }
    console.log(Dobbelsteen);
    console.log(lockedDie);
    fillText();
}


//rolls the dice
function RandomDice() {
    let RandomDice = Math.floor(Math.random() * 6) + 1;
    return RandomDice;
}

//locks the dice
function holdDice(die) {
    let dice = document.getElementById('die' + die);
    if (lockedDie.includes(die)) {
        lockedDie.splice(lockedDie.indexOf(die), 1);
        dice.style.border = "none";
    } else {
        lockedDie.push(die);
        dice.style.border = "5px solid red";
    }
    console.log(lockedDie);
}

//fills the table with values
function checkDice(number) {
    let count = 0;
    for (let i = 0; i < 6; i++) {
        if (Dobbelsteen[i] === number) {
            count++;
        }
    }
    if (count >= 3) {
        tkind = true;
    }
    if (count >= 4) {
        fkind = true;
    }
    return count;
}

//fills the text with the values
function fillText() {
    tkind = false;
    fkind = false;
    for (let i = 0; i < 6; i++) {
        let iets = document.getElementById((i + 1) + "p1");
        let count = checkDice(i + 1);
        iets.textContent = count * (i + 1);
    }
    //fill the text with the values
    let yahtzeeText = document.getElementById("yahtzeep1");
    let tkindText = document.getElementById("tkindp1");
    let fkindText = document.getElementById("fkindp1");
    let smallStraightText = document.getElementById("sstraightp1");
    let largeStraightText = document.getElementById("lstraightp1");
    let chanceText = document.getElementById("chancep1");
    let fullHouseText = document.getElementById("fullHousep1");
    let totalScoreText = document.getElementById("total1");
    let rollsLeftText = document.getElementById("rollsLeft");
    yahtzeeText.textContent = yahtzee();
    tkindText.textContent = threeOfAKind();
    fkindText.textContent = fourOfAKind();
    chanceText.textContent = chance();
    smallStraightText.textContent = smallStraight();
    largeStraightText.textContent = largeStraight();
    fullHouseText.textContent = fullHouse();
    totalScoreText.textContent = totalScores();
    rollsLeftText.textContent = Throwsleft();
}

//checks if the dice are a three of a kind
function threeOfAKind() {
    if (tkind === true) {
        return true;
    } else {
        return false;
    }
}

//checks if the dice are a four of a kind
function fourOfAKind() {
    if (fkind) {
        return true;
    } else {
        return false;
    }
}

//checks if the dice are a yahtzee with a set
function yahtzee() {
    let uniqueValues = new Set(Dobbelsteen);
    if (uniqueValues.size === 1) {
        return true;
    } else {
        return false;
    }
}

//checks if the dice are a full house using a set
function fullHouse() {
    let uniqueValues = new Set(Dobbelsteen);
    if (uniqueValues.size === 2 && (Dobbelsteen[0] === Dobbelsteen[1] && Dobbelsteen[3] === Dobbelsteen[4]) 
    || (Dobbelsteen[0] === Dobbelsteen[2] && Dobbelsteen[3] === Dobbelsteen[4])) {
        return true;
    } else {
        return false;
    }
}

//checks if the dice are a small straight
function ThreeOfAKind() {
    let uniqueValues = new Set(Dobbelsteen);
    if (uniqueValues.size === 3) {
        return true;
    } else {
        return false;
    }
}

//checks if the dice are a large straight
function smallStraight() {
    Dobbelsteen.sort();
    if (/1234|2345|3456/.test(Dobbelsteen.join('').replace(/(.)\1+/g, '$1'))) {
        return true;
    } else {
        return false;
    }
}

//checks if the dice are a large straight
function largeStraight() {
    let uniqueValues = new Set(Dobbelsteen);
    if (uniqueValues.size === 5 && !(Dobbelsteen.includes(1) && Dobbelsteen.includes(6))) {
        return true;
    } else {
        return false;
    }
}

//checks the chance
function chance() {
    let total = Dobbelsteen.reduce((a, b) => a + b, 0);
    return total;
}

//checks the total score using the points array
function totalScores() {
    let totalScore = 0;
    points.forEach(point => {
        totalScore += point;
    });
    return totalScore;
}

function rollsLeft() {
    let rolls = 3 - lockedDie.length;
    return rolls;
}

