let pessoa = {
    nome : 'maycon', // propriedade
    idade: 25,          // propriedade
    profissao:'dev'     // propriedade
};
console.log(pessoa);

// Deletando do Objeto.
delete pessoa.nome;
console.log(pessoa.nome);

// Incrementando outra propriedade no objeto.
pessoa.nome = 'Maycon'
pessoa.cnh = true;
pessoa.casado = true;
pessoa.sobreNome = 'Santos';
console.log(`Meu nome e ${pessoa.nome}, se posso dirigir ${pessoa.cnh}. Sim sou sou casado ${pessoa.casado}, e meu sobre nome e ${pessoa.sobreNome}.`);
