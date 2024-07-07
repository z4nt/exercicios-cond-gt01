var check0 = 0
var check1 = 0
var check2 = 0
for (let index = 0; index < 10; index++) {
    var numero = parseInt(prompt("Digite um numero: "))
    if(numero >= 0 && numero <= 100){
        check0++
    }else if(numero >= 101 && numero <= 200){
        check1++
    }else if (numero > 200){
        check2++
    }
}
console.log('a quantidade de numeros entre 0 e 100 é: ', check0)
console.log('a quantidade de numeros entre 101 e 200 é: ', check1)
console.log('a quantidade de numeros maiores que 200 é: ', check2)

