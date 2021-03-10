const mentors= ["Daniel ","Irina ", "Godone" ,"Ashleite"];

function tidy(name){

    return name.trim().toLowerCase();
}

let tidy_mentors =[];
for(let i=0; i<mentors.length; i++){
    const tidy_mentor= tidy(mentors[i]);
    tidy_mentors.push(tidy_mentor);

}

console.log(tidy_mentors);
console.log(mentors.map(tidy));