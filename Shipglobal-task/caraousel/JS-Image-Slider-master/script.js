let nextbutton = document.querySelector("#next");
let prevbutton = document.querySelector("#prev");
let images = document.querySelectorAll(".slide");
let number = 0;
nextbutton.addEventListener("click", function() {
  
    images.forEach(function (slide, index) {
    if (slide.classList.contains("show") === true) {
      number = index + 1;
      slide.classList.remove("show");
    }
    
  });
  if (number < images.length) {
    images[number].classList.add("show");
    }
  else {
      number = 0;
      images[number].classList.add("show");
    }
});
prevbutton.addEventListener('click', function () {
   
    images.forEach(function (slide, index) {
        if (slide.classList.contains("show") === true) {
            number = index - 1;
            slide.classList.remove("show");
        }
       
        
    });

    if (number < images.length && number > -1) {
        images[number].classList.add("show");
    }
    else {
        
        number = images.length - 1;
        images[number].classList.add("show");
    }
});