function Cumple(años){
    let someEdad= 2021 - años;
    return "Hola, tengo " + someEdad + " años";
}

const persone7 = [1964,2008,1999,2005,1978,1985,1919];

console.log(Cumple(2000));

for (let i = 0; i < persone7.length; i++) {
    const element = persone7[i];
    console.log(Cumple(element));
    
}