var saldoM = 10000
var credito = 0

if(saldoM < 500){
    console.log('Nenhum credito')
    console.log('Credito')
}else if(saldoM > 500 & saldoM < 1000){
    credito = (saldoM * 0.3)
    console.log('Credito')
}else if(saldoM > 1000 & saldoM < 3000){
    credito = (saldoM * 0.4)
    console.log('Credito')
}else if(saldoM > 3000){
    credito = (saldoM * 0.5)
    console.log('Credito')
}
credito = credito * 0.02
console.log('Seu crédito é: ', credito)