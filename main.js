
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;
    
    function cycleSlides() {
        slides.forEach((slide, index) => {
            slide.style.opacity = index === currentSlide ? '1' : '0';
            slide.style.transition = 'opacity 1s ease-in-out';
});

        
        currentSlide = (currentSlide + 1) % slides.length;
    }
    
    setInterval(cycleSlides, 10000);
});

// For the sticky top bar
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        const topBar = document.querySelector('.top-bar');
        if (window.scrollY > 50) {
            topBar.classList.add('scrolled');
        } else {
            topBar.classList.remove('scrolled');
        }
    });
});


let index = 0;
        const totalBoxes = 7;
        const boxesToShow = 4;
        const moveStep = 240; // 220px + margin
        
        document.getElementById('next').onclick = function() {
            index++;
            if (index > totalBoxes - boxesToShow) {
                index = totalBoxes - boxesToShow; // Stay at the last position
            }
            updateCarousel();
        };

        document.getElementById('prev').onclick = function() {
            index--;
            if (index < 0) {
                index = 0; // Stay at the first position
            }
            updateCarousel();
        };

        function updateCarousel() {
            const carousel = document.querySelector('.carousel');
            carousel.style.transform = `translateX(-${index * moveStep}px)`;
        }
      // Get the button
      let mybutton = document.getElementById("scrollToTop");

      function topFunction() {
          const currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
          if (currentPosition > 0) {
              window.requestAnimationFrame(() => {
                  window.scrollTo(0, currentPosition - currentPosition/20);
                  topFunction();
              });
          }
      }

      window.addEventListener('scroll', () => {



          if (window.pageYOffset === 0) {
              mybutton.style.display = 'none';
          } else {




              mybutton.style.display = 'block';
          }
      });
