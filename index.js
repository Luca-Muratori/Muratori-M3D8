const fetchData = async () => {

    let response = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
        method: "POST",
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNjM4MTgyZWExZDAwMTViYjAzZTciLCJpYXQiOjE2NDM3OTk0MjUsImV4cCI6MTY0NTAwOTAyNX0.HPKNI2-J6kunVG-ItaXrWA4moNzzDdind0iU6drdETM"
        }
    });

    let data = await response.json()

    return data

}

fetchData().then((data) => console.log(data))


const inputName = document.querySelector('#name')
const inputDescription = document.querySelector('#description')
const inputBrand = document.querySelector('#brand')
const inputImgUrl = document.querySelector('#img')
const inputPrice = document.querySelector('#price')
const btn = document.querySelector('.btn')
const containerFrontPage = document.querySelector('#containerFrontPage')

const addProduct = () => {
    let productName = inputName.value
    let productDescription = inputDescription.value
    let productBrand = inputBrand.value
    let productImg = inputImgUrl.value
    let productPrice = inputPrice.value
    const productCard = `
                    <div class="card" style="width: 18rem;">
                        <img src="${productImg}"
                            class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${productName}</h5>
                            <p class="card-text">${productDescription}</p>
                            <p>${productPrice}</p>
                            <a href="#" class="btn btn-primary">${productBrand}</a>
                        </div>
                    </div>
    
    `
    const col = document.createElement('div')
    col.classList.add('col')
    console.log(productCard)
    col.innerHTML = productCard
    console.log(containerFrontPage)
    containerFrontPage.appendChild(col)
    console.log(col)
}

btn.addEventListener('click', () => {
    addProduct()
})