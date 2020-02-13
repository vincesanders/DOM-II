// Your code goes here
const images = document.querySelectorAll('img');
const tablet = window.matchMedia("(max-width: 800px)");
const bannerImage = document.querySelector('header img');
const middleCards = document.querySelectorAll('.content-section');
const cursor = document.getElementById('cursor');
const logo = document.querySelector('.logo-heading');
const body = document.querySelector('body');

images.forEach(img => {                                            //Event 1
    img.addEventListener('mouseenter', e => {
        e.target.style.transform = 'scale(1.2)';
        e.target.style.transition = 'all 0.3s';
    });
    img.addEventListener('mouseleave', e => {                      //Event 2
        e.target.style.transform = 'scale(1)';
    });
    img.addEventListener('click', e => {
        e.stopPropagation();
        e.target.style.transform = 'rotateY(180deg)';              //Event 4
        expandingCircle(e);
    });
});

middleCards.forEach(card => {
    card.addEventListener('click', e => {
        card.classList.toggle('dashed-border');                    //Event 5
    });
});

window.addEventListener('resize', e => {                           //Event 3
    if (tablet.matches) {
        bannerImage.src = 'img/bus-and-kayaks-on-beach.jpg';
    } else {
        bannerImage.src = 'img/fun-bus.jpg';
    }
});

window.addEventListener('mousemove', e => {                        //Event 6
    cursor.style.top = e.clientY - 25 + 'px';
    cursor.style.left = e.clientX - 25 + 'px';
});

document.addEventListener('click', expandingCircle);              //Event 7

function expandingCircle(e) {
    let circle = document.createElement("circle");
    cursor.appendChild(circle);
    circle.style.top = e.clientY + "px";
    circle.style.left = e.clientX + "px";
    circle.addEventListener('animationend', e => {                //Event 8
        circle.parentElement.removeChild(circle);
    });
}

logo.addEventListener('auxclick', e => {                         //Event 9
    new Audio('sounds/horn.mp3').play()
})

document.addEventListener('keypress', e => {                     //Event 10
    let circle = document.createElement("flying-circle");
    body.appendChild(circle);
    circle.style.top = Math.floor(Math.random() * screen.height) + "px";
    circle.style.left = Math.floor(Math.random() * screen.width) + "px";
});