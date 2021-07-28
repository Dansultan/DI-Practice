let userNumber;
let computerNumber = Math.floor(Math.random()*11);

function playTheGame(){
 let play = confirm ('Would you like to play the game ?')
 if (play===false) {
   alert('No problem, Goodbye !')
 }
 else {
   let userNumber = parseInt((prompt('Please choose a number between 0 and 10:')));
   let verify=(typeof userNumber === 'number' ); 
   if (verify === false){
     alert ('Not a number, goodbye !')
   }  
   else if (userNumber>10){
     alert ('Sorry its not a good number, goodbye')
   }
   else {
     computerNumber = Math.floor(Math.random()*11)
     test(userNumber,computerNumber)
   }
 }
 }

console.log(computerNumber)

function test(userNumber,computerNumber){
 for (let i=0; i<4; i++){
 if (userNumber===computerNumber){
   alert("WINNERRRR");
   continue
 }
 else if(userNumber<computerNumber){
   alert ('Your number is bigger then the computer’s, guess again');
   userNumber = parseInt((prompt('Please choose a new number between 0 and 10:')));
   if (userNumber===computerNumber){
   alert("WINNERRRR");
   continue;}
   else{
     alert('Sorry you lost')
     return
   }
   
   
   
 }
 else if(userNumber>computerNumber){
   alert("Your number is smaller than the computer', guess again");
   userNumber = parseInt((prompt('Please choose a new number between 0 and 10:')));
   if (userNumber===computerNumber){
   alert("WINNERRRR");
   continue;}
   else{
     alert('Sorry you lost')
     return
   }
     
 }
}
}  