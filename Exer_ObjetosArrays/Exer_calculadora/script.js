const calculadora = {
    somar: function(a , b) {
        return a + b;
    },
    subtrair: function(a , b) {
        return a - b;
    },
    mult: function(a , b) {
        return a * b;
    },
    dividir: function(a , b) {
        return a / b;
    }
}

console.log(calculadora.somar(10,10));
console.log(calculadora.subtrair(10,10));
console.log(calculadora.mult(10,10));
console.log(calculadora.dividir(10,10));
