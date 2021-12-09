let captureBody = document.querySelector("body");

window.onload = function () {
  let colorBody = localStorage.getItem("backgroundScreen");
  captureBody.style.backgroundColor = colorBody;
};

// Botoes de fundo de tela

//Cor de fundo da tela

const captureButtons = document.querySelectorAll(".backgroundScreen");

const arrayBackgroundColors = ["#7C9772", "#C7D1CB", "#F3F9D2"];

for (let index = 0; index < captureButtons.length; index += 1) {
  captureButtons[index].addEventListener("click", function () {
    captureBody.style.backgroundColor = arrayBackgroundColors[index];

    localStorage.setItem("backgroundScreen", arrayBackgroundColors[index]);
  });
}

//Cor do texto

const arrayColorText = ["#173753", "#B8B8F3", "#EBEBEB"];

const captureButtons2 = document.querySelectorAll(".colorText");

for (let index = 0; index < captureButtons2.length; index += 1) {
  captureButtons2[index].addEventListener("click", function () {
    captureBody.style.color = arrayColorText[index];
  });
}

//Tamanho da fonte

const arrayFontSize = ["12px", "14px", "16px"];

const captureButtons3 = document.querySelectorAll(".fontSize");

for (let index = 0; index < captureButtons3.length; index += 1) {
  captureButtons3[index].addEventListener("click", function () {
    captureBody.style.fontSize = arrayFontSize[index];  
  });
}

//Espaçamento entre as linhas

const arrayLineHeight = ["25px", "30px", "35px"];

const captureButtons4 = document.querySelectorAll(".lineHeight");

for(let index = 0; index < captureButtons4.length; index += 1) {
    captureButtons4[index].addEventListener("click", function () {
        captureBody.style.lineHeight = arrayLineHeight[index];        
    })
}

//Forte do texto

const arrayFontFamily = ["sans-serif", "monospace","inherit"];

const captureButtons5 = document.querySelectorAll(".fontFamily");

for(let index = 0; index < captureButtons5.length; index += 1) {
    captureButtons5[index].addEventListener("click", function(){
        captureBody.style.fontFamily = arrayFontFamily[index];
    })
}

// falta fazer o localstarage em 4 arquivos



