
var libButton = document.getElementById('lib-button');
var result =document.getElementById('story');
var noun = document.getElementById('noun');
var adjective = document.getElementById("adjective");
var verb = document.getElementById('verb');
var person =document.getElementById('person');
var place = document.getElementById('place');
var input = document.getElementsByTagName('input');


var story = function(){
    
  result.innerHTML = `'I was wakling when I found a ${noun.value}, it was ${adjective.value}. I tried to found who was the owner and ${verb.value}.I saw the name ${person.value} was wrotten at ${place.value}.`;
}

libButton.addEventListener('click',story); 
 


