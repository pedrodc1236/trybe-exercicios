// Crie um type para um objeto que represente um pássaro.

type bird = {
  wings: 2,
  beaks: 1,
  biped: true,
};

const printBird = (objBird: bird) => {
  console.log(`O passaro tem ${objBird.wings} asas`);
  console.log(`O passaro tem ${objBird.beaks} bico`);
  console.log(`O passaro é bípede ? ${objBird.biped}!`);
}

printBird({ wings: 2, beaks: 1, biped: true });

// Crie um type que represente uma função que recebe dois valores numéricos e retorne a soma deles.

type sum = (x: number, y: number) => number;

// Crie um type para um objeto que represente um endereço.

type Address = {
  publicPlace: string;
  number: number;
  district: string;
  city: string;
  state: string;
}

const address = (objAddress: Address) => {
  console.log(`Você mora em um lugar público? ${objAddress.publicPlace}, Qual o número da sua casa? ${objAddress.number}, Qual o seu distrito ? ${objAddress.district}, Qual a sua cidade? ${objAddress.city}, Qual o seu estado? ${objAddress.state}.`)
}

address({publicPlace: 'sim', number: 181, district: 'Vale', city: 'Donka', state: 'MG uai'});

// Crie um type union que represente os estados físicos da matéria: líquido, sólido ou gasoso.

type StatesOfMatter = "liquid" | "solid" | "gaseous";

//exemplo
const recebeEstadoFisico = (string: StatesOfMatter) => {
  console.log(`O estado físicos da matéria no momento é: ${string}`);
}

recebeEstadoFisico('solid');

// Crie um type union que represente o documento identificador de uma pessoa que pode receber valores numéricos ou texto. Ex: “123.567.890-12” ou 123456789012.

type identifierDocument = string | number;

function retornarCPF(cpf: identifierDocument){
  console.log("Seu CPF é: " + cpf);
}

retornarCPF('127.392.958-00');
retornarCPF(12739295800);

// Crie um type union que represente sistemas operacionais: linux, mac os ou windows.

type operationalSystems = 'linux' | 'mac' | 'windows';

const retornaSistemaOperacional = (system: operationalSystems) => {
  console.log(`Seu sistema operacional é: ${system}`)
}

retornaSistemaOperacional('linux');

// Crie um type union que represente as vogais do alfabeto.

type vowels = 'a' | 'e' | 'i' | 'o' | 'u';

const retornaVogal = (vogal: vowels) => {
  console.log(`A vogal escolhida por você é ${vogal}`)
};

retornaVogal('a');

// Crie uma classe cujo objeto represente um Cachorro.

class Dog {
  name: string;
  color: string;
  age: number;

  constructor(name: string, color: string, age: number) {
    this.name = name;
    this.color = color;
    this.age = age;
  }

  bark(): void {
    console.log('Au, au!')
  }
}

const dog1 = new Dog ('Manhoso', 'Preto e Branco', 12);

console.log(dog1);
dog1.bark();

// Crie uma classe cujo objeto represente uma Casa.

class House {
  owner: string;
  address: string;
  color: string;
  area: number;

  constructor(owner: string, address: string, color: string, area: number) {
    this.owner = owner;
    this.address = address;
    this.color = color;
    this.area = area;
  }
}

const house1 = new House ('Pedro', 'Rua Ali de baixo', 'Cinza', 1000);

console.log(house1);

// Crie uma classe cujo objeto represente um Voo.

class Flight {
  origin: string;
  destination: string;
  departureDate: Date;
  arrivalDate: Date;
  passengers: number;

  constructor(origin: string, destination: string, departureDate: Date, arrivalDate: Date, passengers: number) {
    this.origin = origin;
    this.destination = destination;
    this.departureDate = departureDate;
    this.arrivalDate = arrivalDate;
    this.passengers = passengers;
  }
}

const flight1 = new Flight ('Donka', 'BH', new Date("2022-07-25"), new Date("2022-07-28"), 15);

console.log(flight1);

// Crie uma interface cujo objeto represente um Automóvel.

interface Automobile {
  name: string,
  brand: string,
  color: string,
  doors: number,
  gears: number,
  turnON: () => void;
  turnOff: () => void;
  speedUp: () => void;
  speedDown: () => void;
  break: () => void;
}

// Crie uma interface cujo objeto represente um Felino.

interface Feline {
  name: string,
  subfamilies: string,
  walk: () => void;
  hunt: () => void;
  eat: () => void;
  sleep: () => void;
}

// Crie uma interface cujo objeto represente uma Aeronave.

interface Aircraft {
  model: string;
  brand: string;
  wings: number;
  engines: number;
  isManned: boolean;
  turnOn: () => void;
  turnOff: () => void;
  speedUp: () => void;
  speedDown: () => void;
}