let frase = 'o rato roeu a ropa do rei de roma';

// Peguei a Variavel frase=String e com o split transformei em ARRAY
// Split transforma String em Arrays.
let palavras = frase.split(" ");
console.log(palavras);

// Peguei o Array frase que esta armazenada em palavrase a transformei em String novamente...
// com o metodo (join). transforma array em string
let novaFrase = palavras.join("  - ");
console.log(novaFrase);