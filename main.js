const contenedorProductos = document.querySelector('#contenedor-productos');
console.log(productos)

const mostrarProductos = (data) => {
data.forEach(producto =>{
    const cardProducto = document.createElement('article');
    cardProducto.setAttribute('id', 'tarjeta-producto');
    cardProducto.innerHTML = `
        <img class ="prod-img" src="${producto?.img}" alt="${producto?.nombre}" style="width: 75px"
        <div class ="prod-description">
        <h5 class= "obra-nombre">${producto?.nombre}</h5>
        <h5 class= "obra-nombre">${producto?.autor}</h5>
        <button id ='${producto.id}' class="btn-compra">COMPRAR</button>
        </div>
        `;
    contenedorProductos.appendChild(cardProducto);
})
const btnComprar = document.querySelectorAll('.btn-compra');
btnComprar.forEach(el => {
    el.addEventListener('ckick', (e) =>{
        agregarAlCarrito(e.target.id)
    });
})
}

mostrarProductos(productos);
const carrito = [];
function agregarAlCarrito(id){
    const existe = carrito.some(prod => prod.id === parseInt(id));
    if(existe){
        carrito.map(prod => prod.cantidad++)
        
    }else{
        let prodEncontrado = productos.find(prod => prod.id === parseInt(id));
        carrito.push(prodEncontrado);
    }
    
    console.log(carrito);
}



let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
    e.preventDefault ();
    let inputs = e.target.children;
    console.log(inputs[0].value);
    console.log(inputs[1].value);
    console.log(inputs[2].value);
    console.log(inputs[3].value);
});


