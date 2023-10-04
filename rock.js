document.addEventListener('DOMContentLoaded',()=>{
    
        let game = document.getElementById('start')
        let change = document.querySelector('body') // Targetting the body so then when button is clicked then everything that exist gets removed and Rock Paper Scissor game get's displayed

        let play = document.getElementById('playground')

        game.addEventListener('click',() =>{
            change.innerHTML='';
            change.style.backgroundImage='none';
            // change.style.backgroundColor='red';

            let first = document.createElement('div')
            first.classList='one';
            first.style.border='3 px solid green';
            first.style.backgroundColor='pink';
            first.style.textAlign = 'center';
            change.append(first)
            let second = document.createElement('h1')
            second.innerHTML='Welcome to our Rock Paper Scissor Game';
            second.style.color = 'green';
            second.style.fontStyle='italic';
            second.style.fontWeight='bolder';
            second.style.textAlign='center';
            first.append(second);
            /* the future content goes here */
            document.body.append(play);   // Since everything has vanished after clicking the button this will make the playing area to appear
            if(play.style.display==='none'|| play.style.display===''){
                play.style.display = 'flex';        

            }
            else{
                play.style.display='none';
            }       
        })     
let computer_score = 0;
let player_score = 0;
let user_choice = "";
var k = "";
function get_computer_choice(){
        let option = ["R","P","S"]
        let randomIndex = Math.floor(Math.random() * option.length);
        return option[randomIndex].toLowerCase();
    
    }

function play_game(){
    end_score()
    k = get_computer_choice()
    l = user_choice
    if (k == l){
        document.querySelector('h1').innerHTML="The match is draw";
}
else if (k == "r" && l == "s"){
computer_score += 1;
document.querySelector('h1').innerHTML = `Computer_Score: ${computer_score}`
}
else if (k == "p" && l == "r"){
computer_score += 1;
document.querySelector('h1').innerHTML = `Computer_Score: ${computer_score}`
}
else if (k == "s" && l == "p"){
computer_score += 1;
document.querySelector('h1').innerHTML = `Computer_Score: ${computer_score}`
}
else{
player_score += 1;
document.querySelector('h1').innerHTML = `Player_Score: ${player_score}`
}
}

rock = document.getElementById('rock');
rock.addEventListener('click',()=>{
    user_choice = ("R").toLowerCase()
    // document.querySelector('h1').innerHTML = user_choice;
    play_game()
    document.querySelector('h2').innerHTML =`Computer Choice: ${k}`;
    
})
paper = document.getElementById('paper');
paper.addEventListener('click',()=>{
    user_choice = ("P").toLowerCase()
    // document.querySelector('h1').innerHTML = user_choice;
    play_game()
    document.querySelector('h2').innerHTML = `Computer Choice: ${k}`;
})
scissor = document.getElementById('scissor');
scissor.addEventListener('click',()=>{
    user_choice = ("S").toLowerCase()
    // document.querySelector('h1').innerHTML = user_choice;
    play_game()
    document.querySelector('h2').innerHTML = `Computer Choice: ${k}`;
})
function end_score(){
if(computer_score ==5 || player_score == 5){
    if (computer_score==5){
        second.innerHTML = `Computer won the game with the score of ${computer_score}`
    }
    else{
        second.innerHTML = `Congrulation you won the game with the score of ${player_score}`;
    }
}
}

})