let sentence = 'This meal is not that bad';
let wordNot = sentence.search('not');
let wordBad = sentence.search('bad')+3;


if (wordNot<wordBad)
  {console.log(sentence.replace(sentence.substring(wordNot,wordBad),"good"))}
else{
  console.log(sentence)
}
