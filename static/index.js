const DISCORD = "floncdev";
const EMAIL = "flonc@flonc.dev";

const notification = document.getElementById("notification");

function notify() {
    notification.classList.remove("flash");
    notification.style.animation = null;
    notification.offsetWidth;
    notification.classList.add("flash");
}

document.getElementById("discord")
    .addEventListener("click", () => {
        notification.classList.remove("flash");
        navigator.clipboard.writeText(DISCORD);
        notify();
    });

document.getElementById("mail")
    .addEventListener("click", () => {
        notification.classList.remove("flash");
        navigator.clipboard.writeText(EMAIL);
        notify();
    })