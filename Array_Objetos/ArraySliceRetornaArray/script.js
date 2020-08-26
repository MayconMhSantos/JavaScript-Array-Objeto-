let num = [2,4,6,8,4,2,8,6];
// indice  0,1,2,3,4,5,6,7

console.log(num.slice(4,7)); // Apartir do indice 4 ate o indice 6...
//...OBS ele nao pega o ultimo indice como solicitei no console.log, que foi o indice 7...
// ele pegou so ate o 6.

console.log(num.slice(5)); // Apartir do indice 5 = num [...2,8,6]

// Vou solicitar um indice no caso o 2 ele vai pegar do 2 ate o ultimo indice.
console.log(num.slice(1));

// pega os 5 indice de traz para frente
console.log(num.slice(-5));

// Pulou os 2 primeiro indices e pulos os doi ultimos indice. Imprimindo so o meio entre eles.
console.log(num.slice(2,-2));



