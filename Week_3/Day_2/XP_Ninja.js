// exercice 1

let nemo = prompt("Please enter a sentence with the word 'nemo':")

if (nemo.includes('nemo')){

  console.log('I found nemo')}
else { 
  
console.log("Sorry, couldn't find nemo")}

// exercice 2

5 >= 1 // True
0 === 1 // false
4 <= 1 // false
1 != 1 // false
"A" > "B" // false
"B" < "C"//true
"a" > "A"//false
"b" < "A"//false
true === false//false
true != true//false

let c;
let a = 34;
let b = 21;
a = 2;
a+b // 23
c// undefined
console.log(3 + 4 + '5');//"75"

// Exercice 3

let str = prompt("Enter 2 numbers with a , between)")

let str1 = str.split(",")


let x = parseInt(str1[0])

let y = parseInt(str1[1])

console.log(x+y)

//Exercice 4s

let x = prompt("Please enter a number:");
let number = parseInt(x)

if (number<2){
console.log("Boom")}
else {
  console.log("B"+'o'.repeat(number)+"s")
}




