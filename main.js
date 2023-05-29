//colocar datos del cliente
let nombres = prompt ("ingrese su nombre");
let apellido = prompt ("ingrese su apellido");

 if (nombres != "" && apellido != ""){
    alert (`Bienvenido ${nombres} ${apellido}`);
 }else{
    alert("Nombres y Apellido son requeridos");
} 

//si quiero o no comprar una pizza
let respuesta = prompt ("¿Quieres encargar una pizza?").toLowerCase();
if (respuesta === "si"){
alert ("Aqui encontraras las mejores pizzas a un precio increible");
}else{
    alert("te esperamos en otra ocasion");
}

//find
const variedades = [
    {id: 1, nombre: "Muzzarella", precio: 1600},
    {id: 2, nombre: "Napolitana", precio: 2000},
    {id: 3, nombre: "Palmito", precio: 2300},
    {id: 4, nombre: "Especial", precio: 2100},
    {id: 5, nombre: "Rucula", precio: 2400},
    {id: 6, nombre: "Peperoni", precio: 2200},
    {id: 7, nombre: "Fugazzetta", precio: 2300},
];

let nombre = prompt ("ingrese el nombre de la pizza que quiera encargar");
const encontro = variedades.find(item => item.nombre === nombre);
if (encontrado){ 
let mensaje = `
Id: ${encontrado.id}
Nombre: ${encontro.nombre}
Precio: $${encontro.precio}
`;
alert(mensaje);
}else{
    alert ("Producto no encontrado");
}


//producto disponible o no disponible
const dispositivos = ["muzzarella", "napolitana", "palmito", "especial", "rucula", "peperoni", "fugazzetta"];
let marca = prompt ("ingrese el nombre del producto a buscar");
let encontrado = productos.includes(marca);
if(encontrado){
    alert("Producto disponinble");
}else{
    alert("Producto no disponible");
}


//precio y variedad de pizzas
class Producto{
    constructor(nombre, precio, imagen){
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.vendido = false;
    }
    vender(){
        this.vendido = true;
    }
}
class Producto{
    constructor(id, pizza, precio){
        this.id = id;
        this.pizza = pizza;
        this.precio = precio;
    }
}
const pizzas =[];
const producto1 = new Producto(1, "Muzzarella", 1600);
const producto2 = new Producto(2, "Napolitana", 2000);
const producto3 = new Producto(3, "Palmito", 2300);
const producto4 = new Producto(4, "Especial", 2100);
const producto5 = new Producto(5, "Rucula", 2400);
const producto6 = new Producto(6, "Peperoni", 2200);
const producto7 = new Producto(7, "Fugazzetta", 2300);
pizzas.push(producto1);
pizzas.push(producto2);
pizzas.push(producto3);
pizzas.push(producto4);
pizzas.push(producto5);
pizzas.push(producto6);
console.log(pizzas);

//pesonas que encargaron pizza
function Persona(info){
    this.nombre = info.nombre;
    this.direccion = info.direccion;
    this.encargo = info.encargo;
    this.total = info.total;
}
const persona1 = new Persona({
nombre: "Ana Paula Rossales",
direccion: "Cordoba 498",
encargo: "una Muzzarella",
total: 1600,
});
const persona2 = new Persona({
nombre: "Luis Cabrera",
direccion: "Av. Juan.B Justo 334",
encargo: "una Muzzarella y media Especial",
total: 2650,
});

const persona3 = new Persona({
nombre: "Jose Ernesto Diaz",
direccion: "Av. Velez Sarfield 46",
encargo: "una de Peperoni",
total: 2200,
});
const persona4 = new Persona({
nombre: "Lucas Miretti",
direccion: "Av Los Sauces 500",
encargo: "una de Fugazzetta",
total:2300,
});
const persona5 = new Persona({
nombre: "Patricio Morales",
direccion: "Av Los Platanos 556",
encargo: "una de Rucula",
 total: 2400,
    });

console.log(persona1);
console.log(persona2);
console.log(persona3);
console.log(persona4);
console.log(persona5);

//calcular intereses
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = (x) => x *0.21;

let precioproducto = 1000;
let descuento = 10;

let precioNuevo = resta (suma(precioproducto, iva(precioproducto)), descuento);
console.log(nuevoPrecio);

//agrego otro elemento
const productos = ["pizza", "empanadas"];
productos.splice(1, 0, "gaseosa");
console.log(productos);

//precio acorde a gastar
let precio = parseInt (prompt("Ingrese el precio maximo que quiere gastar"));

let encontrados = productos.filter(item => item.precio > precio);
encontrados.forEach((item) => {
    let mensaje = `
    Id: ${item.id}
    Nombre: ${item.nombre}
    Precio: $${item.precio}
    `;
    alert(mensaje);
});

//promos dias miercoles
const preciosPromoMiercoles= productos.map(item => {
    return{
        id: item.id,
        nombre: item.nombre,
        precio:item.precio - item.precio *0.21
    }
});
console.log(preciosPromoMiercoles);

