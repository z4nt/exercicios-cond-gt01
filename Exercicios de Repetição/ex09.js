var check = 1000
for (let index = 0; index < 5; index++) {
    var idade = parseInt(prompt("Digite sua idade: "))
    if(idade < check){
        check = idade
    }
}
console.log('a idade mais nova é: ', check)
