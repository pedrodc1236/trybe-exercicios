/* let captureBody = document.getElementsByTagName("body")[0];

function backgroundColorScreen(nameBackgroundColor) {
  let captureFirstButton = document.getElementById("backgroundColorScreen");

  captureFirstButton.addEventListener("click", function () {
    captureBody.style.backgroundColor = nameBackgroundColor;
  });
}

backgroundColorScreen("green");
console.log(captureFirstButton) */

// Botoes de fundo de tela

//Cor de fundo da tela

let captureBody = document.querySelector("body");

const captureButtons = document.querySelectorAll(".backgroundScreen");

const arrayBackgroundColors = ["green", "white", "purple"];

for (let index = 0; index < captureButtons.length; index += 1) {
  captureButtons[index].addEventListener("click", function () {
    captureBody.style.backgroundColor = arrayBackgroundColors[index];
  });
}

//Cor do texto

const arrayColorText = ["purple", "red", "brown"];

const captureButtons2 = document.querySelectorAll(".colorText");

for (let index = 0; index < captureButtons2.length; index += 1) {
  captureButtons2[index].addEventListener("click", function () {
    captureBody.style.color = arrayColorText[index];
  });
}


