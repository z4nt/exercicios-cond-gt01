var idade = 69
if(idade < 16){
    console.log('Não eleitor')
}else if(idade >= 16 & idade < 18){
    console.log('Eleitor Facultativo')
}else if(idade >= 18 & idade <= 65){
    console.log('Eleitor Obrigátorio')
}else if(idade > 65){
    console.log('Eleitor facultativo')
}