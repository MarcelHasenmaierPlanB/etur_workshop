const erlaubteDaten = {
    "hallo": true,
    "welt": true,
    "openai": true
};

function login() {
    const eingabe = document.getElementById("customerNumber").value.toLowerCase();
    if (erlaubteDaten[eingabe]) {
        window.location.href = "index.html";
    } else {
        document.getElementById("error-message").textContent = "Die Eingabe stimmt nicht überein.";
    }
}