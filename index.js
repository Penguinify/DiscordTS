background = document.getElementById("background");
y = 0;

function onScroll() {
  y = window.scrollY;
  
  background.style.backgroundPosition = "0px " + y * 0.8 + "px";
  console.log(y)
}

// On Scroll Move
window.addEventListener("scroll", onScroll);