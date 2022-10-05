function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.bottom >= 10 &&
    rect.right >= 10 &&
    rect.top <= (window.innerHeight - 10 || document.documentElement.clientHeight - 10) &&
    rect.left <= (window.innerWidth - 10 || document.documentElement.clientWidth - 10)
  );
}

var animation;
  
export function init() {
  animation = document.querySelectorAll(".viewport-animation");
  for(var i = 0; i < animation.length; i++) {
    if(!(isInViewport(animation[i]))) {
      animation[i].classList.add("viewport-animation-hidden");
    }
  }
}
  
function viewport() {      
  var hidden = document.querySelectorAll(".viewport-animation.viewport-animation-hidden");
  var elementsToShow = [];

  var i;  
  for(i = 0; i < hidden.length; i++) {
    if(isInViewport(hidden[i])) {
      elementsToShow.push(hidden[i]);
    }
  }
  
  for(i = 0; i < elementsToShow.length; i++) {
    setTimeout(function() {
      var element = elementsToShow.shift();
      element.classList.add("viewport-animation-shown");
      element.classList.remove("viewport-animation-hidden");
    }, 100 * i + 100);
  }
 }
  
 window.addEventListener("load", viewport);
window.addEventListener("scroll", viewport);
  