// Para os exercícios a seguir, use o seguinte código.

const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

// 1. Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
//ex. lesson2['turno'] = 'noite'
const addTurn = (obj, key, value) => {
    obj[key] = value;
}

addTurn(lesson2, 'turno', 'noite');
// console.log(lesson2)

// 2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const listKeys = (obj) => Object.keys(obj);

listKeys(lesson1);
// console.log(listKeys(lesson1));

// 3. Crie uma função para mostrar o tamanho de um objeto.

const lengthObj = (obj) => Object.keys(obj).length;

lengthObj(lesson3);
// console.log(lengthObj(lesson3));

// 4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro

const objValues = (obj) => Object.values(obj);

objValues(lesson1);
// console.log(objValues(lesson1));

// 5. Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
// console.log(allLessons);

// 6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const somaStudants = () => {
    const soma = allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes;

    return soma

}

//console.log(`O número total de estudantes no objeto é ${somaStudants()}!`)


// 7. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

const valuePosition = (obj, positionValue) => Object.values(obj)[positionValue]; 

//console.log(valuePosition(lesson1, 0));

// 8. Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

const verificationExists = (obj, key, value) => {
    const objKey = Object.keys(obj);
    const objValue = Object.values(obj);
    const test = true;

    for(index = 0; obj.length; index += 1) {
        if (objKey[index] == key[index] && objValue[index] == value[index]) {
            test = true;
        } else {
            test = false;
        }
    }
    return test;
};

console.log(verificationExists(lesson3, 'turno', 'noite'));

