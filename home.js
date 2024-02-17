let player1score=[];
let player2score=[];
let player1dice=[];
let player2dice=[];
let rollcount=0;
let roundcount=0;
let isPlayerOneTurn=true;
let transformValues=[
[0,30], [-5,40], [0,35],[5,40],[0,30]
];

const player1Container=document.getElementById("player1Container")
const player2Container=document.getElementById("player2Container")
const diceElements=document.querySelectorAll(".dice");
const rollButton=document.getElementById("roll");
rollButton.addEventListener("click",rollDice);
let rollSound=new Audio("sounds/dice-roll.mp3");
function rollDice(){
    rollCount++;
    let diceArr=[1,2,3,4,5];
    let randomDice=[];
    for (let i=0; i<diceArr.length;i++){
        randomDice.push(Math.floor(Math.random()*6)+1);
    }
let playArea=document.getElementById("playArea"); 
let dicecontainer=document.getElementById("player1Container");
let numDice=dicecontainer.children.length;
let playAreaWidth=playArea.offsetWidth-numDice*50;
let playAreaLength=playArea.offsetHeight-50;

diceElements.forEach(function(diceElements,index){
    if(diceElement.classlist.contains("active")|| rollCount==1){
        resetDicePositions();
        const x = transformValues[index][0];
        const y = transformValues[index][1];

        setTimeout(function(){
            changeDiePosition(diceElement,x,y);
        })
    }
}
}