import * as Exercise from './exercises';

console.log(Exercise.greeter('Maria'));
console.log(Exercise.personAge('Maria', 40));
console.log(`A soma do array é igual a ${Exercise.sumArray([3, 6, 9])}`);

console.log(`Triângulo de base 10cm e altura 25cm: ${Exercise.triangle(10, 25)}cm²`);
console.log(`Triângulo de base 5cm e altura 30cm: ${Exercise.triangle(5, 30)}cm²`);
console.log(`Triângulo de base 100cm e altura 200cm: ${Exercise.triangle(100, 200)}cm²`);

console.log(`Quadrado de lado 10cm: ${Exercise.square(10)}cm²`);
console.log(`Quadrado de lado 5cm: ${Exercise.square(5)}cm²`);
console.log(`Quadrado de lado 100cm: ${Exercise.square(100)}cm²`);

console.log(`Retângulo de base 10cm e altura 25cm: ${Exercise.rectangle(10, 25)}cm²`);
console.log(`Retângulo de base 5cm e altura 30cm: ${Exercise.rectangle(5, 30)}cm²`);
console.log(`Retângulo de base 100cm e altura 200cm: ${Exercise.rectangle(100, 200)}cm²`);

// Calcule a área de um losango que tem D = 32cm e d = 18cm;
console.log(` Losango com diagonais iguais a 32cm e 18cm: ${Exercise.diamond(32, 18)}cm²`);
// Calcule a área de um losango que tem D = 200cm e d = 50cm;
console.log(` Losango com diagonais iguais a 200cm e 50cm: ${Exercise.diamond(200, 50)}cm²`);
// Calcule a área de um losango que tem D = 75cm e d = 25cm.
console.log(` Losango com diagonais iguais a 75cm e 25cm: ${Exercise.diamond(75, 25)}}cm²`);

// Calcule a área de um trapézio que tem B = 100cm, b = 70cm e altura = 50cm;
console.log(` Trapézio com base maior igual a 100cm, base menor igual a 70cm e altura igual a 50cm: ${Exercise.trapeze(100, 70, 50)}cm²`);
// Calcule a área de um trapézio que tem B = 75cm, b = 50cm e altura = 35cm;
console.log(` Trapézio com base maior igual a 75cm, base menor igual a 50cm e altura igual a 35cm: ${Exercise.trapeze(75, 50, 35)}cm²`);
// Calcule a área de um trapézio que tem B = 150cm, b = 120cm e altura = 80cm.
console.log(` Trapézio com base maior igual a 150cm, base menor igual a 120cm e altura igual a 80cm: ${Exercise.trapeze(150, 120, 80)}cm²`);

// Calcule a área de um círculo de raio igual 25cm;
console.log(`Círculo com raio igual a 25cm: ${Exercise.circle(25)}cm²`);
// Calcule a área de um círculo de raio igual 100cm;
console.log(`Círculo com raio igual a 100cm: ${Exercise.circle(100)}cm²`);
// Calcule a área de um círculo de raio igual 12,5cm.
console.log(`Círculo com raio igual a 12,5cm: ${Exercise.circle(12.5)}cm²`);