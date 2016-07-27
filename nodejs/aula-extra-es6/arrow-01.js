console.log(function (x) { return x; });
console.log((x) => x);

function pimba(x) { return x; };
// pimba(x) => { return x; } NÃO EXISTE PARA FUNÇÃO NOMEADA

const pimba = function(x) { return x; };
// const pimba = (x) => x;

console.log((x,y) => x+y);
// console.log(x,y => x+y); ERRO, PARA DOIS OU MAIS PARÂMETROS É OBRIGATÓRIO DO PARENTESES