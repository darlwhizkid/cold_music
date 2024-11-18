
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


    //   for the countdown timer
    function updateCountdown() {
        const eventDate = new Date('December 26, 2024 00:00:00').getTime();
        const now = new Date().getTime();
        const gap = eventDate - now;
    
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
    
        const textDay = Math.floor(gap / day);
        const textHour = Math.floor((gap % day) / hour);
        const textMinute = Math.floor((gap % hour) / minute);
        const textSecond = Math.floor((gap % minute) / second);
    
        document.getElementById('days').innerText = textDay;
        document.getElementById('hours').innerText = textHour;
        document.getElementById('minutes').innerText = textMinute;
        document.getElementById('seconds').innerText = textSecond;
    }
    
    setInterval(updateCountdown, 1000);
    updateCountdown();
          // Add this mobile navigation code
          document.addEventListener('DOMContentLoaded', function() {
              const mobileNavToggle = document.getElementById('mobileNavToggle');
              const mainNav = document.getElementById('mainNav');
    
              mobileNavToggle.addEventListener('click', function() {
                  this.classList.toggle('active');
                  mainNav.classList.toggle('active');
              });

              // Close menu when clicking nav links
              const navLinks = mainNav.getElementsByTagName('a');
              Array.from(navLinks).forEach(link => {
                  link.addEventListener('click', () => {
                      mobileNavToggle.classList.remove('active');
                      mainNav.classList.remove('active');
                  });
              });
          });


          // Add this scroll to top functionality
window.onscroll = function() {
    const scrollButton = document.getElementById("scrollToTop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.classList.add("visible");
    } else {
        scrollButton.classList.remove("visible");
    }
};

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
