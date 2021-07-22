// Exercice 1

let x = 4
let y = 6

if (x>y) {
  console.log("x is bigger than y")
}
else {
  console.log("y is bigger than x")
}

// Exercice 2

let newDog = "Chihuahua"

console.log(newDog.length)
console.log(newDog.toUpperCase())
console.log(newDog.toLowerCase())

if (newDog = "Chihuahua"){
console.log("I love Chihuahuas, it’s my favorite dog breed")
 }
else{
  console.log("I don't care, I prefer cats")
}

// Exercice 3 

let x = prompt('Please enter a number :')
let y = parseInt(x)

if (y%2==0){
  console.log(y+" is an even number")
}
else {
  console.log(y+" is an odd number")
}

// Exercice 4

let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

if (users.length==0) {
  console.log('There is no users.')
}

else if (users.length==1) {
  console.log(users[0]+" is online")
}
else if (users.length==2){
  console.log(users[0]+' and '+users[1]+' are online ')
}
else {
  console.log(users[0]+','+users[1]+' and '+users.length+' are online ')