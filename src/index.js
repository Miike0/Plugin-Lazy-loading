/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

//  https://gersonlazaro.com/unsplash-api-miles-de-fotos-gratis-en-tu-sitio-web-o-aplicacion/

const mountNode = document.getElementById('images');
const addButton = document.querySelector('.add-button');

const unsplashApi = 'https://source.unsplash.com/random/';
console.log(unsplashApi)

const maximum = 100000;
const minimum = 1;
const random = () => Math.floor (Math.random() * (maximum - minimum)) + minimum;

const createImageNode = () => {
    const imageContainer = document.createElement('div');
    imageContainer.className = 'p-4';

    const image = document.createElement('img');
    image.className = 'max-auto';
    image.width = '320';
    image.src = `${unsplashApi}${random()}`;

    imageContainer.appendChild(image);
    return imageContainer;
}

const addImage = () => {
    const newImage = createImageNode();
    mountNode.append(newImage);
}

addButton.addEventListener('click', addImage);
