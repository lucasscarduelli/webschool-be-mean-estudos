const version = 7;

// Isso falha mas não emite erro
version = 20;
console.log(version); // Vai continuar valendo 7

const version = 20; // Erro dizendo que já foi declarado


// Constantes também funcionam para objetos
const user = {name: 'Lucas'};

user = {name: 'Lucas Boeing Scarduelli'};
console.log(user); // Vai continuar valendo {name: 'Lucas'}

user.name = 'Lucas Boeing Scarduelli'; // Mas se o atributo do objeto não está protegido e você setar direto ele deixa
console.log(user); // Vai continuar valendo {name: 'Lucas Boeing Scarduelli'}

// Constantes em scopes diferentes com mesmo nome
function pimba() {
    const naGorduchinha = true;
    console.log(naGorduchinha);
}

pimba();

const naGorduchinha = false;
console.log(naGorduchinha);
