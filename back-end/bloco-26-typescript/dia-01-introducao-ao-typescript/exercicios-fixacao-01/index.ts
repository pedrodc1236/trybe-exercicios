// Crie uma Enum que represente os dias da semana. Seu valor deve ser o número do dia.

enum DaysWeek {
  Sunday = 1,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

let sunday: DaysWeek = DaysWeek.Sunday;
let monday: DaysWeek = DaysWeek.Monday;
let tuesday: DaysWeek = DaysWeek.Tuesday;
let wednesday: DaysWeek = DaysWeek.Wednesday;
let thursday: DaysWeek = DaysWeek.Thursday;
let friday: DaysWeek = DaysWeek.Friday;
let saturday: DaysWeek = DaysWeek.Saturday;


console.log(sunday);
console.log(monday);
console.log(tuesday);
console.log(wednesday);
console.log(thursday);
console.log(friday);
console.log(saturday);

// Crie uma Enum que represente as cores do arco-íris. Seu valor deve ser o nome das cores em português.

enum RainbowColors {
  Red = 'Vermelho',
  Orange = 'Laranja',
  Yellow = 'Amarelo',
  Green = 'Verde',
  Blue = 'Azul',
  Indigo = 'Anil',
  Violet = 'Violeta',
}

let red: RainbowColors = RainbowColors.Red;
let orange: RainbowColors = RainbowColors.Orange;
let yellow: RainbowColors = RainbowColors.Yellow;
let green: RainbowColors = RainbowColors.Green;
let blue: RainbowColors = RainbowColors.Blue;
let indigo: RainbowColors = RainbowColors.Indigo;
let violet: RainbowColors = RainbowColors.Violet;

console.log(red);
console.log(orange);
console.log(yellow);
console.log(green);
console.log(blue);
console.log(indigo);
console.log(violet);

// Crie uma Enum que represente as ações: salvar, imprimir, abrir, visualizar e fechar. Seu valor deve ser do tipo inteiro.


enum Actions {
  Save,
  Print,
  Open,
  View,
  Close,
}

let saveLet: Actions = Actions.Save;
let printLet: Actions = Actions.Print;
let openLet: Actions = Actions.Open;
let viewLet: Actions = Actions.View;
let closeLet: Actions = Actions.Close;


console.log(saveLet);
console.log(printLet);
console.log(openLet);
console.log(viewLet);
console.log(closeLet);

// Crie uma Enum que represente os pontos cardeais: Norte, Leste, Sul e Oeste. Seu valor deve ser a primeira letra do nome do ponto cardial.

enum CardialPoints {
  North = 'N',
  East = 'E',
  South = 'S',
  West = 'W',
}

let north: CardialPoints = CardialPoints.North;
let east: CardialPoints = CardialPoints.East;
let south: CardialPoints = CardialPoints.South;
let west: CardialPoints = CardialPoints.West;

console.log(north);
console.log(east);
console.log(south);
console.log(west);