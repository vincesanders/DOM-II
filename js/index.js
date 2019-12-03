// Your code goes here
const images = document.querySelectorAll('img');

images.forEach((img) => {
    img.addEventListener('mouseenter', (e) => {
        e.target.style.transform = 'scale(1.2)';
        e.target.style.transition = 'all 0.3s';
    });
    img.addEventListener('mouseleave', (e) => {
        e.target.style.transform = 'scale(1)';
        e.target.style.transition = 'all 0.3s';
    });
});