const abracaArray = [
    "James",
    "Elamin",
    "Ismael",
    "Sanyia",
    "Chris",
    "Antigoni",
    ];

function abracaFunction(yourFunc) {
    console.log(
    "I am abracaFunction! Watch as I mutate an array of strings to your heart's content!");
   
    const abracaOutput = yourFunc(abracaArray);
    return abracaOutput;
}

//let glovo = abracaArray.map((name) => name.toUpperCase());
let globo = abracaArray.map(function(nombre){return nombre.toUpperCase()});

//console.log(glovo)
console.log(globo)
