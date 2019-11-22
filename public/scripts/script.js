const links = document.querySelectorAll(".link");
const btn = document.querySelector(".filter");
const zipcode = document.querySelectorAll(".zipcode");
const kob = document.querySelectorAll(".kindofBusiness");
console.log(zipcode);

for (var i = 0; i < links.length; i++) {
  if (window.location.href === links[i].href) {
    links[i].classList.toggle("is-active");
  }
}

btn.onclick = function () {
  zipcode.forEach(zip => {
    zip.classList.toggle("visible");
    zip.classList.toggle("hidden");
  });
  kob.forEach(k => {
    k.classList.toggle("visible");
    k.classList.toggle("hidden");
  })
}