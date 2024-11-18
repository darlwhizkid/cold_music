// For the top-bar
window.addEventListener('scroll', function() {
    const topBar = document.querySelector('.top-bar');
    if (window.scrollY > 50) {
        topBar.classList.add('scrolled');
    } else {
        topBar.classList.remove('scrolled');
    }
});

// For the scroll to the top
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
            // For the testimonial carousel

            function initTestimonialCarousel() {
                const carousel = document.querySelector('.testimonial-carousel');
                const slides = document.querySelectorAll('.testi-carol');
                let currentIndex = 0;

                function slideTestimonials() {
                    currentIndex = (currentIndex + 1) % slides.length;
                    slides.forEach((slide, index) => {
                        slide.style.transform = `translateX(-${currentIndex * 100}%)`;
                    });
                }

                // Simple back and forth transition
                setInterval(slideTestimonials, 12000);
            }

            document.addEventListener('DOMContentLoaded', initTestimonialCarousel);
