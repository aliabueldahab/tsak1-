var add = document.getElementById('add')
var productName = document.getElementById('productName');
var productPrice = document.getElementById('productPrice');
var productDescription = document.getElementById('productDesc');
var bodyResult = document.getElementById('tbody')
var arr = []
var currentIndex
var regex
var regexPrice

if(localStorage.getItem("list") == null){
    arr = [];

}

else{
    arr = JSON.parse(localStorage.getItem("list"))
    display(arr)

}
add.addEventListener("click", function(){
  if(add.innerHTML == 'Add'){
    addProduct()
  }

  else{
    updateProduct()
  }
});

function addProduct(){

    product = {
        productName:productName.value,
        productPrice: productPrice.value,
        productDescription: productDescription.value,

    }

    arr.push(product)
    display(arr)
    deletform()
    steDataToLocalStorage()

}



function display(product){
    var result = ''

    for(var i = 0 ; i < product.length ; i++){
        result += `<tr>
        <td>${product[i].productName}</td>
         <td>${product[i].productPrice}</td>
          <td>${product[i].productDescription}</td>
           <td><button class = 'btn btn-danger' id= 'deleteBtn' onclick= 'deleteData(${i})'> Delete </button></td>
            <td><button class = 'btn btn-success' id= 'updateBtn' onclick= 'showProduct(${i})'> Update </button></td>

        </tr>`
    }

    bodyResult.innerHTML = result
}

function deletform(){
    productName.value  = ''
    productPrice.value = ''
    productDescription.value = ''
}

function searchProduct(term){
    var filterarray = arr.filter(function(product){
        return product.productName.includes(term.trim())
    })
    display(filterarray)
}

function deleteData(index){

    arr.splice(index , 1)
    display(arr)
    
    
}

function steDataToLocalStorage(){
    localStorage.setItem("list" , JSON.stringify(arr))
}


function updateProduct(){
    var product= {productName: productName.value ,
    productPrice: productPrice.value,
    productDescription: productDescription.value 
    }

    arr[currentIndex] = product
    display(arr)
    steDataToLocalStorage(arr)
}
function showProduct(index){
    currentIndex = index
    productName.value = arr[index].productName
    productPrice.value = arr[index].productPrice
    productDescription.value  = arr[index].productDescription
    add.innerHTML = 'Update'
}   


regex = /^[A-Z][a-z]{4}/

productName.addEventListener("keyup" , validateName)

function validateName(){
    if(regex.test(productName.value) == false){
        productName.classList.add("is-invalid");
        productName.classList.remove("is-valid");
        return false
    }

    else{
        productName.classList.add("valid");
        productName.classList.remove("is-invalid");
        return true
    }
}

    regexPrice  = /^[1-9][0-9]{2,}$/



    productPrice.addEventListener("keyup" , validatePrice)
function validatePrice(){
    if(regexPrice.test(productPrice.value) == false){
        productPrice.classList.add("is-invalid");
        productPrice.classList.remove("is-valid");
        return false
    }

    else{
        productPrice.classList.add("valid");
        productPrice.classList.remove("is-invalid");
        return true
    }
}
