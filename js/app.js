import { BASE_URL, LOADER_COUNT } from "./constants.js";
import { elCardContainer, elCardLoaders, elCardSkeletonTemplate, elClearButton, elFilterLoader, elFilterSelectValue, elFilterType, elFilterZone, elInfoModal, elLoginLogoutBtn, elModalLoginButton } from "./html-selection.js";
import { ui } from "./ui.js";
import { checkAuth } from "./check-auth.js";
import { filterData } from "./filter.js";

let selectedFIlterType = null
let selectedFIlterValue = null
let filterDataList = null


if (checkAuth()) {
    elLoginLogoutBtn.innerText = "⬅ Tizimdan chiqish";
} else {
    elLoginLogoutBtn.innerText = "Tizimga kirish ➡";
}


function init(query) {
    loader(true);
    fetch(BASE_URL + `/cars${query ? query : ""}`)
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
            const token = localStorage.getItem("token")
            fetch(BASE_URL + `/cars/${evt.target.id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((res) => {
                    return res.text()
                })
                .then((res) => {
                    alert(res)
                    elCardContainer.innerHTML = ""
                    init()
                })
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


});

elModalLoginButton.addEventListener("click", () => {
    location.href = "/pages/register.html";

})

elFilterType.addEventListener("change", (e) => {
    if (filterDataList) {
        selectedFIlterType = e.target[e.target.selectedIndex].value;
        const list = filterData(filterDataList, selectedFIlterType);
        displayFilterData(list)
        elFilterSelectValue.classList.remove("hidden")

    }

})

elFilterSelectValue.addEventListener("change", (e) => {
    selectedFIlterValue = e.target[e.target.selectedIndex].value
    elCardContainer.innerHTML = "";
    init(`?${selectedFIlterType} = ${selectedFIlterValue}`)
})

elClearButton.addEventListener("click", () => {
    elCardContainer.innerHTML = ""
    init()
})


// FILTERS

function dataForFilter() {
    elFilterLoader.classList.remove("hidden")
    elFilterZone.classList.add("hidden")
    fetch(BASE_URL + "/cars")
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            filterDataList = res.data
        })
        .catch(() => {

        })
        .finally(() => {
            elFilterLoader.classList.add("hidden")
            elFilterZone.classList.remove("hidden")
        })
}

dataForFilter()

function displayFilterData(array) {
    elFilterSelectValue.innerHTML = ""
    const option = document.createElement("option")
    option.disabled = true
    option.innerText = "All"
    elFilterSelectValue.append(option)
    elFilterSelectValue[0].selected = true
    array.forEach((el) => {
        const option = document.createElement("option")
        option.innerHTML = el;
        option.value = el;
        elFilterSelectValue.appendChild(option)

    });
}

