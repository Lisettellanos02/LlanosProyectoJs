//datos del cliente
let nombres = prompt ("ingrese su nombre");
let apellido = prompt ("ingrese su apellido");

 if (nombres != "" && apellido != ""){
    alert (`Bienvenido ${nombres} ${apellido}`);
 }else{
    alert("Nombres y Apellido son requeridos");
} 


//si quiere encargar pizza
let respuesta = prompt ("¿Quieres encargar una pizza?").toLowerCase();
if (respuesta === "si"){
alert ("Aqui encontraras las mejores pizzas a un precio increible");
}else{
    alert("te esperamos en otra ocasion");
}

const productos = [
    {id: 1, nombre: "muzzarella", precio: 1600},
    {id: 2, nombre: "napolitana", precio: 2000},
    {id: 3, nombre: "palmito", precio: 2300},
    {id: 4, nombre: "especial", precio: 2100},
    {id: 1, nombre: "rucula", precio: 2400},
    {id: 2, nombre: "peperoni", precio: 2000},
    {id: 3, nombre: "fugazzetta", precio: 2300},
];

let nombre = prompt ("ingrese el nombre del producto a buscar").toLowerCase();
const encontrado = productos.find(item => item.nombre === nombre);
if (encontrado){
let mensaje = `
Id: ${encontrado.id}
Nombre: ${encontrado.nombre}
Precio: $${encontrado.precio}
`;
alert(mensaje);
}else{
    alert ("Prdoducto no encontrado");
}

//lo minimo q quiero gastar
let precio = parseInt (prompt("Ingrese el precio minimo que quiere gastar"));

let encontrados = productos.filter(item => item.precio > precio);
encontrados.forEach((item) => {
    let mensaje = `
    Id: ${item.id}
    Nombre: ${item.nombre}
    Precio: $${item.precio}
    `;
    alert(mensaje);
});