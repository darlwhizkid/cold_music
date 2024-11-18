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

document.addEventListener('DOMContentLoaded', function() {
    const browseLetters = document.querySelectorAll('.browseAlbum');
    const gridItems = document.querySelectorAll('.grid-item');
    const browseAll = document.querySelector('.browseHead');

    // Show all items when "Browse All" is clicked
    browseAll.addEventListener('click', function() {
        gridItems.forEach(item => {
            item.style.display = 'block';
        });
    });

    // Add click event for each letter
    browseLetters.forEach(letter => {
        letter.addEventListener('click', function() {
            const selectedLetter = this.textContent;
            
            gridItems.forEach(item => {
                const title = item.querySelector('.dj').textContent;
                
                if (selectedLetter === '0-9') {
                    // Show items starting with numbers
                    item.style.display = /^[0-9]/.test(title) ? 'block' : 'none';
                } else {
                    // Show items starting with the selected letter
                    item.style.display = title.charAt(0).toUpperCase() === selectedLetter ? 'block' : 'none';
                }
            });
        });
    });
});
