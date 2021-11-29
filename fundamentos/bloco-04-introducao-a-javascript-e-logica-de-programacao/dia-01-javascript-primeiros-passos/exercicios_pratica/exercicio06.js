/* 6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
    
    Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
   
    Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
    
    Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
    
    Exemplo: bishop (bispo) -> diagonals (diagonais) */

    let chessPiece = "RAINHA";

    switch (chessPiece.toLowerCase()) {
        case "torre":
        console.log("A torre se movimenta para frente e para trás, para a direita e para a esquerda, quantas casas quiser, mas não pode pular nenhuma outra peça.")
        break;

        case "bispo":
        console.log("O bispo se movimenta na diagonal mantendo-se sempre nas casas de mesma cor que se encontrava no início do jogo, podendo ir para frente e para trás, quantas casas quiser, mas não pode pular nenhuma outra peça.")
        break;

        case "cavalo":
        console.log("O cavalo tem um movimento especial que parece a letra L. O cavalo se movimenta 2 casas para frente ou para trás e em seguida 1 casa para a direita ou para a esquerda, ou 2 casas para a direita ou para a esquerda e em seguida 1 casa para frente ou para trás. O cavalo é a única peça do xadrez que pode pular outras peças.")
        break;

        case "rainha":
        console.log("A Rainha, também conhecida como Dama, é a peça mais poderosa do xadrez, ela pode ir para frente ou para trás, para direita ou para a esquerda, ou na diagonal, quantas casas quiser, mas não pode pular nenhuma outra peça.")
        break;
            
        case "rei":
        console.log("O Rei movimenta-se apenas 1 casa em qualquer direção. O Rei nunca pode se movimentar para uma casa que esteja sob ataque ou capturar uma peça que esteja defendida por uma peça adversária. No diagrama o rei preto só pode ir para cima, pois indo para a esquerda ou em diagonal estará sob ataque da torre branca. Quando estudarmos os movimentos especiais veremos que existe uma situação em que o rei pode andar 2 casas.")
        break;

        case "peão":
        console.log("O peão só se movimenta para frente, sendo a única peça que não se move para trás. No primeiro lance de cada peão ele pode avançar 1 ou 2 casas. À partir do segundo lance de cada peão ele irá movimenta-se apenas 1 casa.")
        break;

        default:
        console.log("Error")
    }