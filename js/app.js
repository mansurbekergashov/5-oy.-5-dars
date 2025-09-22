import { BASE_URL, LOADER_COUNT } from "./constants.js";
import { elCardContainer, elCardLoaders, elCardSkeletonTemplate, elCategorySelect, elColorSelect, elCountrySelect, elFuelTypeSelect, elInfoModal, elLoginLogoutBtn, elModalLoginButton } from "./html-selection.js";
import { ui } from "./ui.js";
import { checkAuth } from "./check-auth.js";


if (checkAuth()) {
    elLoginLogoutBtn.innerText = "⬅ Tizimdan chiqish";
} else {
    elLoginLogoutBtn.innerText = "Tizimga kirish ➡";
}


function init() {
    loader(true);
    fetch(BASE_URL + "/cars")
        .then((res) => {
            return res.json();

        })
        .then((res) => {
            ui(res.data);

        })
        .catch(() => {

        })
        .finally(() => {
            loader(false)

        })
}


function loader(bool) {
    if (bool) {
        elCardLoaders.innerHTML = "";
        elCardLoaders.classList.remove("hidden");
        let i = 0;
        while (true) {
            if (i === LOADER_COUNT) break
            const clone = elCardSkeletonTemplate.cloneNode(true).content;
            elCardLoaders.append(clone);
            i++;
        }
    } else {
        elCardLoaders.classList.add("hidden");
    }
}



// CRUD

document.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("js-delete")) {
        if (checkAuth()) {
        }
        else {
            elInfoModal.showModal()
        }
    }

    // Edit
    if (evt.target.classList.contains("js-edit")) {
        if (checkAuth()) {

        }
        else {
            elInfoModal.showModal()
        }

    }

})


// Start
init();


// EVENTS
elLoginLogoutBtn.addEventListener("click", () => {
    if (checkAuth()) {
        localStorage.removeItem("token");
    } else {
        location.href = "/pages/register.html"
    }

    location.reload();

});


elModalLoginButton.addEventListener("click", () => {
    location.href = "/pages/register.html";

})



// FILTERS
elCountrySelect.onchange = function (event) {
    const selectedCountry = event.target.value;
    elCardContainer.innerHTML = "";
    loader(true);
    if (selectedCountry !== "all") {
        return fetch(BASE_URL + `/cars?country=${selectedCountry}`)
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                return ui(res.data);
            })
            .finally(() => {
                loader(false)
            })
    }
    else {
        fetch(BASE_URL + `/cars`)
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                return ui(res.data);
            })
            .finally(() => {
                loader(false)
            })

    }
}

elCategorySelect.onchange = function (evt) {
    const selectedCategory = evt.target.value;
    elCardContainer.innerHTML = "";
    loader(true);
    if (selectedCategory !== "all") {
        return fetch(BASE_URL + `/cars?category=${selectedCategory}`)
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                return ui(res.data);
            })
            .finally(() => {
                loader(false)
            })
    }
    else {
        fetch(BASE_URL + `/cars`)
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                return ui(res.data);
            })
            .finally(() => {
                loader(false)
            })

    }
}

elColorSelect.onchange = function (event) {
    const selectedColor = event.target.value;
    elCardContainer.innerHTML = "";
    loader(true);
    if (selectedColor !== "all") {
        return fetch(BASE_URL + `/cars?colorName=${selectedColor}`)
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                return ui(res.data);
            })
            .finally(() => {
                loader(false)
            })
    }
    else {
        fetch(BASE_URL + `/cars`)
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                return ui(res.data);
            })
            .finally(() => {
                loader(false)
            })

    }
}

elFuelTypeSelect.onchange = function (event) {
    const selectedFuelType = event.target.value;
    elCardContainer.innerHTML = "";
    loader(true);
    if (selectedFuelType !== "all") {
        return fetch(BASE_URL + `/cars?fuelType=${selectedFuelType}`)
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                return ui(res.data);
            })
            .finally(() => {
                loader(false)
            })
    }
    else {
        fetch(BASE_URL + `/cars`)
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                return ui(res.data);
            })
            .finally(() => {
                loader(false)
            })

    }
}