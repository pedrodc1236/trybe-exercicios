    // PARTE 01
/* 1. Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ; */

    let captureBody = document.getElementsByTagName("body")[0];
    
    let childBody = document.createElement("h1");
    childBody.innerHTML = "Exercício 5.2 - JavaScript DOM";

    captureBody.appendChild(childBody);

/* 2. Adicione a tag main com a classe main-content como filho da tag body ; */

    let mainChild = document.createElement("main");
    mainChild.className = "main-content"; 

    captureBody.appendChild(mainChild);

/* 3. Adicione a tag section com a classe center-content como filho da tag main criada no passo 2 */

    let captureMain = captureBody.lastElementChild;

    let sectionChildMain = document.createElement("section");
    sectionChildMain.className = "center-content";

    captureMain.appendChild(sectionChildMain);

 /* 4. Adicione a tag p como filho do section criado no passo 3 e coloque algum texto; */

    let captureSection = captureMain.firstElementChild;

    let childSectionP = document.createElement("p");
    childSectionP.innerText = "Olá, eu sou o Pedro Lol !";

    captureSection.appendChild(childSectionP);

/* 5. Adicione a tag section com a classe left-content como filho da tag main criada no passo 2; */

    let sectionChildMain2 = document.createElement("section");
    sectionChildMain2.className = "left-content";

    captureMain.appendChild(sectionChildMain2);

/* 6. Adicione a tag section com a classe right-content como filho da tag main criada no passo 2; */

    let sectionChildMain3 = document.createElement("section");
    sectionChildMain3.className = "right-content";

    captureMain.appendChild(sectionChildMain3);

/* 7. Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5; */

    let captureSectionPasso5 = captureMain.lastElementChild.previousElementSibling;

    let imgAndClassSection = document.createElement("img");
    imgAndClassSection.src = "https://picsum.photos/200"; 
    imgAndClassSection.className = "small-image";

    captureSectionPasso5.appendChild(imgAndClassSection);

/* 8.  Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6; */

    let captureSectionPasso6 = captureMain.lastElementChild;

    let listOl = document.createElement("ol");

    captureSectionPasso6.appendChild(listOl);

    let captureListOl = captureSectionPasso6.firstElementChild;

    const extenso = [];

    extenso[0] = 'um';
	extenso[1] = 'dois';
	extenso[2] = 'tres';
	extenso[3] = 'quatro';
	extenso[4] = 'cinco';
	extenso[5] = 'seis';
	extenso[6] = 'sete';
	extenso[7] = 'oito';
	extenso[8] = 'nove';
    extenso[9] = 'dez';

    for(let index = 0; index < extenso.length; index += 1) {
        let listLi = document.createElement("li");
        listLi.innerText = extenso[index];

        captureListOl.appendChild(listLi);
    }

/* 9. Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2. */
    
    for(let secondIndex = 1; secondIndex <= 3; secondIndex += 1) {
        let createChildsMain = document.createElement("h3");
        
        captureMain.appendChild(createChildsMain);
    }

    // PARTE 02
    // Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:


/* 1. Adicione a classe title na tag h1 criada; */
    
    let captureH1 = captureBody.firstElementChild.nextElementSibling;
    captureH1.className = "title";

/* 2. Adicione a classe description nas 3 tags h3 criadas; */

  let captureTags1 = captureMain.lastElementChild;
  captureTags1.className = "description"
  let captureTags2 = captureMain.lastElementChild.previousElementSibling;
  captureTags2.className = "description"
  let captureTags3 = captureMain.lastElementChild.previousElementSibling.previousElementSibling;
  captureTags3.className = "description"

/* 3. Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ; */

    captureMain.removeChild(captureSectionPasso5);

/* 4. Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ; */

    captureSectionPasso6.style.marginRight = "auto";

 /* 5. Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde; */

   let captureFather = sectionChildMain.parentElement;
    captureFather.style.background = "rgb(76,164,109)";

/* 6. Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8. */

    let captureToRemove9Li = sectionChildMain3.firstElementChild.lastElementChild;

    let captureToRemove10Li = sectionChildMain3.firstElementChild.lastElementChild.previousElementSibling;

    listOl.removeChild(captureToRemove9Li);
    listOl.removeChild(captureToRemove10Li);

