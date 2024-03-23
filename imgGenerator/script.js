function myFun() {
    var keyword = document.getElementById("inp").value;
    fetch(`https://api.unsplash.com/photos/random?query=${keyword}&client_id=LHPLzMfgnuLOWfDgi0Qu8qhy9KzjYpQSGhokaeFChQI`)
        .then(response => response.json())
        .then(data => {
            const imageUrl = data.urls.regular;
            document.querySelector('.image').src = imageUrl;
        })
        .catch(error => {
            console.error('Error fetching image:', error);
        });
}