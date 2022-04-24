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
