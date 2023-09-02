//code for the slideshow implementations throughout the website




function startSlideshow() {
    var slideshow = document.getElementById("slideshow");
    var slides = slideshow.getElementsByClassName("slide");
    var currentSlide = 0;
  
    // Show the initial slide
    slides[currentSlide].classList.add("active");
  
    setInterval(function() {
      // Hide the current slide
      slides[currentSlide].classList.remove("active");
  
      // Move to the next slide
      currentSlide = (currentSlide + 1) % slides.length;
  
      // Show the next slide
      slides[currentSlide].classList.add("active");
    }, 3000); // 3 seconds
  }
  
  // Start the slideshow when the page is loaded
  window.addEventListener("load", startSlideshow);
  
