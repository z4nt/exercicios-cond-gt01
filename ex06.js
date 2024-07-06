var numeros = [0,'domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sabado',]
function semana(dia){
    if(dia < 1 || dia > 7){
        console.log('digite uma opção válida')
    }else{
        return console.log(numeros[dia])
    }
    
}
var dia = prompt('digite um dia da semana')
semana(dia)