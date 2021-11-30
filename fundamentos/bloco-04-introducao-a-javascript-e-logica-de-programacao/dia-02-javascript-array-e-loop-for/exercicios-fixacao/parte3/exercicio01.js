/* Utilize o for/of para imprimir os elementos da lista names com o console.log() : */

    let names = ['João', 'Maria', 'Antônio', 'Margarida'];

    for(let listNames of names) {
        listNames = listNames + ' é um nome lindo!'
        console.log(listNames)
    }