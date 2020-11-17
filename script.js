'use strict'

const modalApp = (() => {
    var modal = document.getElementById("myModal");

    const display = () => {
        modal.style.display = "block";
        carouselApp.renderImages();
        //select first element to display on popup
        document.getElementById('0').style.display='block';
    }

    const close = () => {
        modal.style.display = "none";
    }

    return {
        display,
        close
    }
})();

const carouselApp = (() => {
    const images = [
        {
            id: 1,
            src: './assets/img/img1.jpg',
            alt: 'Image 1',
            caption: 'This is image 1',
        },
        {
            id: 2,
            src: './assets/img/img2.jpg',
            alt: 'Image 2',
            caption: 'This is image 2',
        },
        {
            id: 3,
            src: './assets/img/img3.jpg',
            alt: 'Image 3',
            caption: 'this is image 3',
        }
    ];

    const renderImages = () => {
        document.getElementById('slide').innerHTML = images.map((img, idx) =>
            `
                <div class="mySlides fade" id=${idx}>
                    <div class="numbertext"> ${idx+1} / ${images.length}</div>
                    <img src=${img.src} alt=${img.alt} style="width:100%">
                    <div class="text">${img.caption}</div>
                </div>
            `
        ).join('');
    }

    return {
        renderImages
    }
})();

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
      var slides = document.getElementsByClassName("mySlides");
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
