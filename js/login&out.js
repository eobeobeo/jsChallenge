const loginForm = document.getElementById("loginForm");
const loginInput = document.querySelector("#loginForm input");
const greeting = document.getElementById("greeting");

const todo = document.getElementById("todo");

const HIDDEN_CLASSNAME = "hidden";
const SHOW_CLASSNAME = "show";
const USERNAME_KEY = "username";

function handleLogIn(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    todo.classList.remove(HIDDEN_CLASSNAME);

    const username = loginInput.value;

    localStorage.setItem(USERNAME_KEY, loginInput.value);
    greetUser(username);
}

function greetUser(username) {
    greeting.innerHTML = `Hello, <strong>${username}</strong>`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.classList.add(SHOW_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", handleLogIn);
} else {
    todo.classList.remove(HIDDEN_CLASSNAME);
    todo.classList.add(SHOW_CLASSNAME);

    greetUser(savedUsername);
}

/////////////////////////////////////////////////////////////////////

const settings = document.querySelector("#settings");
const settingIcon = document.querySelector("#settingIcon");
const settingBox = document.querySelector("#settingBox");
const loginName = document.querySelector("#loginName");
const logoutBtn = document.querySelector("#logoutBtn");

const popUp = document.querySelector("#popUp");
const logoutBtn2 = document.querySelector("#logoutBtn2");

function settingPopUp(event) {
    event.preventDefault();
    settingBox.classList.remove(HIDDEN_CLASSNAME);
    settingBox.classList.add(SHOW_CLASSNAME);

    let username = localStorage.getItem(USERNAME_KEY);

    if (username === null) {
        logoutBtn.classList.add(HIDDEN_CLASSNAME);
        loginName.innerHTML = `<span style="color: #767676">Please Login</span>`;
    } else {
        logoutBtn.classList.remove(HIDDEN_CLASSNAME);
        loginName.innerText = `${username}`;
    }
}

function handleLogOut(event) {
    event.preventDefault();

    greeting.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    settingBox.classList.add(HIDDEN_CLASSNAME);
    popUp.classList.add(HIDDEN_CLASSNAME);
    todo.classList.add(HIDDEN_CLASSNAME);

    localStorage.clear();
}

settingIcon.addEventListener("click", (event) => {
    event.preventDefault(event);
});
settingIcon.addEventListener("click", settingPopUp);
settings.addEventListener("mouseleave", () => {
    settingBox.classList.add(HIDDEN_CLASSNAME);
});
logoutBtn.addEventListener("click", () => {
    popUp.classList.remove(HIDDEN_CLASSNAME);
});

logoutBtn2.addEventListener("click", handleLogOut);
popUp.addEventListener("mouseleave", () => {
    popUp.classList.add(HIDDEN_CLASSNAME);
});
