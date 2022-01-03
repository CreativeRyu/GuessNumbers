var randomNumber;
var upperLimit = 100;
var guessedNumber;
var tries = 0;

function startGuessNumbers() {
    // if Kontrolstrukturen und Schleifen

    // Der Computer denkt sich eine random Zahl aus
    randomNumber = Math.random() * upperLimit;
    randomNumber = Math.round(randomNumber + 0.5);

    document.getElementById("gameText").innerHTML = "Rate eine Zahl zwischen 0 und 100";
}

function checkInput() {

    if (randomNumber == null) {
        return;
    }

    guessedNumber = document.getElementById("input").value;
    document.getElementById("Frage").innerHTML = guessedNumber;

    if (guessedNumber > randomNumber) {
        document.getElementById("gameText").innerHTML = "Deine geratene Zahl ist zu groß";
        document.getElementById("additionalGameText").innerHTML = "Rate weiter";

    } else if (guessedNumber < randomNumber) {
        document.getElementById("gameText").innerHTML = "Deine geratene Zahl ist zu klein";
        document.getElementById("additionalGameText").innerHTML = "Rate weiter";
    }
    tries++;

    if (guessedNumber == randomNumber) {
        document.getElementById("Frage").innerHTML = "Gratulation";
        document.getElementById("gameText").innerHTML = "Zahl erraten, du hast " + tries + " Versuche benötigt.";
        document.getElementById("additionalGameText").innerHTML = "GAME OVER";
    }

    document.getElementById("input").value = "";

    return false;
}