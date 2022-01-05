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