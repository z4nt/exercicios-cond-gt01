var peso = parseFloat(prompt('Digite seu peso'))
var altura  = parseFloat(prompt('Digite sua altura em metros'))
var imc = peso / (altura*altura)
console.log(imc.toFixed(2))
if( imc < 20){
    console.log('Abaixo do peso')
}else if(imc >= 20 & imc < 25){
    console.log('Peso normal')
}else if(imc >= 25 & imc < 30){
    console.log('Sobrepeso')
}else if(imc >= 30 & imc <40){
    console.log('Obeso')
}else if(imc > 40){
    console.log('Obeso mórbido')
}