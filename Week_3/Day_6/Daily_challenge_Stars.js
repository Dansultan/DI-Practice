let x = '*'
for (i=0; i<6 ;i++) {
  console.log(x.repeat(i));
}

while (i<=5) {
    print()
}

let stars = (rows) => {
   
  for(let i = 1; i <= rows; i++){
    
    let str = '';
    
    for(let j = 1; j <= i; j++){
      str += '*';
    }
    console.log(str);
  }
};

console.log(stars(5)) //didn't know how to do without a function


