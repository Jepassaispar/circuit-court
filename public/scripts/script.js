const links = document.querySelectorAll(".link");

for (var i = 0; i < links.length; i++) {
  if (window.location.href === links[i].href) {
    console.log(window.location.href);
    console.log(i);
    links[i].classList.toggle("is-active");
  }
}
