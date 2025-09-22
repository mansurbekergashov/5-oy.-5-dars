import { BASE_URL } from "./constants.js";
import { elDetailsDescription, elDetailsTitle, elDetailsTrim, elDetailsGeneration, elDetailsYear, elDetailsColor, elDetailsColorName, elDetailsCategory, elDetailsDoorCount, elDetailsSeatCount, elDetailsMaxSpeed, elDdetailsAcceleration, elDetailsEngine, elDetailsHorsePower, elDetailsFuelType, elDetailsCountry, elDetailsCity, elDetailsHighway, elDetailsCombined, elDetailsWrapper, elDetailsLoading, } from "./html-selection.js";

let title;

function init() {
    loading(true)
    const id = new URLSearchParams(location.search).get("id");
    fetch(BASE_URL + "/cars" + `/${id}`)
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            displayDetails(res)
        })
        .catch(() => {

        })
        .finally(() => {
            loading(false)
        })
}


function loading(bool) {
    if (bool) {
        document.title = "Yuklanmoqda...";
        elDetailsLoading.classList.remove("hidden");
    } else {
        document.title = title;
        elDetailsWrapper.classList.remove("scale-0");
        elDetailsLoading.classList.add("hidden");
    }
}


function displayDetails(carData) {
    title = carData.name;
    elDetailsTitle.innerText = carData.name;
    elDetailsDescription.innerText = carData.description;
    elDetailsTrim.innerText = carData.trim;

    elDetailsGeneration.innerText = carData.generation;
    elDetailsYear.innerText = carData.year;
    elDetailsColor.style.backgroundColor = carData.color;
    elDetailsColorName.innerText = carData.colorName;
    elDetailsCategory.innerText = carData.category;
    elDetailsDoorCount.innerText = carData.doorCount;
    elDetailsSeatCount.innerText = carData.seatCount;
    elDetailsMaxSpeed.innerText = carData.maxSpeed;
    elDdetailsAcceleration.innerText = carData.acceleration;
    elDetailsEngine.innerText = carData.engine;
    elDetailsHorsePower.innerText = carData.horsepower;
    elDetailsFuelType.innerText = carData.fuelType;
    elDetailsCountry.innerText = carData.country;

    elDetailsCity.innerText = carData?.fuelConsumption?.city;
    elDetailsHighway.innerText = carData?.fuelConsumption?.highway;
    elDetailsCombined.innerText = carData?.fuelConsumption?.combined;

}




init()









