const numberOfStudents= 15;
const numberOfMentors= 8;
const numtotal= numberOfStudents + numberOfMentors;

console.log(numtotal);

const porcentage_Students= Math.round(numberOfStudents * 100 /numtotal);
const porcentage_Mentor= Math.round(numberOfMentors * 100 /numtotal);

console.log("porcentage Students " + numberOfStudents +  "%");
console.log("porcentage Mentors "  +  numberOfMentors + "%");
console.log("porcentage total " + numtotal + "%");