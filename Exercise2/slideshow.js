images = document.querySelectorAll("img");

for (let a = 1; a < images.length; a++) {
   images[a].style.display = 'none';
}

let current = 0;

const cycle_img_forward = function() {
   images[current].style.display = 'none'
   current = (current + 1)%5
   images[current].style.display = 'block'
   
}

const cycle_img_back = function() {
   images[current].style.display = 'none'
   current = (current+4)%5
   images[current].style.display = 'block'
   
}