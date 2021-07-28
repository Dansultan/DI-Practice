//Exercice 1

function infoAboutMe(){
    console.log("My name is Dan, I'm almost 30 years old")
  }
  
  infoAboutMe()
  
  function infoAboutPerson(personName, personAge, personFavoriteColor) {
    console.log("This is "+personName+" he is "+personAge+" years old, and his favorite color is "+personFavoriteColor)
  }
  
  infoAboutPerson("Dan",30,"blue");
  
  function infoAboutPerson(personName, personAge, personFavoriteColor, personHobbies){
    console.log("This is "+personName+", he is "+personAge+",his favorite color is "+personFavoriteColor)
    console.log("His hobbies are :")
    for (i in personHobbies) {
      console.log(personHobbies[i])
    }
   
   }
  
  infoAboutPerson("David", 45, "blue", ["tennis", "painting"])
  infoAboutPerson("Josh", 12, "yellow", ["videoGame", "hanging out with friends", "playing cards"])

  //Exercice 2

  let userAge = parseInt(prompt('Please write your age :'));

function checkDriverAge(userAge){
  if (userAge<18){
    console.log("Sorry, too young !")
  }
  else if (userAge>18){
    console.log("Your are old enough")
  }
  else if(userAge==18){
    console.log("Congrat for your first Driving !")
  }
}

checkDriverAge(userAge)

function checkDriverAge(age){
  if (age<18){
    console.log("Sorry, too young !")
  }
  else if (age>18){
    console.log("Your are old enough")
  }
  else if(age==18){
    console.log("Congrat for your first Driving !")
  }
}

checkDriverAge(12)

// Exercice 3

function checkNumber() {
  for (let i=0; i<100; i++){
    if (i%2==0){
      console.log("the number "+i+" is even");
    }
    else {
      console.log("the number "+i+" is odd");
    }
  }
}
    
console.log(checkNumber())

// Exercice 4

let sum = 0;
let array = [];

function isDivisible(){
  for (let i=0; i<500; i++){
    if (i%23 == 0){
      console.log(i);
      array.push(i);
      sum += i
    }
    
  }
}

console.log(isDivisible())
console.log('The sum is :'+ sum )

// Exercice 5

let amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

function checkBasket() {
let user = prompt('Please let us know what you want to buy :');
if (user in amazonBasket) {
  console.log("We have your product !")
}
else {
  console.log("Sorry, this product is not available")
}

}

console.log(checkBasket())

// Exercice 6

let array = [];
let price ;
let sum;

function changeEnough(array,price) {
  for (i in array){
  sum = (array[0]*0.25)+(array[1]*0.10)+(array[2]*0.05)+(array[3]*0.01);
  }
  if (sum>=price){
    console.log('Yes, you can afford it')
  }
  else {
    console.log('Sorry, you dont have enough money')
 
  }
  
}

console.log(changeEnough([25,20,5,0], 8.55));

console.log(sum)

// Exercice 7

let stock = { 
  "banana": 6, 
  "apple": 0,
  "pear": 12,
  "orange": 32,
  "blueberry":1
}; 

let prices = {    
  "banana": 4, 
  "apple": 2, 
  "pear": 1,
  "orange": 1.5,
  "blueberry":10
};

let shoppingList = ['banana','orange','apple'];
let toPay;

function myBill(){
for (i in shoppingList){
  if ( i in stock){
    toPay += this.prices;
    console.log('You have to pay :'+toPay)
  }
}
}

console.log(myBill(shoppingList));

// Exercice 8

let amount = parseInt(prompt('John, please write the amount of the bill :'));
let tip;
let finalAmount;

function tipCalculator(amount){
  if (amount<=50){
    finalAmount = (1.2*amount)
  }
  else if (amount>50 || amount>=200){
    finalAmount = (1.15*amount)
  }
  else if (amount>200){
    finalAmount = (1.1*amount)
  }
  console.log('The final amount is : '+finalAmount)
}

console.log(tipCalculator(amount))

// Exercice 9 

function hotelCost(){
  let night= parseInt(prompt('How many night do you stay ?'))
  if (night%1 != 0){
  hotelCost();   
  }
  else {
    let price = night*140
    return price
  }
}

console.log(hotelCost());


function planeRideCost() {
  let destination = prompt('Where do you want to travel ?').toLowerCase()
  if (destination == 'london'){
    return "The price will be 183$"
  }
  else if (destination == 'paris'){
    return "The price will be 220$"
  }
  else if (typeof destination != 'string'){
    planeRideCost();
  }
  else {
    return "The price will be 300$"
  }
}

console.log(planeRideCost())

function rentalCarCost() {
  let days = prompt('How many days would you want the car ?')
  let sum = days*40
  if (days<10){
    return "You'll have to pay "+sum+" €"; 
  }
  else{
    let newSum = sum*0.9
    return "You'll have to pay "+newSum+" €";
  }
   
}

console.log(rentalCarCost())



