//Scrolling Effects
ScrollReveal(
    { 
      //reset: true,
      duration: 2500,
      distance: '50px',
      delay: 400,
     });

ScrollReveal().reveal('.panel', { delay: 150, origin: 'top' });
ScrollReveal().reveal('.panel-2', { delay: 150, origin: 'right' });
ScrollReveal().reveal('.feat-image img', { delay: 50, origin: 'bottom' });