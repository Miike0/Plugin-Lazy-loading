
const isIntersecting = (entry) => {
    return entry.isIntersecting; //true if is on focus view
};

const action = (entry) => {
    const nodo = entry.target;
    console.log('Action')
    observer.unobserve(nodo);
};

const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach (action);
});

export const registerImage = (image) => {
    observer.observe(image);
}