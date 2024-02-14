const erlaubteDaten = {
    "hallo": true,
    "welt": true,
    "openai": true
};

function checkInput() {
    const eingabe = document.getElementById("inputField").value.toLowerCase();
    if (erlaubteDaten[eingabe]) {
        window.location.href = "index.html";
    } else {
        document.getElementById("result").textContent = "Die Eingabe stimmt nicht überein.";
    }
}