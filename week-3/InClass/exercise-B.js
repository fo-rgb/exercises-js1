let clase2_es=["Emilio","Moussa","Ronar","Jaime","Leon"];
let clase1_es=["Giomar","Diego","lino","Adrian","Diana"];


let clase1_2_es= clase2_es.concat(clase1_es);




let global=clase1_2_es.sort();

console.log(global);


function reciba_name(nombre){
    if(clase1_2_es.includes(nombre)){
        return nombre,"esta en la clase de migracode ";

    }else{
        return nombre,"no esta en la clase"
    }
    
}

console.log(reciba_name("sparta",clase1_2_es));
