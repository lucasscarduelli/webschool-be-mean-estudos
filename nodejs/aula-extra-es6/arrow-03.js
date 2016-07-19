// ES5 - Função auto executável
//const a = (function(x) {
//    return x
//})(10);
//console.log(a);

// ES6
//const b = ((x) => { // ESSE NÃO FUNCIONA
//    x
//})(10);
const b = ((x) => { // PRECISA DO RETURN EXPLICITO
    return x
})(10);
console.log(b);