let player1= "paper";
let player2= "Scissor";
if (player1===player2){
console.log("its a tie")
}else if((player1==="Scissor" && player2=== "paper") || (player1==="Rock" && player2=== "scissor") || 
(player1==="paper" && player2==="Rock")){
    console.log("player 1 wins")
}else{
    console.log("player 2 wins")
}
