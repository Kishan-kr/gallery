
let gallery = document.getElementById('gallery');
let largeContainer = document.getElementById('large-container');
let outside = document.getElementsByClassName('outside')[0];
let largePhoto = document.querySelector(".large-photo");
let close = document.querySelector('.close');
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let currentPhoto;

for(let i = 0; i < 12; i++) {
    let photoCover = document.createElement('DIV');
    photoCover.classList.add('photo-cover');
    let photo = document.createElement('IMG');
    photo.classList.add('photo');
    photo.setAttribute('src', `./photos/pic${i+1}.jpg`);
    photoCover.appendChild(photo);
    gallery.appendChild(photoCover);
}

for(let photo of document.getElementsByClassName('photo-cover')) {
    photo.onclick = () => {largeView(photo)};
}

next.addEventListener('click', nextPhoto);
prev.addEventListener('click', prevPhoto);

function largeView(photo) {
    currentPhoto = photo;
    let src = photo.children[0].getAttribute('src');
    largePhoto.setAttribute('src', src);
    outside.style.display = "flex";
    disableButtons();
    disableScroll();
}

close.onclick = () => {
    outside.style.display = "none";
    enableScroll();
}

function nextPhoto() {
    if(currentPhoto.nextSibling) {
        currentPhoto = currentPhoto.nextSibling;
        let newSrc = currentPhoto.children[0].getAttribute('src');
        largePhoto.setAttribute('src', newSrc);
    }
    disableButtons();
}

function prevPhoto() {
    if(currentPhoto.previousElementSibling) {
        currentPhoto = currentPhoto.previousSibling;
        let newSrc = currentPhoto.children[0].getAttribute('src');
        largePhoto.setAttribute('src', newSrc);
    }
    disableButtons();
}

function disableButtons() {
    if(!currentPhoto.previousElementSibling) {
        prev.disabled = true;
    }
    else {
        prev.disabled = false; 
    }   

    if(!currentPhoto.nextSibling) {
        next.disabled = true;
    }
    else {
        next.disabled = false;
    }
}

function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  
        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}
  
function enableScroll() {
    window.onscroll = function() {};
}