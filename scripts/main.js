const netflix_open_btn = document.querySelector(".netflix-open-btn");
const netflix_close_btn = document.querySelector(".netflix-close-btn");

// Using querySelectorAll since there are multiple elements that share the same class name
const netflix_nav = document.querySelectorAll(".netflix-nav");

netflix_open_btn.onclick = function () {
  // Upon clicking the hamburger menu, add the visible class to each element in the NodeList matched using the querySelectorAll
  for (let i = 0; i < netflix_nav.length; i++) {
    netflix_nav[i].classList.add("visible");
  }
};

netflix_close_btn.onclick = function () {
  //Upon clicking the close menu button, remove the visible class from each element in the NodeList matched using the querySelectorAll
  for (let i = 0; i < netflix_nav.length; i++) {
    netflix_nav[i].classList.remove("visible");
  }
};
