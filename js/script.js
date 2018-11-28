var element = document.querySelector('#welcome-section');
var navToggle = document.querySelector('.nav-toggle');
var nav = document.querySelectorAll('ul a');
// var trigger = 

var scroll = new SmoothScroll('a[href*="#"]',{
    speed: 1000,
    clip: true,
    offset: 50,
  });
  
 
  window.onscroll = function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = element.scrollHeight;

    if(y_scroll_pos > scroll_pos_test-20) {
      navToggle.classList.add('flex-it');
    //   for(var i = 0; i<nav.length; i++){
    //     nav[i].style.color='black';
    //   }
      // nav.style.color="black";
    }
    else
    {
      navToggle.classList.remove('flex-it');
    //   for(var i = 0; i<nav.length; i++){
    //     nav[i].style.color='white';
    //   }
      // nav.style.color="white";
    }
};