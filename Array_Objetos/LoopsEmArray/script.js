let produtos = [2,4,6,8,10,12];

console.log('For ----------------------')
// Lendo so objetos dentro do Array
for(let i=0; i < produtos.length; i++){
    console.log(produtos[i]);
}

console.log('While ---------------------')
// contando quantos itens tem no Array
let cont = 0;
while(cont < produtos.length){
    console.log(cont++);
}