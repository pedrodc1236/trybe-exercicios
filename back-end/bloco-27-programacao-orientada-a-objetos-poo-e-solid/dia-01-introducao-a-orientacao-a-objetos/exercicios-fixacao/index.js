class Tv {
    constructor(brand, size, resolution, connections) {
        this.brand = brand;
        this.size = size;
        this.resolution = resolution;
        this.connections = connections;
    }
    turnOn() {
        console.log(`TV ${this.brand}, ${this.size}, resolution: ${this.resolution} \n\ available connections: ${this.connections}`);
    }
}
const tv1 = new Tv('LG', 32, '4K', ['HDMI', 'Ethernet', 'Wifi']);
tv1.turnOn();
// Exercise 2
class Person {
    constructor(name, height, weight, age) {
        this.name = name;
        this._weight = weight;
        this._age = age;
        this.height = height;
    }
    // esta sintaxe permite acessar o valor retornado via person.getWeight()
    getWeight() {
        return this._weight;
    }
    // esta sintaxe permite acessar o valor retornado via person.age (como se fosse um atributo normal)
    get age() {
        return this._age;
    }
    // do mesmo modo, esta sintaxe permite modificar o valor com uma simples atribuição: person.age = 42
    // mesmo que esteja ocorrendo uma validação internamente
    set age(newValue) {
        if (newValue >= 0 && newValue < 200) {
            this._age = newValue;
        }
    }
    birthday() {
        this._age += 1;
    }
}
const p1 = new Person('Maria', 171, 58, 19);
const p2 = new Person('João', 175, 66, 18);
