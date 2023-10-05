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