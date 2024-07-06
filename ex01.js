var num = 3
var verf = false
switch (true) {
    case num%10 === 0:
        console.log('divisel por 10');
        verf = true
    case num%5 === 0:
        console.log('divisel por 5');
        verf = true
    case num%2 === 0:
        console.log('divisel por 2');
        verf = true
    default:
        if(!verf){
        console.log('não é divisivel')
    }
}