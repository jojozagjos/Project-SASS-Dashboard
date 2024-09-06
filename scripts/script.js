document.querySelectorAll('.fish').forEach(fish => {
    fish.style.top = `${Math.random() * 100}vh`;
    fish.style.animationDelay = `${Math.random() * 5}s`;
});

document.querySelectorAll('.bubble').forEach(bubble => {
    bubble.style.left = `${Math.random() * 100}vw`;
    bubble.style.animationDelay = `${Math.random() * 5}s`;
});
