// Your code goes here
const images = document.querySelectorAll('img');
const tablet = window.matchMedia("(max-width: 800px)");
const bannerImage = document.querySelector('header img');

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

window.addEventListener('resize', (e) => {
    if (tablet.matches) {
        bannerImage.src = 'img/bus-and-kayaks-on-beach.jpg';
    } else {
        bannerImage.src = 'img/fun-bus.jpg';
    }
});