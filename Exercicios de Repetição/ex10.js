var tabuada = 1
var num = parseInt(prompt('Digite um numero: '))
for (let index = 0; index < 10; index++) {
    let operacao = num * tabuada
    console.log(operacao)
    tabuada++
}