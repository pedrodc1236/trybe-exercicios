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

 