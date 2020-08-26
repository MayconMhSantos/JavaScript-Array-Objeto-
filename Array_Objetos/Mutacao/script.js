let pessoa = {
    nome: 'Maycon;'
}

let pessoa2 = pessoa;
console.log(pessoa2);

console.log(pessoa2==pessoa);
console.log(pessoa==pessoa2);

pessoa2.nome = 'Jose';
console.log(pessoa)
console.log(pessoa2)