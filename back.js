const createData = async () => {
    try {
        let response = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
            method: "POST",
            body: JSON.stringify({
                name: document.querySelector('#name').value,
                description: document.querySelector('#description').value,
                brand: document.querySelector('#brand').value,
                imageUrl: document.querySelector('#img').value,
                price: document.querySelector('#price').value,
            }),
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNjM4MTgyZWExZDAwMTViYjAzZTciLCJpYXQiOjE2NDM3OTk0MjUsImV4cCI6MTY0NTAwOTAyNX0.HPKNI2-J6kunVG-ItaXrWA4moNzzDdind0iU6drdETM",
                'Content-Type': 'application/json',
            }
        });
        if (response.ok) {
            //this is to redirect the data to the front page
            window.location.replace('MuratoriM3D8-frontPage.html')
        }
    } catch (error) {
        console.log(error)
    }
}



