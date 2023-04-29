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
form.addEventListener("submit",(e)=>{
    alert("Producto creado")
    e.preventDefault()
    const data = e.target.children
    const product = {
        id:idCount,
        name:data["name"].value,
        price:parseInt(data["price"].value),
        stock:parseInt(data["stock"].value),
        date: new Date()
    }
    idCount++
    products.push(product)
    form.reset()
    printProducts(product)
    console.log(products)
    localStorage.setItem("Objt1",JSON.stringify(products))
    localStorage.setItem("idCount", idCount)
})

const deleteButton = document.querySelectorAll(".button2")
deleteButton.forEach(button => {
    button.addEventListener("click",(e) => {
    let index = parseInt(e.target.getAttribute("data-index"))
    console.log(index)
    products.splice(index,1)
    localStorage.removeItem("Objt1")
    localStorage.setItem("Objt1",JSON.stringify(products))
    container.innerHTML = ""
})
})
