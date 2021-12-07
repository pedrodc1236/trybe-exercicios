/* 1. Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho . */

    let elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");

    let paiDoPai = elementoOndeVoceEsta.parentElement.parentElement;

    let pai = paiDoPai.firstElementChild;

    let primeiroFilho = paiDoPai.firstElementChild.firstElementChild

    pai.removeChild(primeiroFilho);  
    
    let quartoEUltimoFilho = pai.lastElementChild;

    pai.removeChild(quartoEUltimoFilho)

    let terceiroFilho = pai.lastElementChild;

    pai.removeChild(terceiroFilho)

    let textRemove = elementoOndeVoceEsta.nextSibling

    pai.removeChild(textRemove)

    let segundoEUltimoFilhoDoFilho = elementoOndeVoceEsta.lastElementChild;

    elementoOndeVoceEsta.removeChild(segundoEUltimoFilhoDoFilho);

    console.log(paiDoPai)