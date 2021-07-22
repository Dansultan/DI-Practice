//exercice1 

let question = prompt('Which language do you speak ?');

let language = question.toLowerCase();

if (language === 'french'){
  console.log("Bonjour")
}
else if (language === 'english'){
 console.log("Hello")
}
else if (language === 'spanish'){
  console.log("Buenos Dias")
}
else {
  console.log('01110011 01101111 01110010 01110010 01111001')
}

//exercice 2

let user = prompt('Please write your grade:');
let grade = parseInt(user);
if (grade>90) {
    console.log("A")
}
else if (grade>80 && grade<=90) {
    console.log("B")
}
else if (grade>=70 && grade<=80) {
    console.log('C')
}
else{
    console.log('D')
}

//exercice 3

let verb = prompt('Please write a verb :');
if (verb.length>=3 && verb.search('ing')==-1) {
    console.log(verb+'ing')
}
else if (verb.length>=3 && verb.search('ing')!=-1) {
    console.log(verb+'ly')
}
else if(verb.length<3) {
    console.log(verb)
}