import {
  setListeners,
  popUpsListeners,
  placeBusinesses,
  markers
} from "./app.js";

const checkBoxesZipcode = document.querySelectorAll("[name='zipcode']");
const checkBoxesKoB = document.querySelectorAll("[name='kindofBusiness']");
const businessContainer = document.querySelector(".list");

function filter(checkboxes, targetAttribute, payloadName) {
  checkboxes.forEach(checkbox => {
    checkbox.onclick = function(event) {
      const checked = [];
      checkboxes.forEach(input => {
        if (input.checked === true) {
          checked.push(input.getAttribute(targetAttribute));
        }
      });
      const payload = {};
      payload[payloadName] = checked;

      axios
        .post("http://localhost:2000/filter-mainPage", payload)
        .then(myAPIRes => {
          const filteredZipcode = myAPIRes.data;

          businessContainer.innerHTML = "";
          filteredZipcode.forEach((business, i) => {
            businessContainer.innerHTML += ` 
               <div class="fullBusiness">
            <div class="img-container">
                <img class="img" src="${business.image}" alt="coucou">
            </div>
            <div class="business">
                <div class="businessType">${business.business}</div>
                <div class="name">${business.name}</div>
                <p class="adresse">Adresse : ${business.lieu.adress} <br> ${
              business.lieu.zipcode
            } Paris </p>
                <div class="popUpParentDiv">
                    <button class="schedules popup" href="">Horaires</button>
                    <a href="/mainPage/${business._id}">See more...</a>
                    <div id="popup${i}" class="popup">
                        <span class="popuptext" id="popuptext${i}">
                            <button id="closePopUp${i}" class="closePopUps">close</button>
                            <div class="weekContainer">
                                <li class="day"><span>Lundi : </span>${business.ouverture &&
                                  business.ouverture.Lundi}</li>
                                <li class="day"><span>Mardi : </span>${business.ouverture &&
                                  business.ouverture.Mardi}</li>
                                <li class="day"><span>Mercredi : </span>${business.ouverture &&
                                  business.ouverture.Mercredi}</li>
                                <li class="day"><span>Jeudi : </span>${business.ouverture &&
                                  business.ouverture.Jeudi}</li>
                                <li class="day"><span>Vendredi : </span>${business.ouverture &&
                                  business.ouverture.Vendredi}</li>
                                <li class="day"><span>Samedi : </span>${business.ouverture &&
                                  business.ouverture.Samedi}</li>
                                <li class="day"><span>Dimanche : </span>${business.ouverture &&
                                  business.ouverture.Dimanche}</li>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        `;
            setListeners();
            popUpsListeners();
            markers.forEach(marker => marker.setMap(null));
          });
          placeBusinesses(filteredZipcode);
        })
        .catch(err => console.log(err));
    };
  });
}

filter(checkBoxesZipcode, "data-zipcode", "zipcode");
filter(checkBoxesKoB, "data-kindofBusiness", "kob");
// function replaceInnerHtml()
