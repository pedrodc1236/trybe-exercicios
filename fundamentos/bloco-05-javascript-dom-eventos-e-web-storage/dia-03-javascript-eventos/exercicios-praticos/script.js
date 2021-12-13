function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

/*   Exercício 1:

  O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
  Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
  Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
  Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li> */

const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

let captureBody = document.getElementsByTagName("body")[0];

function daysCalendary() {
  let captureUl = document.querySelector("#days");

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let childsUl = document.createElement("li");
    captureUl.appendChild(childsUl);
    childsUl.classList.add("day");
    childsUl.innerHTML = dezDaysList[index];

    if (
      dezDaysList[index] === 24 ||
      dezDaysList[index] === 25 ||
      dezDaysList[index] === 31
    ) {
      childsUl.classList.add("holiday");
    }
    if (
      dezDaysList[index] === 4 ||
      dezDaysList[index] === 11 ||
      dezDaysList[index] === 18 ||
      dezDaysList[index] === 25
    ) {
      childsUl.classList.add("friday");
    }
  }
}
daysCalendary();

/* Exercício 2:
Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
Adicione a este botão a ID "btn-holiday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" . */

let captureDivButton = document.querySelector(".buttons-container");

function createButton(nameButton) {
  let btton = document.createElement("button");
  captureDivButton.appendChild(btton);
  btton.id = "btn-holiday";
  btton.innerHTML = nameButton;
}
createButton("Feriados");

/* Exercício 3:
Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" . */

let captureHoliday = document.querySelectorAll(".holiday");

let captureButton = document.querySelector("#btn-holiday");

captureButton.addEventListener("click", function () {
  for (let index = 0; index < captureHoliday.length; index += 1) {
    if (captureHoliday[index].style.backgroundColor === "") {
      captureHoliday[index].style.backgroundColor = "rgb(76,164,109)";
    } else {
      captureHoliday[index].style.backgroundColor = "";
    }
  }
});

/* Exercício 4:
Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
Adicione a este botão o ID "btn-friday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" . */

function createButton2(nameButton2) {
  let newBtton = document.createElement("button");
  captureDivButton.appendChild(newBtton);
  newBtton.id = "btn-friday";
  newBtton.innerHTML = nameButton2;
}

createButton2("Sexta-Feira");

/* Exercício 5:
Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias. */

function eventProcess(arrayFridays) {
  let captureButton2 = document.querySelector("#btn-friday");
  let captureFriday = document.querySelectorAll(".friday");

  captureButton2.addEventListener("click", function () {
    for (let index = 0; index < captureFriday.length; index += 1) {
      if (captureFriday[index].innerHTML !== "Sextou") {
        captureFriday[index].innerHTML = "Sextou";
      } else {
        captureFriday[index].innerHTML = arrayFridays[index];
      }
    }
  });
}

let fridays = [4, 11, 18, 25];

eventProcess(fridays);

/* Exercício 6:
Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

Dica - Propriedade: event.target . */

let captureDezembro = document.querySelector("#month");

captureDezembro.addEventListener("mouseenter", zoom1);

function zoom1(event) {
  event.target.style.fontSize = "40px";
}

captureDezembro.addEventListener("mouseleave", zoom2);

function zoom2(event) {
  event.target.style.fontSize = "20px";
}

/* Exercício 7:
Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" . */

let captureMyTasks = document.querySelector(".my-tasks");

function addTasks(nameTasks) {
  let newSpan = document.createElement("span");
  captureMyTasks.appendChild(newSpan);
  newSpan.innerHTML = nameTasks;
}

addTasks("Estudar");

/* Exercício 8:
Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" . */

function createNewDiv(nameColor) {
  let newDiv = document.createElement("div");
  captureMyTasks.appendChild(newDiv);
  newDiv.classList.add("task");
  newDiv.style.backgroundColor = nameColor;
}

createNewDiv("rgb(76,164,109)");

/* Exercício 9:
Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.
 */

let captureNewDiv = captureMyTasks.lastElementChild;

captureNewDiv.addEventListener("click", selectedTaskColor);

function selectedTaskColor(event) {
  if (event.target.className === "task") {
    event.target.className = "task-selected";
  } else {
    event.target.className = "task";
  }
}

/* Exercício 10:
Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .
 */

function clickDay() {
  let captureAllDays = document.querySelectorAll(".day");
  let captureTaskSelected = document.getElementsByClassName("task-selected");
  let captureColor = captureNewDiv.style.backgroundColor;

  for (let index = 0; index < captureAllDays.length; index += 1) {
    captureAllDays[index].addEventListener("click", function (event) {
      let daysColors = event.target.style.backgroundColor;
      if (daysColors !== captureColor && captureTaskSelected.length > 0) {
        event.target.style.backgroundColor = captureColor;
      } else if (daysColors === captureColor) {
        event.target.style.backgroundColor = "rgb(239,239,239)";
      }
    });
  }
}

clickDay();

/* Bônus:
Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
Ao pressionar a tecla "enter" o evento também deverá ser disparado.
Dica - Propriedade: key . */

function addAppointments () {
  let captureAppointment = document.querySelector("#task-input");
  let captureButtonAppointment = document.querySelector("#btn-add");
  let captureListAdd = document.querySelector(".task-list");

  captureButtonAppointment.addEventListener('click', function(){
      if (captureAppointment.value.length > 0) {
        let newAppointment = document.createElement('li');
        newAppointment.innerText = captureAppointment.value;
        
        captureListAdd.appendChild(newAppointment);
        captureAppointment.value = '';
      } else {
        alert("Para adicionar um compromisso é necessário que o digite no campo específico!")
      } 
  }) 

    captureAppointment.addEventListener('keyup', function(e){
      if(e.key === 'Enter' && captureAppointment.value.length > 0) {
        let newAppointment = document.createElement('li');
        newAppointment.innerText = captureAppointment.value;

        captureListAdd.appendChild(newAppointment); 
      } 
    })
}

addAppointments();


