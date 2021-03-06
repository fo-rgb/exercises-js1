/*
  You are given a program that logs pairings between mentors and students
  It fails because the array `pairsById` can contain different values that break the program
  It is decided that array items which are not pairs should be filtered out
  - Finish the statement on line 11 to produce an array with valid content
  - Do not edit any of the existing code
*/

var pairsByIndexRaw = [[0, 3], [1, 2], [2, 1], null, [1], false, "whoops"];

var pairsByIndex =[90, 50, 100, 66, 25, 80, 81];
function pairings(score) {
  return score > 80;
}
var highTestScores = pairsByIndex.filter(pairings);
console.log(highTestScores);

// Complete this statement

var students = ["Islam", "Lesley", "Harun", "Rukmini"];
var mentors = ["Daniel", "Irina", "Mozafar", "Luke"];

var pairs = pairsByIndexRaw.map(function() {
  var student =students [0].concat();
  var mentor =mentors[1].concat();
  return [student, mentor];
});

console.log(pairs);
