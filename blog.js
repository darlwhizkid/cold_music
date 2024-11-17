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
