//  Objeto Simples
let pessoa = {
    nome : 'maycon',
    idade: 25
};
console.log(pessoa.idade);
console.log(pessoa.idade);
console.log(pessoa);

// Objeto com Metodo
let cachorro = {
    patas:4,
    nome:'dog',
    latir: function(){    // criando um metodo no objeto cachoro
        console.log('Au Au');
    }
};
console.log(cachorro);
console.log(cachorro.latir()); // invocando o metodo do objeto cachorro (LATIR).