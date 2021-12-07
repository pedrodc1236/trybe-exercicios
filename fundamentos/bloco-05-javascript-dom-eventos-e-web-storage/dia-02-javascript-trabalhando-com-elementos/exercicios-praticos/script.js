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

    console.log(captureBody);