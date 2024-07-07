var soma = 0

for (let index = 0; index < 20; index++) {
    var idade = parseInt(prompt("Digite sua idade: "))
    soma += idade
}
console.log('A soma das idades é: ', soma)