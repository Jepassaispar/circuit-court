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

btn.onclick = function() {
  for (var j = 0; j < zipcode.length; j++) {
    if ((zipcode[j].style.visibility = "hidden")) {
      zipcode[j].style.visibility = "visible";
      kob[0].style.visibility = "visible";
      kob[1].style.visibility = "visible";
      kob[2].style.visibility = "visible";
    } else {
      kob[0].style.visibility = "hidden";
      kob[1].style.visibility = "hidden";
      kob[2].style.visibility = "hidden";
    }
  }
};
