// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: use parâmetro rest .

const sum = (...args) => args.reduce((acc, arg) => acc + arg, 0);

console.log(sum(1, 3, 5, 10, 25, 1));