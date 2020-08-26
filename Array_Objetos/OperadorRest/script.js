// essas variaveis iram virar ARRAY
let num = 1;
let num1 = 2;
let num2 = 3;
let num3 = 5;

// Vou pegar os argumentos que seram passador para a funcaop e transformalas em Array.
// posso pegar esse parametros de Variaveis ou setalas co foi feito a baixo.
function imprimirNumeros(...args){
    for(let i = 0; i < args.length; i++){
    console.log(args[i]);
    }
}

// estou executando esta function pegando os valores das variaveis criada no topo.
console.log('Arrai A')
imprimirNumeros(num,num1,num3);
console.log('\n')

// estou executando esta function pegando os valores das variaveis criada no topo.
console.log('Array B')
imprimirNumeros(num3,num1);
console.log('\n')

// estou executando a function com parametros passados pelo usuario, e nao ultilizando as variaveis
console.log('Array C')
imprimirNumeros(1,2,3,4,5,6,7,8,9,5,1,2,32);

