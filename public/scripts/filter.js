import { setListeners, popUpsListeners, placeBusinesses } from "./app.js";
// import { get } from "mongoose";

const checkBoxes = document.querySelectorAll("[name='zipcode']");
const businessContainer = document.querySelector(".list");

checkBoxes.forEach(checkbox => {
  checkbox.onclick = function(event) {
    const checkedZipcode = [];
    checkBoxes.forEach(input => {
      if (input.checked === true) {
        checkedZipcode.push(input.getAttribute("data-zipcode"));
      }
    });
    axios
      .post("http://localhost:2000/filter-mainPage", {
        zipcode: checkedZipcode
      })
      .then(myAPIRes => {
        const filteredZipcode = myAPIRes.data;

        businessContainer.innerHTML = "";
        filteredZipcode.forEach((business, i) => {
          businessContainer.innerHTML += ` <div>
          <div class="name">${business.name}</div>

          <p>Adresse : ${business.lieu.adress} <br> ${business.lieu.zipcode} Paris </p>
          <div class="popUpParentDiv">
              <button class="schedules popup" >Horaires</button>
              <div id="popup${i}" class="popup">
                  <span class="popuptext" id="popuptext${i}">
                      <button id="closePopUp${i}" class="closePopUps">close</button>
                      <div class="weekContainer">
                          <li class="day"><span>Lundi : </span>${business.ouverture.Lundi}</li>
                          <li class="day"><span>Mardi : </span>${business.ouverture.Mardi}</li>
                          <li class="day"><span>Mercredi : </span>${business.ouverture.Mercredi}</li>
                          <li class="day"><span>Jeudi : </span>${business.ouverture.Jeudi}</li>
                          <li class="day"><span>Vendredi : </span>${business.ouverture.Vendredi}</li>
                          <li class="day"><span>Samedi : </span>${business.ouverture.Samedi}</li>
                          <li class="day"><span>Dimanche : </span>${business.ouverture.Dimanche}</li>
                      </div>
                  </span>
              </div>
          </div>
      </div>
            `;
          setListeners();
          popUpsListeners();
        });
      })
      .catch(err => console.log(err));
  };
});
