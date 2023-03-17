// Arrays de productos de acuario //

const productos = [
    { nombre: "aireador", precio: 3500 },
    { nombre: "pecera ", precio: 9000 },
    { nombre: "piedras", precio: 150 },
    { nombre: "calentador", precio: 5000 },
];

// Funcion para mostrar los productos del carrito //

function mostrarCarrito() {
    carrito.forEach((carritoFinal) => {
        console.log(`producto: ${carritoFinal.producto}, unidade: ${carritoFinal.unidades},total a pagar por producto $ 
    ${carritoFinal.unidades * carritoFinal.precio}`);

        alert(`producto: ${carritoFinal.producto}, unidade: ${carritoFinal.unidades},total a pagar por producto $ 
    ${carritoFinal.unidades * carritoFinal.precio}`);
    })
}

// Carrito, ciclos y seleccion de productos //

let carrito = []

let seleccion = prompt("hola bienvenido, desea comprar algun producto? si o no");

while (seleccion != "si" && seleccion != "no") {
    alert("por favor ingresa si o no");
    seleccion = prompt("bienvenido, desea comprar algo? si o no");
}

if (seleccion === "si") {
    alert("a continuacion nuestra lista de los productos");
    let todoslosProductos = productos.map(
        (producto) => producto.nombre + "$" + producto.precio);

    alert(todoslosProductos.join("-"));

} else if (seleccion === "no")
    alert("gracias por visitar el sitio, hasta pronto!!");


// Ciclo para los productos y muestreo por consola //

while (seleccion != "no") {
    let producto = prompt("agrega el producto que deseas al carrito");
    let precio = 0

    if (producto === "aireador" || producto === "pecera" ||
        producto === "piedras" || producto === "calentador") {
        switch (producto) {
            case "aireador":
                precio = 3500
                break;
            case "pecera":
                precio = 9000
                break;
            case "piedras":
                precio = 150
                break;
            case "calentador":
                precio = 5000
                break;
            default:
                break;
        }

        let unidades = parseInt(prompt("coloque las unidades que necesite"))

        carrito.push({ producto, unidades, precio })
        console.log(carrito);

    } else {
        alert("no disponemos de ese producto")
    }

    // Ciclo de seleccion por no seguir comprando y muestreo por alert y consola el carrrito de productos con su compra //

    seleccion = prompt("desea seguir agregando productos?");

    while (seleccion === "no") {
        alert("gracias por su compra")
        break;
    }

}

// Convoca la funcion para mostrar los productos del carrito // 

mostrarCarrito();

// Muestra por alert y consola el total a pagar por su compra //

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
console.log(`el total a pagar por su compra es: $ ${total}`);
alert(`el total a pagar por su compra es: $ ${total}`);
