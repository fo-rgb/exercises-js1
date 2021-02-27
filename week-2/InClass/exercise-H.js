function exponential(number) {
  return number * number;
}

function isEven(number) {
  return number % 2 === 0;
}

console.log(exponential(2));


for(var finalhoy= 2; finalhoy < 10 ; finalhoy +=5){
   var exponen= exponential(finalhoy);
  console.log(finalhoy);
  
}


for(var finalhoy = 5 ; finalhoy < 20 ; finalhoy  +=2){
 var isven= isEven(finalhoy);
console.log("all for event",finalhoy);

}

