/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code herevar
const names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];



function isLongName(name) {
  return name.length > 7;
}

var longName = names.find(isLongName);

console.log(longName);





function ThatStartsWithA(){
  

var longNameThatStartsWithB =names.find();
return longNameThatStartsWithB;
}

let glovo = names.find((nom) => nom );
  
    glovo=names[2] ;
    glovo1= names[2].length;

console.log(glovo,glovo1);



/* EXPECTED OUTPUT */
// "Alexandra"

