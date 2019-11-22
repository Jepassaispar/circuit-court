const links = document.querySelectorAll(".link");
const btn = document.querySelector("#burgerMenuIcon");
console.log("coucou", btn)
const zipcode = document.querySelectorAll(".zipcode");
const kob = document.querySelectorAll(".kindofBusiness");
const sideBar = document.querySelector(".sideMenuContainer")

for (var i = 0; i < links.length; i++) {
  if (window.location.href === links[i].href) {
    links[i].classList.toggle("is-active");
  }
}

btn.onclick = function () {
  sideBar.classList.toggle("visible");
  sideBar.classList.toggle("hidden");
}