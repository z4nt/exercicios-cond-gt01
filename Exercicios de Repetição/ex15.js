var soma = 0
for (let index = 0; index < 5; index++) {
    var numero = parseInt(prompt("Digite um numero: "))
    if(numero < 0){
        break;
    }else{
        soma += numero
    }
}
console.log(soma)