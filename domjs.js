"use strict";
var imageCounter = 1;
showDiv(imageCounter);
function changeImage(m) {
showDiv (imageCounter = imageCounter + m)
}
function showDiv(n) {
    var i;
    var imageArray = document.getElementsByClassName("mySlides");
    if (n > imageArray.length) {
    imageCounter = 1;
    }
    if (n < 1) {
        imageCounter = imageArray.length;
    }
    for (i = 0; i < imageArray.length; i++) {
    imageArray[i].style.display = "none";
    }
    imageArray[imageCounter - 1].style.display = "block";
}

var acc = document.getElementsByClassName("accordion");
var a;

for (a = 0; a < acc.length; a++) {
  acc[a].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}