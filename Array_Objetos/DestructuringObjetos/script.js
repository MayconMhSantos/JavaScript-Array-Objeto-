let obj = {
    rodas: 4,
    portas:4,
    teto:true,
    motor:2.0
}
// Imprimindo o objeto
console.log(obj);

// Desfragmentando o objeto para criacao de variaveis 
const {rodas: vRodas, portas: vPortas, teto: vTeto, motor: Vmotor} = obj;
// imprimindo as variaveis desfragmentadas do objeto.
console.log(vTeto);
console.log(Vmotor);

