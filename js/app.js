import { BASE_URL, LOADER_COUNT } from "./constants.js";
import { elCardLoaders, elCardSkeletonTemplate, elInfoModal, elLoginLogoutBtn, elModalLoginButton } from "./html-selection.js";
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


elModalLoginButton.addEventListener("click", ()=>{
    location.href = "/pages/register.html";

})