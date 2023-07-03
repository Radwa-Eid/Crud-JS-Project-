var productName = document.getElementById("productName")
var productPrice = document.getElementById("productPrice")
var productCount = document.getElementById("productCount")
var productCategory = document.getElementById("productCategory")
var productDescription = document.getElementById("productDescription")

var productContainer;
if (localStorage.getItem("ourProduct") == null) {
    productContainer = []
}
else {
    productContainer = JSON.parse(localStorage.getItem("ourProduct"))
    displayProduct(productContainer)
}

function totalatadd() {
    num1 = 0.14 * Number(productPrice.value)
    num2 = num1 + Number(productPrice.value)
    final = num2 * Number(productCount.value)
    document.getElementsByName("TotalPrice")[0].placeholder = final;
}

function tackesfun() {
    number = 0.14 * Number(productPrice.value)
    document.getElementsByName("productTakes")[0].placeholder = number;
}
function tottaall() {
    tackes = 0.14 * Number(productPrice.value)
    priceOne = tackes + Number(productPrice.value)
    addTotal = priceOne * Number(productCount.value)
    return addTotal
}

function addProduct() {
    addTotal = tottaall()
    var product = {
        name: productName.value.toLowerCase(),
        prics: Number(productPrice.value),
        takes: Number(tackes),
        count: Number(productCount.value),
        total: Number(addTotal),
        categ: productCategory.value,
        desc: productDescription.value
    }
    productContainer.push(product)
    if (product.name == "" || product.prics == "" || product.categ == "" || product.desc == "" || product.count == "") {
        alert("Please Enter All Information")
        productContainer.pop()
    }
    localStorage.setItem("ourProduct", JSON.stringify(productContainer))
    displayProduct(productContainer)
    clearProduct()
}

function displayProduct(productContainer) {
    var productList = ''
    for (var i = 0; i < productContainer.length; i++) {
        productList += `<tr>
        <td>${i + 1}</td>
        <td>${productContainer[i].name}</td>
        <td>${productContainer[i].prics}</td>
        <td>${productContainer[i].takes}</td>
        <td>${productContainer[i].count}</td>
        <td>${productContainer[i].total}</td>
        <td>${productContainer[i].categ}</td>
        <td>${productContainer[i].desc}</td>
        <td><button onclick="Update(${i})" type="button" class="btn btn-info">Update</button></td>
        <td><button onclick="deleteOne(${i})" type="button" class="btn btn-danger">Delete</button></td>
    </tr>`
    }
    document.getElementById("tBody").innerHTML = productList
    updateBtn()
}

function clearProduct() {
    productName.value = ""
    productPrice.value = ""
    productCategory.value = ""
    productDescription.value = ""
    productCount.value = ""
    productTakes.value = ""
    document.getElementsByName("productTakes")[0].placeholder = ""
    document.getElementsByName("TotalPrice")[0].placeholder = ""
}

function deleteAll() {
    productContainer.splice(0)
    localStorage.setItem("ourProduct", JSON.stringify(productContainer))
    displayProduct(productContainer)
}

//Decrese one from count
function deleteOne(i) {
    if (productContainer[i].count > 1) {
        productContainer[i].count = productContainer[i].count - 1
        deletTakes = 0.14 * productContainer[i].prics
        deletpriceOne = deletTakes + productContainer[i].prics
        productContainer[i].total = deletpriceOne * productContainer[i].count
    }
    else {
        deleteItem(i)
    }
    localStorage.setItem("ourProduct", JSON.stringify(productContainer))
    displayProduct(productContainer)
}

//Delete Row
function deleteItem(i) {
    productContainer.splice(i, 1)
    localStorage.setItem("ourProduct", JSON.stringify(productContainer))
    displayProduct(productContainer)
}

function Update(i) {

    productName.value = productContainer[i].name
    document.getElementById("productName").innerHTML = productName.value

    productPrice.value = productContainer[i].prics
    document.getElementById("productPrice").innerHTML = Number(productPrice.value)

    productTakes.value = productContainer[i].takes
    document.getElementById("productTakes").innerHTML = productTakes.value

    totalupdate = productContainer[i].total
    document.getElementsByName("TotalPrice")[0].placeholder = totalupdate

    productCount.value = productContainer[i].count
    document.getElementById("productCount").innerHTML = Number(productCount.value)

    productCategory.value = productContainer[i].categ
    document.getElementById("productCategory").innerHTML = productCategory.value

    productDescription.value = productContainer[i].desc
    document.getElementById("productDescription").innerHTML = productDescription.value

    productList = document.getElementById("update").innerHTML
    var newButton = `<button onclick="updateProduct(${i})" type="button" class="btn btn-info">Update</button>`
    document.getElementById("update").innerHTML = newButton

}
function updateProduct(i) {
    productContainer[i].name = productName.value;
    productContainer[i].prics = productPrice.value;
    productContainer[i].takes = productTakes.value;
    productContainer[i].total = totalupdate;
    productContainer[i].categ = productCategory.value;
    productContainer[i].desc = productDescription.value;
}
function updateBtn() {
    productList = document.getElementById("update").innerHTML
    if (productList == "Update Product") {
        document.getElementById("update").innerHTML = "Add Product"
    }
}

function searchProduct(product) {
    var product2=product.toLowerCase();
    var productContainer2 = [];
    for (var i = 0; i < productContainer.length; i++) {
        if (productContainer[i].name.includes(product2.trim()) == true) {
    //     productContainer2 += <tr>
    //     <td>${i + 1}</td>
    //     <td>${productContainer[i].name}</td>
    //     <td>${productContainer[i].prics}</td>
    //     <td>${productContainer[i].takes}</td>
    //     <td>${productContainer[i].count}</td>
    //     <td>${productContainer[i].total}</td>
    //     <td>${productContainer[i].categ}</td>
    //     <td>${productContainer[i].desc}</td>
    //     <td><button onclick="Update(${i})" type="button" class="btn btn-info">Update</button></td>
    //     <td><button onclick="deleteOne(${i})" type="button" class="btn btn-danger">Delete</button></td>
    // </tr>
            productContainer2.push(productContainer[i]);
            displayProduct(productContainer2)
        }
        else{
            displayProduct(productContainer2)
        } 
    }
}


