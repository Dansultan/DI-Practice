let colors = ['Blue','Purple','Skyblue','Grey','Black'];

for (i=0;i<colors.length; i++) {
  console.log ('My #'+(i+1)+' choice is '+colors[i])
}


//Exercice 2

let people = ["Greg", "Mary", "Devon", "James"]

people.shift();

let index = people.indexOf("James");
if (~index) {
  people[index] = 'Jason'
}

for (let i=0;i<=index;i++) {
  if(i>index){
    break
  }
  console.log(people[i])
}

console.log(people.slice(1))

console.log(people.indexOf('Mary'));
console.log(people.indexOf('Foo'));
// return-1 because there's no Foo in the array.

let last = people[people.length-1]
console.log(last)


//Exercice 3
let str = '';

do {
  str =prompt("Write your number here:");
  var number = parseInt(number);
  if (number>10) {
    break;
  }}
while (number<10);

//Exercice 4
let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
  }
  
  let user = prompt('Enter your name:');
  
  if (user in guestList) {
    console.log("Hi! I'm "+user+", and I'm from "+ guestList[user])
  } 
  else {
    console.log("Hi! I'm a guest")
  }

  //Exercice 5
  let family = {
    father: "Michel",
    mother: "Marie",
    brother: "Allan",
    sister: "Kelly",
  }
  
  for (let property in family) {
    console.log(`${property}: ${family[property]}`);
  }
  
  //Exercice 6 
  let details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }
  
  let str = " ";
  
  for (let property in details) {
    let all = (`${property} ${details[property]}`);
    str += all +' '
  }
   console.log(str) // this one was tough

   //Exercice 7
   let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]

let new_names = names.sort()
let society = ""

for (i in new_names){
  if (i<1){;
  let first_letter = new_names.map(x=>x[0]);
  society += first_letter +' '}
 
}
console.log("The name of their society would be "+ society)
