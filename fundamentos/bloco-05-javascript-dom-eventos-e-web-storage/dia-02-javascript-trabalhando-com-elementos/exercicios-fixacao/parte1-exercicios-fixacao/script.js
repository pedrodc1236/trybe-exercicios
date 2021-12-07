    /* 1. Acesse o elemento elementoOndeVoceEsta . */
    
    let elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");

    /* 2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele. */

    elementoOndeVoceEsta.parentElement.style.color = "rgb(76,164,109)"

    /* 3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso? */

    let primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
    primeiroFilhoDoFilho.innerText = "Olá, eu sou o Pedro Lol e estou aqui fazendo exercicios de fixação da Trybe!"

    /* 4. Acesse o primeiroFilho a partir de pai . */

    let primeiroFilho = document.getElementById("pai").firstElementChild;  

    /* 5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta . */

    let primeiroFilho2 = document.getElementById("elementoOndeVoceEsta").previousElementSibling;
   
    /* 6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta . */

    let textAtencion = elementoOndeVoceEsta.nextSibling;
         
   /*  7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta . */

   let terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

   /*  8. Agora acesse o terceiroFilho a partir de pai . */

    let pai = elementoOndeVoceEsta.parentElement;

    let terceiroFilho2 = pai.lastElementChild.previousElementSibling;

    