
function loadData() {
    fetch('https://picsum.photos/v2/list?page=2&limit=100')
        .then(response => response.json())
        .then(data => {
            const randomImage = getRandomImage(data);
            displayImage(randomImage);
            const randomSmallImage = getRandomImage(data);
            displaySmallImage(randomSmallImage);
            const randomSmallImages = getRandomSmallImages(data, 4);
            displaySmallImages(randomSmallImages);
            const additionalImage = getRandomImage(data);
            displayAdditionalImage(additionalImage);
            const randomImagesBelowText = getRandomImagesBelowText(data, 10); // Cambia 10 por el número de imágenes deseadas
            displayRandomImagesBelowText(randomImagesBelowText);
        })
        .catch(error => {
            console.log('Error:', error);
        });
}

function getRandomImage(images) {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

function getRandomSmallImages(images, count) {
    const randomIndices = [];
    while (randomIndices.length < count) {
        const randomIndex = Math.floor(Math.random() * images.length);
        if (!randomIndices.includes(randomIndex)) {
            randomIndices.push(randomIndex);
        }
    }
    return randomIndices.map(index => images[index]);
}

function displayImage(image) {
    const imageElement = document.querySelector('.random-image');
    imageElement.src = image.download_url;
}

function displaySmallImage(image) {
    const smallImageElement = document.querySelector('.small-image');
    smallImageElement.src = image.download_url;
}

function displaySmallImages(images) {
    images.forEach((image, index) => {
        const smallImageElement = document.querySelector(`#small-image-${index + 1}`);
        smallImageElement.src = image.download_url;
    });
}

function displayAdditionalImage(image) {
    const additionalImageElement = document.querySelector('#additional-image');
    additionalImageElement.src = image.download_url;
}

function getRandomImagesBelowText(images, count) {
    const randomIndices = [];
    while (randomIndices.length < count) {
        const randomIndex = Math.floor(Math.random() * images.length);
        if (!randomIndices.includes(randomIndex)) {
            randomIndices.push(randomIndex);
        }
    }
    return randomIndices.map(index => images[index]);
}

function displayRandomImagesBelowText(images) {
    const randomImagesBelowTextElement = document.querySelector('#additionalBelow');
    let index = 0;

    setInterval(() => {
        randomImagesBelowTextElement.src = images[index].download_url;
        index = (index + 1) % images.length;
    }, 2000);
}



loadData();
