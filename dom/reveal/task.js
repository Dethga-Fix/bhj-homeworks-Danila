const reveals = document.querySelectorAll('.reveal');

function checkReveal() {
  reveals.forEach(reveal => {
    const rect = reveal.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    
    if (isVisible) {
      reveal.classList.add('reveal_active');
    } else {
      reveal.classList.remove('reveal_active');
    }
  });
}

window.addEventListener('scroll', checkReveal);
checkReveal();