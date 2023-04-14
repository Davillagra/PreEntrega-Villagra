function validNumber() {
    do {
        float = parseFloat(prompt("Precio del producto $: "))
    } while (isNaN(float))
    return float
}
function validName(isTipe) { // Esta funcion solo determina si lo ingresado no es un numero
    if (isTipe) {
        do {
            nam = prompt("Tipo/Categoria: ")
        } while (isNaN(nam) == false)
    } else {
        do {
            nam = prompt("Nombre del producto: ")
        } while (isNaN(nam) == false)
    }
    return nam
}
function validInt() { // No valída si es o no un entero, solo lo transforma a int
    do {
        int = parseInt(prompt("Cantidad de productos: "))
    } while (isNaN(int))
    return int
}
function printResults() {
    for (i = 0; i < products.length; i++) {
        for (const product in products[i]) {
            console.log( "Id: " + products[i].id +"- Nombre: " + products[i].name + " - Precio: " + products[i].price + " - Stock: " + products[i].stock + " - Tipo: " + products[i].tipe)
        }
    }
}
function filterTipe(tipe) {
    for (const product of products) {
        if (product.tipe == tipe) {
            console.log("Id: " + products[i].id + "- Nombre: " + products[i].name + " - Precio: " + products[i].price + " - Stock: " + products[i].stock + " - Tipo: " + products[i].tipe)
        }
    }
}
function orderAB() { // Simplemente ordena alfabeticamente
    products.sort((a,b)=> {
        if(a.name > b.name){
            return 1
        }
        if(a.name < b.name){
            return -1
        }
        return 0
    })
}
function orderPrice() {
    products.sort((a,b)=> a.precio - b.precio)
}
function printModResults(modProducts) {
    for (i = 0; i < modProducts.length; i++) {
        for (const product in modProducts[i]) {
            console.log("Id: " + modProducts[i].id + "- Nombre: " + modProducts[i].name + " - Precio: " + modProducts[i].price + " - Stock: " + modProducts[i].stock + " - Tipo: " + modProducts[i].tipe)
        }
    }
}

// Funcion principal

const products = []
let prodPrice, prodName, prodStock, prodTipe, tipe
let i = 0
if (confirm("Quieres cargar productos para la base de datos?")) {
    do {
        prodName = validName(false)
        prodPrice = validNumber()
        prodStock = validInt()
        prodTipe = validName(true)
        i++
        alert("Id: " + i + "\nProducto: " + prodName + "\nPrecio: " + prodPrice + "\nCantidad: " + prodStock + "\nCategoria: " + prodTipe)
        products.push({ id: i, name: prodName, price: prodPrice, stock: prodStock, tipe: prodTipe })
    } while (confirm("Desea agregar otro producto?"))
//printResults() // No queria sacarlos por alert porque me resulta molesto asi que solo lo saco por consola
}

if (confirm("Desea realizar otra operacion?")) {
do {
    switch (parseInt(prompt("Que desea hacer con la lista de productos? \nOrdenar alfabeticamente: 1 \nOrdenar por precio: 2 \nFiltrar por categoria: 3"))) {
        case 1:
        orderAB()
        printResults()
        break

        case 2:
        products.sort((a,b)=> a.price - b.price)
        printResults()
        break

        case 3:
        tipe = prompt("Categoria: ")
        printModResults(products.filter((elemento) => elemento.tipe == tipe))
        break

        default:
        console.log("Caracter ingresado no valido")
        break
    }
} while (confirm("Volver a la seleccion de operaciones?"))
}