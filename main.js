const products = JSON.parse(localStorage.getItem("Objt1")) || []
let idCount = parseInt(localStorage.getItem("idCount")) || 0
JSON.parse(localStorage.getItem("Objt1"))
function printProducts(product) {
    const productCard = document.createElement("div")
    productCard.className = "card"
    productCard.innerHTML = `
        <h3>${product.name}</h4>
        <p>Precio: ${product.price}</p><p>Stock: ${product.stock}</p>
        <button class="button1" data-index="${product.id}">Editar</button><button class="button2" data-index="${product.id}">Borrar</button>
    `
    container.append(productCard)
}

const container = document.getElementById("container")
JSON.parse(localStorage.getItem("Objt1"))
products.forEach((product) => {
    printProducts(product)
})

const form = document.getElementById("form")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const data = e.target.children
    const product = {
        id: idCount,
        name: data["name"].value,
        price: parseInt(data["price"].value),
        stock: parseInt(data["stock"].value),
        date: new Date()
    }
    alert("Producto creado")
    idCount++
    products.push(product)
    form.reset()
    printProducts(product)
    console.log(products)
    localStorage.setItem("Objt1", JSON.stringify(products))
    localStorage.setItem("idCount", idCount)
})

container.addEventListener("click", (e) => { // Boton de borrado
    if (e.target.classList.contains("button2")) {
        const productId = parseInt(e.target.getAttribute("data-index"))
        const productIndex = products.findIndex((product) => product.id == productId)
        products.splice(productIndex, 1)
        localStorage.setItem("Objt1", JSON.stringify(products))
        e.target.parentElement.remove()
    }
})

// De momento no estoy seguro de como hacer el boton de editar pero estoy trabajando en ello
/*container.addEventListener("click", (e) => { 
    if (e.target.classList.contains("button1")) {
        const productId = parseInt(e.target.getAttribute("data-index"))
        const productIndex = products.findIndex((product) => product.id == productId)
        function editProduct(products) {
            const productCard = document.getElementsByClassName("card")
            productCard.innerHTML = `
                <form id="form">
                <input class="form" type="text" placeholder="Nombre del producto" name="name" required>                    <input class="form" type="number" placeholder="Precio" name="price" required>
                <input class="form" type="number" placeholder="Stock" name="stock" required>
                <button class="submit" type="submit">Guardar</button>
                </form>
            `
        }
    }
})*/