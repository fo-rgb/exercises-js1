function Cumple(años){
    let someEdad= 2021 - años;
    return "Hola, tengo " + someEdad + " años";
}



let persone7 = [1964,2008,1999,2005,1978,1985,1919];

function permitir(año){
    const edad= 2021- año; 
    if (edad >= 17) {
        return "Usted tiene el permiso";
        
    }else
    return "Usted no tiene permiso de manejar un coche "+"te falta " + (17-edad)+"años";
}

console.log(permitir(2008));
let persone8=[];
for (let i = 0; i < persone7.length; i++) {
    let persones = permitir(persone7[i]);
    persone8.push(persones);
}
console.log(persone8)
