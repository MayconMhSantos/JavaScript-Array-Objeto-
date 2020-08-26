// uma forma de troca informacoes  meio que padrao.
let pessoa = {
    "nome":"Maycon Henrique",
    "idade": 25,
    "linguagem": "Java Script / Reacrt",
    "Formacao": "Univel"
}
console.log(pessoa);
console.log("\n")

// convertendo o osbjeto JSON para String
let pessoaText = JSON.stringify(pessoa);
console.log(pessoaText);
//console.log(pessoaText.nome); nao foi definido pois o JSON nesta parte do cod e uma String.

console.log("\n")

// Convertendo a String para Objeto-JSON novamente 
let pessoaJSON = JSON.parse(pessoaText); 
console.log(pessoaJSON);
console.log("\n")
console.log(pessoaJSON.nome);

