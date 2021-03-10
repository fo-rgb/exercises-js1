function Cumple(años){
    let someEdad= 2021 - años;
    return "Hola, tengo " + someEdad + " años";
}



const persone7 = [1964,2008,1999,2005,1978,1985,1919];

function permitir(año){
    const edad= 2021- año; 
    if (edad >= 17) {
        return "Usted tiene el permiso";
        
    }else
    return "Usted no tiene permiso de manejar un coche "+"te falta " + (17-edad)+"años";
}

console.log(permitir(2008));

console.log(persone7.map(permitir));

//es igual: const statusdepermiso = persone7.map(permitir);