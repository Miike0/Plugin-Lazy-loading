import { registerImage } from "./lazy";

//  https://gersonlazaro.com/unsplash-api-miles-de-fotos-gratis-en-tu-sitio-web-o-aplicacion/

const mountNode = document.getElementById('images');
const addButton = document.querySelector('.add-button');

const unsplashApi = 'https://source.unsplash.com/random/';

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
    registerImage(newImage);
}

addButton.addEventListener('click', addImage);
