var swiper = new swiper(".my swiper-1",{
    slidesPerView:1,
    spaceBetween:30,
    loop:true,
    pagination:{
        el: ".swiper-pagination",
        clickable: true,
    },navigation:{
        nextE1:".swiper-button-next",
        prevE1:".swiper-button-prev",
    }
});

let tabInputs = document.querySelectorAll(".tabInput");
tabInputs.forEach(function(input){
    input.addEventListener('change', function(){
        let id = input.ariaValueMax;
        let thisSwiper = document.getElementById('swiper' + id);
        thisSwiper.swiper.update();

    })
});

var swiper = new swiper(".my swiper-2",{
    slidesPerView:3,
    spaceBetween:20,
    loop:true,
    loopFillGroupWithBlank:true,
    navigation:{
        nextE1:".swiper-button-next",
        prevE1:".swiper-button-prev",
    },
    breakpoints :{
        0:{
            slidesPerView:1,
        },
        520:{
            slidesPerView:2,
        },
        950:{
            slidesPerView:3,
        }
    }
});

//colocar nuestros datos
let nombre = prompt ("ingrese su nombre");
let apellido = prompt ("ingrese su apellido");

 if (nombre != "" && apellido != ""){
    alert (`Bienvenido ${nombre} ${apellido}`);
 }else{
    alert("Nombre y Apellido son requeridos");
} 

//si quiero o no comprar un celular
let respuesta = prompt ("¿Quieres encargar una pizza?").toLowerCase();
if (respuesta === "si"){
alert ("Aqui encontraras las mejores pizzas a un precio increible");
}else{
    alert("te esperamos en otra ocasion");
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
