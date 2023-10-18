var modal = document.getElementById("myModal");

var images = document.querySelectorAll("#myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

Array.prototype.forEach.call(images, function(img) {
  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
});

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
}

// const track = document.querySelector('.carousel-track');
// const items = document.querySelectorAll('.carousel-item');
// let index = 0;

// function nextSlide() {
//   index = (index + 1) % items.length;
//   updateCarousel();
// }

// function updateCarousel() {
//   const offset = -index * 100 + '%';
//   track.style.transform = 'translateX(' + offset + ')';
// }

// setInterval(nextSlide, 10000); // Cambia al siguiente slide cada 10 segundos