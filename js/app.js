// active navbar
window.onscroll = () => {
  let navbar = document.getElementById("topBar");
  let scroll = scrollY;
  if (scroll >= 50) {
    navbar.classList.add("barActive");
  } else {
    navbar.classList.remove("barActive");
  }
};

// counterup home

function counter() {
  let counter = 0;
  let interval = setInterval(counting, 0.001);
  let interval2 = setInterval(counting2, 0.001);
  let interval3 = setInterval(counting3, 0.001);
  function counting() {
    document.getElementById("counting").textContent = counter;
    counter = counter + 5092237;
    if (counter >= 509220314) {
      clearInterval(interval);
    }
  }
  function counting2() {
    document.getElementById("counting2").textContent = counter;
    counter = counter + 500000;
    if (counter >= 450500862) {
      clearInterval(interval2);
    }
  }
  function counting3() {
    document.getElementById("counting3").textContent = counter;
    counter = counter + 500000;
    if (counter >= 450500862) {
      clearInterval(interval3);
    }
  }
}
counter();
