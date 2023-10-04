document.addEventListener('DOMContentLoaded',()=>{
    
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
    document.querySelector('h2').innerHTML =`Computer Score: ${k}`;
    
})
paper = document.getElementById('paper');
paper.addEventListener('click',()=>{
    user_choice = ("P").toLowerCase()
    // document.querySelector('h1').innerHTML = user_choice;
    play_game()
    document.querySelector('h2').innerHTML = `Computer Score: ${k}`;
})
scissor = document.getElementById('scissor');
scissor.addEventListener('click',()=>{
    user_choice = ("S").toLowerCase()
    // document.querySelector('h1').innerHTML = user_choice;
    play_game()
    document.querySelector('h2').innerHTML = `Computer Score: ${k}`;
})
function end_score(){
if(computer_score ==5 || player_score == 5){
    if (computer_score===5){
        document.body.innerHTML = `Computer won the game with the score of ${computer_score}`
    }
    else{
        document.body.innerHTML = `Congrulation you won the game with the score of ${player_score}`;
    }
}
}


})