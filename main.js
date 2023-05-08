let nombre = prompt ("ingrese su nombre");
let apellido = prompt ("ingrese su apellido");

 if (nombre != "" && apellido != ""){
    alert (`Bienvenido ${nombre} ${apellido}`);
 }else{
    alert("Nombre y Apellido son requeridos");
} 

let respuesta = prompt ("¿Tenes pensado aprender otro idioma?").toLowerCase();
if (respuesta === "si"){
alert ("Podes incribirte ya mismo a nuestra Institucion de Lenguas");
}else{
    alert("Lo esperamos cuando quiera comenzar con este curso");
}

let usuario = prompt("Ingrese el usuario");
while(usuario != "idiomas"){
    alert("Usuario incorrecto");
    usuario = prompt("Ingrese el usuario");
}
alert("Inscripciones abiertas");


let lengua = prompt ("¿Que idioma quisieras aprender?");
let modalidad = prompt ("Modalidad del cursado ¿virtual o presencial?");

 if (lengua != "" && modalidad != ""){
    alert (`Cupos disponibles de inscripcion`);
 }else{
    alert(`"Lengua y Modalidad son requeridos"`);
} 


for(let comision =1; comision <= 7; comision++){
    let DNI = prompt ("Inscribite escribiendo tu DNI");
    alert (`Comision #${comision} DNI: ${DNI}`);
}

function sumar(ingles, italiano, frances){
    console.log(ingles + italiano + frances);

}
let resultado = sumar(35, 17, 15);
console.log("Total de alumnos incriptos ",resultado);


let idioma = "es";
switch(idioma){
    case"es":
        console.log("idioma español");
        break;

    case "en":
        console.log("idioma ingles");
        break;

    case "it":
        console.log("idioma italiano");
        break;      

    default:
        case "fr":
            console.log("idioma frances");
            break;
}

