


function dependientes(entrada){
   

if (entrada === "happy") {
   return "Good job, you are doing great"
} 
else if (entrada ==="sad") {
    return "Every cold has a silver lining "

     
}
if (typeof entrada ==="number" ) {
    return "Beep beep boop "

     
}
else if(entrada !== "number","sad","happy" ) {
    return "I'm sorry, I'm still learning about feelings! "

     
}

}
console.log(dependientes(19));
