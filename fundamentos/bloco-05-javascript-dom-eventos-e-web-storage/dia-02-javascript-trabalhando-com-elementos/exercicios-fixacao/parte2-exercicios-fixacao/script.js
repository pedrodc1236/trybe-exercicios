/* 1. Crie um irmão para elementoOndeVoceEsta . */

    let elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");  

    let pai = elementoOndeVoceEsta.parentElement;

    let brotherElement = document.createElement("section");

    pai.appendChild(brotherElement);

/* 2. Crie um filho para elementoOndeVoceEsta . */
    
    let childElement = document.createElement("section");

    elementoOndeVoceEsta.appendChild(childElement);

/*  3. Crie um filho para primeiroFilhoDoFilho . */

    let primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;

    let childElement2 = document.createElement("section");

    primeiroFilhoDoFilho.appendChild(childElement2);

/*  4. A partir desse filho criado, acesse terceiroFilho . */

    let newChildPrimeiroFilhoDoFilho = primeiroFilhoDoFilho.firstElementChild;

    let terceiroFilho = newChildPrimeiroFilhoDoFilho.parentElement.parentElement.parentElement.lastElementChild.previousElementSibling.previousElementSibling;

