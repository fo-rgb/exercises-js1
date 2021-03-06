function secondMatchesAmy(array) {
  if ( array[1] === "Amy") {
    return "Second index matched!";
   } 
   
  return "Second index not matched";

}

let names = ["Alex", "Amara", "Carlos"];
let names2 = ["Ali", "Amy", "Naresh"];
const result = secondMatchesAmy(names2);
console.log(result)


//Ejemplo 2



let isHappy = 5; // The condition is met
if (isHappy > 4.9) {
    console.log("I am happy :)");
   
} 
else {
     // the condition is not met
     console.log("I am not happy :(");
    
}
console.log("End of script");