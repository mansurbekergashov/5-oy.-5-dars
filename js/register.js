import { BASE_URL } from "./constants.js";
import { elRegisterForm } from "./html-selection.js";
const elMessageBox = document.getElementById("messageBox");


function register(user) {
    fetch(BASE_URL + "/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    })
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            localStorage.setItem("token", res.access_token)
            location.href = "./pages/login.html"
        })
        .catch(() => {
        })
        .finally(() => { })
}



function validation(user) {
    if (user.username.trim() === "") {
        return {
            target: "username",
            message: "Iltimos login kiriting"
        }
    }

    if (user.password.trim() === "") {
        return {
            target: "password",
            message: "Iltimos parol kiriting"
        }
    }

    return false;
}




elRegisterForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const result = {}

    formData.forEach((value, key) => {
        result[key] = value

    })


    const check = validation(result);

    if (check) {
        elRegisterForm[check.target].focus();
        const p = document.createElement("p");
        p.innerText = check.message;
        p.style.cssText = `
            text-align: center;
            font-size: 18px;
            color: white;
            background-color: #9c2727;
            border-radius: 6px;

        `

        elMessageBox.append(p);

        setTimeout(() => {
            p.remove()

        }, 2000);
    } else {
        register(result)
    }



})