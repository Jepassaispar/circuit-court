var mainNav = document.getElementById("mainNav");
var logoPart1 = document.getElementById("logoPart1");
var logoPart2 = document.getElementById("logoPart2");
var link = document.querySelectorAll("#links a")

window.addEventListener("scroll", function toggleNavVisibility() {
    mainNav.classList.add("mainNavVisible");
    logoPart1.classList.add("colorBlack");
    logoPart2.classList.add("colorBlack");
    link.forEach(l => {
        l.classList.add("colorBlack");
    })
})