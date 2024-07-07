var soma = 0
for (let index = 0; index < 20; index++) {
    var idade = parseInt(prompt("Digite sua idade: "))
    if(idade >= 18){
        soma++
    }
}
console.log('a quantidade de pessoas maiores de idade é: ', soma)
