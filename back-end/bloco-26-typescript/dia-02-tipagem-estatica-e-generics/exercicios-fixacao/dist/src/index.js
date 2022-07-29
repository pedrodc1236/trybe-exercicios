"use strict";
// Crie um type para um objeto que represente um pássaro.
const printBird = (objBird) => {
    console.log(`O passaro tem ${objBird.wings} asas`);
    console.log(`O passaro tem ${objBird.beaks} bico`);
    console.log(`O passaro é bípede ? ${objBird.biped}!`);
};
printBird({ wings: 2, beaks: 1, biped: true });
const address = (objAddress) => {
    console.log(`Você mora em um lugar público? ${objAddress.publicPlace}, Qual o número da sua casa? ${objAddress.number}, Qual o seu distrito ? ${objAddress.district}, Qual a sua cidade? ${objAddress.city}, Qual o seu estado? ${objAddress.state}.`);
};
address({ publicPlace: 'sim', number: 181, district: 'Vale', city: 'Donka', state: 'MG uai' });
//exemplo
const recebeEstadoFisico = (string) => {
    console.log(`O estado físicos da matéria no momento é: ${string}`);
};
recebeEstadoFisico('solid');
function retornarCPF(cpf) {
    console.log("Seu CPF é: " + cpf);
}
retornarCPF('127.392.958-00');
retornarCPF(12739295800);
const retornaSistemaOperacional = (system) => {
    console.log(`Seu sistema operacional é: ${system}`);
};
retornaSistemaOperacional('linux');
const retornaVogal = (vogal) => {
    console.log(`A vogal escolhida por você é ${vogal}`);
};
retornaVogal('a');
// Crie uma classe cujo objeto represente um Cachorro.
class Dog {
    constructor(name, color, age) {
        this.name = name;
        this.color = color;
        this.age = age;
    }
    bark() {
        console.log('Au, au!');
    }
}
const dog1 = new Dog('Manhoso', 'Preto e Branco', 12);
console.log(dog1);
dog1.bark();
// Crie uma classe cujo objeto represente uma Casa.
class House {
    constructor(owner, address, color, area) {
        this.owner = owner;
        this.address = address;
        this.color = color;
        this.area = area;
    }
}
const house1 = new House('Pedro', 'Rua Ali de baixo', 'Cinza', 1000);
console.log(house1);
// Crie uma classe cujo objeto represente um Voo.
class Flight {
    constructor(origin, destination, departureDate, arrivalDate, passengers) {
        this.origin = origin;
        this.destination = destination;
        this.departureDate = departureDate;
        this.arrivalDate = arrivalDate;
        this.passengers = passengers;
    }
}
const flight1 = new Flight('Donka', 'BH', new Date("2022-07-25"), new Date("2022-07-28"), 15);
console.log(flight1);
