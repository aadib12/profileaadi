var getParallaxContainer = document.querySelector(".parallax-container");
var getParallaxContent = document.querySelector(".parallax-content");

getParallaxContainer.addEventListener("mousemove", function(e) {
  let x = e.pageX / window.innerWidth;
  let y = e.pageY / window.innerHeight;
  
  this.style.transform = `translate(${x * 5}%, ${y * 5}%)`;
  getParallaxContent.style.transform = `translate(${-x * 8}%, ${-y * 8}%)`;
})