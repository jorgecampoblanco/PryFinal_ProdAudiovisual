
$(document).ready(function(){
  let slides = $('.slide');
  let index = 0;
  slides.eq(index).show();

  setInterval(function(){
    slides.eq(index).fadeOut(1000);
    index = (index + 1) % slides.length;
    slides.eq(index).fadeIn(1000);
  }, 4000);
});
