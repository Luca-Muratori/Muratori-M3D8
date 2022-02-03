const getData = async () => {
    try {
        let response = await fetch("https://striveschool-api.herokuapp.com/api/product/", {

            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNjM4MTgyZWExZDAwMTViYjAzZTciLCJpYXQiOjE2NDM3OTk0MjUsImV4cCI6MTY0NTAwOTAyNX0.HPKNI2-J6kunVG-ItaXrWA4moNzzDdind0iU6drdETM",
                'Content-Type': 'application/json',
            }
        });
        const data = await response.json()
        console.log(data)
        renderData(data)
    }
    catch (error) {
        console.log(error)
    }
}
const row = document.querySelector('#containerFrontPage')

const renderData = (data) => {
    data.forEach(product => {
        console.log(product.brand)
        const col = document.createElement('div')
        col.classList.add('col')
        col.innerHTML = `
                    <div class="card" style="width: 18rem;">
                        <img style='min-height:280px; max-height:280px; object-fit:cover' src="${product.imageUrl}"
                            class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text  text-truncate" style=' max-width: 400px;'>${product.description}</p>
                            <p>$${product.price}</p>
                            <a href="#">${product.brand}</a>
                            </div>
                            <a href='#' onclick='deleteCard()'>Delete</a>
                    </div>
        `
        row.appendChild(col)
    });

}


getData()