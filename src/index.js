import { registerImage } from "./lazy";

//  https://gersonlazaro.com/unsplash-api-miles-de-fotos-gratis-en-tu-sitio-web-o-aplicacion/

const mountNode = document.getElementById('images');
const addButton = document.querySelector('.add-button');
const clearButton = document.querySelector('.clear-button');

const unsplashApi = 'https://source.unsplash.com/random/';

const maximum = 100000;
const minimum = 1;
const random = () => Math.floor (Math.random() * (maximum - minimum)) + minimum;



const createImageNode = () => {
    const imageContainer = document.createElement('div');
    imageContainer.className = 'max-w-5 max-h-80 m-10 flex flex-wrap justify-center items-center';

    const image = document.createElement('img');
    image.className = 'max-w-5 max-h-80 bg-slate-500 object-cover';
    image.dataset.src = `${unsplashApi}${random()}`;

    imageContainer.appendChild(image);

    totalImages++;
    printLog();

    return imageContainer;
}

const addImage = () => {
    const newImage = createImageNode();
    mountNode.appendChild(newImage);
    registerImage(newImage);
}

addButton.addEventListener('click', addImage);

clearButton.addEventListener('click', () => {
    mountNode.innerHTML = '';
});
