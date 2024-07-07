var check = 0
for (let index = 0; index < 20; index++) {
    var numero = parseInt(prompt("Digite um numero: "))
    if(numero >= 0 && numero <= 100){
        check++
    }
}
console.log('a quantidade de numeros entre 0 e 100 é: ', check)
