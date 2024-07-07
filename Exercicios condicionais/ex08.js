var a = 9
var b = 10
var c = 4

if (a > b && a > c) {
    console.log(a)
    if (b > c) {
        console.log(b)
        console.log(c)
    }else{
        console.log(c)
        console.log(b)
    }
}else if (b > a && b > c) {
    console.log(b)
    if (a > c) {
        console.log(a)
        console.log(c)
    }else{
        console.log(c)
        console.log(a)
    }
}else{
    console.log(c)
    if (b > a) {
        console.log(b)
        console.log(a)
    }else{
        console.log(a)
        console.log(b)
    }
}

