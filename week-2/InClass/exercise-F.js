let count = 1;

while(count <= 10){
    console.log("the acount is :" + count )
count += 1;
}
console.log(count);





// Execicio Usuario

const listausuario = ["Moussa ", "Antonio ","Emilio "];
const tipo = ["Admin ", "Usuario "];
let vocal= listausuario[0] + tipo[1];


function Usuario(user){
    if( user[2] == "Moussa"){
        return "invalid"
        

    } else{
        return "valid", listausuario,tipo;
    }
   


}
console.log( Usuario(""));
console.log(vocal)