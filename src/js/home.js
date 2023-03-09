let slideInd = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideInd++;
  if (slideInd > slides.length) {
    slideInd = 1;
  }
  // let randomImg = Math.floor(Math.random() * slides.length);
  slides[slideInd - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}
