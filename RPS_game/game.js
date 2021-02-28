let button_figure = document.querySelectorAll('.select');
let countUser = document.getElementById('count');
let battle = document.getElementById('battle');
let middle = document.getElementById('middle');
const playAgain = document.getElementById('replay');
const user_select = document.getElementById('user_select');
const comp_select = document.getElementById('comp_select');
const winner = document.getElementById('win');

//buttons for rules
const openBtt = document.getElementById('open');
const closeBtt = document.getElementById('close');
const modal = document.getElementById('modal');


let countNumb = 0;
let option = ['paper', 'rock', 'scissors'];
let choiceUser = undefined;


button_figure.forEach((butt) => {
    butt.addEventListener('click', ()=>{
        choiceUser = butt.getAttribute('data-choice');

        checkWinner();
    });
});

playAgain.addEventListener('click', ()=>{
        middle.style.display = 'flex';
        battle.style.display = 'none';
});

openBtt.addEventListener('click', ()=>{
    modal.style.display = 'flex';
});
closeBtt.addEventListener('click', ()=>{
    modal.style.display = 'none';
});

function checkWinner(){
    let choiceComp = randomChoice();

    updateChoice(user_select, choiceUser);
    updateChoice(comp_select, choiceComp); 


    if(choiceUser == choiceComp){
        winner.innerText = 'draw';
    } else if(
        (choiceUser == 'paper' && choiceComp == 'rock') ||
        (choiceUser == 'rock' && choiceComp == 'scissors') ||
        (choiceUser == 'scissors' && choiceComp == 'paper')
    ){
        score();
        winner.innerText = 'win'
    } else{
        score();
        winner.innerText = 'lost'
    }
    middle.style.display = 'none';
    battle.style.display = 'flex';
}

function randomChoice(){
    return option[Math.floor(Math.random()* option.length)];
}


function score(){
    countNumb += 1;
    countUser.innerText = countNumb;

}

function updateChoice(selectEl, choiceEl){
    //class reset
    selectEl.classList.remove('field-paper');
    selectEl.classList.remove('field-scissors');
    selectEl.classList.remove('field-rock');

    //update img
    let img = selectEl.querySelector('img')
    selectEl.classList.add(`field-${choiceEl}`)
    img.src = `./images/icon-${choiceEl}.svg`;
    img.alt = choiceEl;
}