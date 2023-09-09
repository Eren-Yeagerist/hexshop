const navbarList = document.querySelector(".navbar-list");

document.getElementById("menu").onclick = () => {
  navbarList.classList.toggle("active");
};

const hamburger = document.getElementById("menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarList.contains(e.target)) {
    navbarList.classList.remove("active");
  }
});
