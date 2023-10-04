function get_player_selection(){
    human_choice = prompt("What is your move:") .toLowerCase()
        return human_choice;
}

function get_computer_choice(){
    let option = ["R","P","S"]
    let randomIndex = Math.floor(Math.random() * option.length);
    return option[randomIndex].toLowerCase();

}
k = get_computer_choice()
l = get_player_selection()

function play_game(){
    if ((l !== "r" && l !== "p" && l !=="s")){
        console.log("Invlid move by player")
    }
    else{
        console.log("The game begins:")
    if (k == l){
        console.log("The match is draw")
    }
    else if (k == "r" && l == "s"){
        console.log(`computer moved ${k} and won the game`)
        console.log(`You entered ${l}`)
        console.log("You lose!")
    }
    else if (k == "p" && l == "r"){
        console.log(`computer moved ${k} and won the game`)
        console.log(`You entered ${l}`)
        console.log("You lose!")
    }
    else if (k == "s" && l == "p"){
        console.log(`computer moved ${k} and won the game`)
        console.log(`You entered ${l}`)
        console.log("You lose!")
    }
    else{
        console.log(`player entered ${l} and won the game`)
        console.log(`Computer entered ${k}`)
        console.log("Congrulation you won the game")
    }
    }
    
}
play_game() // calling the function in order to run the game 


