window.addEventListener("scroll", function () {
    var header = document.querySelector(".position-nav");
    header.classList.toggle("sticky", window.scrollY > 450);
});


const li = document.querySelectorAll(".links");
const sec = document.querySelectorAll("section");

function activeMenu() {
    let len = sec.length;
    while (--len && window.scrollY + 97 < sec[len].offsetTop) {}
    li.forEach((li) => li.classList.remove("active"));
    li[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);
  

