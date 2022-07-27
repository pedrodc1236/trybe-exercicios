// Crie uma Enum que represente os dias da semana. Seu valor deve ser o número do dia.
var DaysWeek;
(function (DaysWeek) {
    DaysWeek[DaysWeek["Sunday"] = 1] = "Sunday";
    DaysWeek[DaysWeek["Monday"] = 2] = "Monday";
    DaysWeek[DaysWeek["Tuesday"] = 3] = "Tuesday";
    DaysWeek[DaysWeek["Wednesday"] = 4] = "Wednesday";
    DaysWeek[DaysWeek["Thursday"] = 5] = "Thursday";
    DaysWeek[DaysWeek["Friday"] = 6] = "Friday";
    DaysWeek[DaysWeek["Saturday"] = 7] = "Saturday";
})(DaysWeek || (DaysWeek = {}));
var sunday = DaysWeek.Sunday;
var monday = DaysWeek.Monday;
var tuesday = DaysWeek.Tuesday;
var wednesday = DaysWeek.Wednesday;
var thursday = DaysWeek.Thursday;
var friday = DaysWeek.Friday;
var saturday = DaysWeek.Saturday;
console.log(sunday);
console.log(monday);
console.log(tuesday);
console.log(wednesday);
console.log(thursday);
console.log(friday);
console.log(saturday);
// Crie uma Enum que represente as cores do arco-íris. Seu valor deve ser o nome das cores em português.
var RainbowColors;
(function (RainbowColors) {
    RainbowColors["Red"] = "Vermelho";
    RainbowColors["Orange"] = "Laranja";
    RainbowColors["Yellow"] = "Amarelo";
    RainbowColors["Green"] = "Verde";
    RainbowColors["Blue"] = "Azul";
    RainbowColors["Indigo"] = "Anil";
    RainbowColors["Violet"] = "Violeta";
})(RainbowColors || (RainbowColors = {}));
var red = RainbowColors.Red;
var orange = RainbowColors.Orange;
var yellow = RainbowColors.Yellow;
var green = RainbowColors.Green;
var blue = RainbowColors.Blue;
var indigo = RainbowColors.Indigo;
var violet = RainbowColors.Violet;
console.log(red);
console.log(orange);
console.log(yellow);
console.log(green);
console.log(blue);
console.log(indigo);
console.log(violet);
// Crie uma Enum que represente as ações: salvar, imprimir, abrir, visualizar e fechar. Seu valor deve ser do tipo inteiro.
var Actions;
(function (Actions) {
    Actions[Actions["Save"] = 0] = "Save";
    Actions[Actions["Print"] = 1] = "Print";
    Actions[Actions["Open"] = 2] = "Open";
    Actions[Actions["View"] = 3] = "View";
    Actions[Actions["Close"] = 4] = "Close";
})(Actions || (Actions = {}));
var saveLet = Actions.Save;
var printLet = Actions.Print;
var openLet = Actions.Open;
var viewLet = Actions.View;
var closeLet = Actions.Close;
console.log(saveLet);
console.log(printLet);
console.log(openLet);
console.log(viewLet);
console.log(closeLet);
// Crie uma Enum que represente os pontos cardeais: Norte, Leste, Sul e Oeste. Seu valor deve ser a primeira letra do nome do ponto cardial.
var CardialPoints;
(function (CardialPoints) {
    CardialPoints["North"] = "N";
    CardialPoints["East"] = "E";
    CardialPoints["South"] = "S";
    CardialPoints["West"] = "W";
})(CardialPoints || (CardialPoints = {}));
var north = CardialPoints.North;
var east = CardialPoints.East;
var south = CardialPoints.South;
var west = CardialPoints.West;
console.log(north);
console.log(east);
console.log(south);
console.log(west);
