  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 150) {
      navbar.classList.add("navbar-fixa");
    } else {
      navbar.classList.remove("navbar-fixa");
    }
  });