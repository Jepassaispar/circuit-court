var schedules = document.querySelector(".schedules");
var closePopUps = document.querySelector(".closePopUps")
var popuptextId = document.getElementById(`popuptext`)
var popupId = document.getElementById(`popup`);

function toggleVisibility() {
    popupId.classList.toggle('show')
    popuptextId.classList.toggle('show')
}

schedules.onclick = function toggleVisibility() {
    popupId.classList.toggle('show')
    popuptextId.classList.toggle('show')
}

closePopUps.onclick = function toggleVisibility() {
    popupId.classList.toggle('show')
    popuptextId.classList.toggle('show')
}