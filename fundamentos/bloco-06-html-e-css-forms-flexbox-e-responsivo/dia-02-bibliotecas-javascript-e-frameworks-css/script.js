//Gerando Estados
function createStates () {
    let states = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
    let captureSelect = document.querySelector("#select-estados")
    
    for(let index = 0; index < states.length; index += 1) {
        let options = document.createElement("option");
        options.value = states[index];
        options.innerText = states[index]
        captureSelect.appendChild(options)
    }
}
createStates()

//Formato da data de início
let captureDate = document.querySelector("#input-data")

function startDate () {
   
    let dateValue = captureDate.value;
    let day = dateValue[0] + dateValue[1];
    let month = dateValue[2] + dateValue[3];
    let year = dateValue[4] + dateValue[5] + dateValue[6] + dateValue[7];

     if(day < 0 || day > 31) {
        alert('Invalid day')
        } else if (month < 1 || month > 12) {
            alert('Invalid month') 
        } else if (year < 0) {
            alert('Invalid year') 
        } else {
            let concatenation = day + "/" + month + "/" + year;
            captureDate.value = concatenation;     
        }
}

captureDate.addEventListener("keyup", function(event){
    if (event.key === "Enter") {
        startDate()   
    }    
})

//Botão gerar o resultado do formúlario

const captureButton = document.querySelector("#btn");
const formResume = document.querySelector("#form-resume")

function createTitle (){
    let h1Text = 'Fórmulario Pessoal'
    let createText = document.createElement('h1')
    createText.innerHTML= h1Text
    formResume.appendChild(createText);
}

function createName (){
    let captureName = document.getElementById("input-text").value
    let create1 = document.createElement('p')
    create1.innerHTML = "Nome: " + captureName
    formResume.appendChild(create1)    
}

function createEmail (){
    let captureEmail = document.getElementById("input-email").value
    let create2 = document.createElement('p')
    create2.innerText = 'Email: ' + captureEmail
    formResume.appendChild(create2)
}

function createCpf (){
    let captureCPF = document.getElementById("input-cpf").value
    let create3 = document.createElement('p')
    create3.innerText = 'CPF: ' + captureCPF
    formResume.appendChild(create3)
}

function createEndereco (){
    let captureEndereco = document.getElementById('input-endereco').value
    let create4 = document.createElement('p')
    create4.innerText = "Endereço: " + captureEndereco
    formResume.appendChild(create4)
}

function createCity (){
    let captureCity = document.getElementById("input-cidade").value
    let create5 = document.createElement('p')
    create5.innerText = "Cidade: " + captureCity
    formResume.appendChild(create5)
}

function createEstado (){
    let captureEstado = document.getElementById("select-estados").value
    let create6 = document.createElement('p')
    create6.innerText = "Estado: " + captureEstado
    formResume.appendChild(create6)
}

function houseOption (){
    let captureHouse = document.querySelector("input[name='tipoImovel']:checked").value;
    let create7 = document.createElement('p')
    create7.innerText = "Tipo de ímovel: " + captureHouse
    formResume.appendChild(create7)
}

function createResume (){
    let captureResume = document.getElementById("resume").value
    let create8 = document.createElement('p')
    create8.innerText = "Resumo do currículo: " + captureResume
    formResume.appendChild(create8)
}

function createCargo (){
    let captureCargo = document.getElementById("input-cargo").value
    let create9 = document.createElement('p')
    create9.innerText = "Cargo: " + captureCargo
    formResume.appendChild(create9)
}

function createDescription (){
    let captureDescription = document.getElementById("input-descricao").value
    let create10 = document.createElement('p')
    create10.innerText = "Descrição de Cargo: " + captureDescription
    formResume.appendChild(create10)
}

function createDate (){
    let captureDate = document.getElementById("input-data").value
    let create11 = document.createElement("p")
    create11.innerText = "Data de ínicio: " + captureDate
    formResume.appendChild(create11)
}

captureButton.addEventListener("click", function(event){
    event.preventDefault()
    startDate() 
    createTitle()
    createName()
    createEmail()
    createCpf()
    createEndereco()
    createCity()
    createEstado()
    houseOption()
    createResume()
    createCargo()
    createDescription()
    createDate()
})

//Botão Limpar
const captureBtnLimpar = document.getElementById("btnLimpar")

captureBtnLimpar.addEventListener("click", function btnLimpar (){
    let allP = document.querySelectorAll("p")
    let captureH = document.querySelectorAll("h1")
    for(let index = 0; index < allP.length; index += 1) {
        formResume.removeChild(allP[index])
    }
    formResume.removeChild(captureH[1])
})
