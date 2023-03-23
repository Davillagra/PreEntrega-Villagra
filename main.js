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
function validInt() { // No valida si es o no un entero, solo lo transforma a int
    do {
        int = parseInt(prompt("Cantidad de procutos: "))
    } while (isNaN(int))
    return int
}
let price, prodName, stock
while (confirm("Quieres cargar productos para la base de datos?")) {
do {
    prodName = validName(false)
    price = validNumber()
    stock = validInt()
    tipe = validName(true)
    alert("Producto: " + prodName + "\nPrecio: " + price + "\nCantidad: " + stock + "\nCategoria: "+ tipe)
} while (confirm("Desea continuar?"))
}