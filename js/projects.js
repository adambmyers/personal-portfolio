// start header nav
run();

function run() {
  bindNavButtonToNavList();
}

function toggleHide(element) {
  element.classList.toggle('hide');
}

function bindNavButtonToNavList() {
  const navButton = document.querySelector('.nav__button');
  
  navButton.addEventListener('click', function() {
    const navList = document.querySelector('.nav__list');
    toggleHide(navList);
  });
}
// end header nav

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("project");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}
// start read more
function descFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var vpText = document.getElementById("vpBtn");
  var hhText = document.getElementById("hhBtn");
  var cpText = document.getElementById("cpBtn");
  var apText = document.getElementById("apBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    vpText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    vpText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
// end read more
