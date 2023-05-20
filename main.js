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
let respuesta = prompt ("¿Quieres comprar un celular?").toLowerCase();
if (respuesta === "si"){
alert ("Aqui encontraras las mejores promociones");
}else{
    alert("Lo esperamos cuando quieras comprar un dispositivo movil");
}

//producto disponible o no disponible
const dispositivos = ["samsungS23", "samsungS22 ultra", "pantalon"];
let marca = prompt ("ingrese el nombre del producto a buscar");
let encontrado = productos.includes(marca);
if(encontrado){
    alert("Producto disponinble");
}else{
    alert("Producto no disponible");
}


//precio y modelos de celulares
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
const producto1 = new Producto("Samsung J7", "178000", "htpp:asdf")
const producto2 = new Producto("Samsung S20 FE", "230000", "htpp:asgd")
const producto3 = new Producto("Samsung A70", "56000", "htpp:asud")
const producto4 = new Producto("Samsung S23", "350000", "htpp:asbf")
const producto5 = new Producto("Samsung A50 Plus", "450000", "htpp:rsdf")
const producto6 = new Producto("Samsung S22 Ultra", "280000", "htpp:aedf")
const producto7 = new Producto("Samsung S23 Ultra", "160000", "htpp:asof")
console.log(producto1);
producto1.vender();
console.log(producto1);
console.log(producto2);
console.log(producto3);
console.log(producto4);
console.log(producto5);
console.log(producto6);
console.log(producto7);

//pesonas que tambien compraron 
function Persona(info){
    this.nombre = info.nombre;
    this.edad = info.edad;
    this.direccion = info.direccion;
}
const persona1 = new Persona({
nombre: "Ana Paula Rossales",
edad: 30,
direccion: "Cordoba Capital",
});
const persona2 = new Persona({
nombre: "Luis Cabrera",
edad: 55,
direccion: "Av. Juan.B Justo 334",
});
const persona3 = new Persona({
nombre: "Jose Ernesto Diaz",
edad: 43,
direccion: "Av. Velez Sarfield 46",
});
const persona4 = new Persona({
nombre: "Lucas Miretti",
edad: 28,
direccion: "Av Los Sauces 500",
});

console.log(persona1);
console.log(persona2);
console.log(persona3);
console.log(persona4);

//calcular intereses
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = (x) => x *0.21;

let precioproducto = 1000;
let descuento = 10;

let precioNuevo = resta (suma(precioproducto, iva(precioproducto)), descuento);
console.log(nuevoPrecio);

//agrego otro elemento
const productos = ["celular", "cargador", "vidrio templado y funda"];
productos.splice(1, 0, "auriculares inalambricos");
console.log(productos);
