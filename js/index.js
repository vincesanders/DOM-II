// Your code goes here
const images = document.querySelectorAll('img');
const tablet = window.matchMedia("(max-width: 800px)");
const bannerImage = document.querySelector('header img');

images.forEach(img => {                                            //Event 1
    img.addEventListener('mouseenter', e => {
        e.target.style.transform = 'scale(1.2)';
        e.target.style.transition = 'all 0.3s';
    });
    img.addEventListener('mouseleave', e => {                      //Event 2
        e.target.style.transform = 'scale(1)';
    });
    img.addEventListener('click', e => {
        e.target.style.transform = 'rotateY(180deg)';              //Event 4
    });
});

window.addEventListener('resize', e => {                           //Event 3
    if (tablet.matches) {
        bannerImage.src = 'img/bus-and-kayaks-on-beach.jpg';
    } else {
        bannerImage.src = 'img/fun-bus.jpg';
    }
});