var check = 0
for (let index = 0; index < 20; index++) {
    var numero = parseInt(prompt("Digite um numero: "))
    if(numero%10 === 0){
        check++
    }
}
console.log('a quantidade de numeros pares é: ', check)
