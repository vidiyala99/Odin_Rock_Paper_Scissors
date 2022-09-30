function GetComputerChoice(){
    console.log("Computer is choosing");
    let x=["Rock","Paper","Scissor"];
    let rand=x[Math.floor(Math.random() * x.length)];
    rand=rand.toLowerCase();
    return rand
}

 function getPlayerChoice()
 {  console.log("Enter your choice");
    let x=prompt("Enter your choice");
    x=x.toLowerCase();
    return x;
 }
 function playRound(playerSelection, computerSelection) {
    
    if(playerSelection==="rock" && computerSelection==="scissor"){
        
        return("You win, rock breaks scissor");
        
    }
    if(playerSelection==="rock" && computerSelection==="paper")
    {
        
        return("Computer wins, paper wraps rock");
       
    }
    if(playerSelection==="rock" && computerSelection==="rock")
    {
        
        return("It's a tie!");
    }
    if(playerSelection==="paper" && computerSelection==="rock")
    {
        
        return("You win,paper wraps rock");
       
    }
    if(playerSelection==="paper" && computerSelection ==="scissor")
    {
        
        return("Computer wins, scissor cuts paper");
        
    }
    if(playerSelection==="paper" && computerSelection==="paper")
    {
        
        return("It's a tie!");
    }
    if(playerSelection==="scissor" && computerSelection==="paper")
    {
        
        return("You win,scissor cuts paper ");
        
    }
    if(playerSelection==="scissor" && computerSelection==="rock")
    {
        
        return("Computer wins, rock beats scissor");
    }
    if(playerSelection==="scissor" && computerSelection==="scissor")
    {
        
        return("It's a tie");
    }
    
  }
 

 
 function game()
 {
    let playerScore=0;
    let ComputerScore=0;
    for(let i=0;i<5;i++)
    {   if(i<4)
        {
            console.log(`Round ${i+1} begins`);
        }
        else{
            console.log("Last Round");
        }

        playerSelection=getPlayerChoice();
        computerSelection=GetComputerChoice();
        console.log(`Player selects ${playerSelection}`);
        console.log(`Computer selects ${computerSelection}`);
        res=playRound(playerSelection,computerSelection);
        console.log(res);
        if(res.includes("You"))
        {
            console.log(`You win round ${i+1}`);
            playerScore++;
        }
        else if(res.includes("Computer"))
        {
            console.log(`Computer wins round ${i+1}`);
            ComputerScore++;
        }
        else{
            console.log(`Round ${i+1} is tied`);
        }
        console.log("Scoreboard");
        console.log(`Your score : ${playerScore}`);
        console.log(`Computer's score ${ComputerScore}`);
        
    }
    if(playerScore>ComputerScore)
    {
        return("You win the game!!");
    }
    else if(playerScore<ComputerScore)
    {
        return("GAME OVER!! Computer wins");
    }
    else{
        return("It's a tie");
    }
 }
 
console.log(game());