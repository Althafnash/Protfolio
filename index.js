const carouselSlide = document.getElementById("carouselSlide");
const slides = document.querySelectorAll(".carousel-item");
let counter = 0;

function showSlide(index) {
carouselSlide.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
counter++;
if (counter >= slides.length) counter = 0;
showSlide(counter);
}

function prevSlide() {
counter--;
if (counter < 0) counter = slides.length - 1;
showSlide(counter);
}

// Optional: auto-scroll every 5 seconds
setInterval(nextSlide, 5000);