// Objeto carro
let carro = {
    portas:2,
    motor:2.0,
    portamalas:'200l'
};
console.log(carro); // teste 

// Essas sao as propriedades que quero adicionar ao objeto CARRO
let adicionar = {
    tetosolar: true,
    ar:true
};
console.log(adicionar); // teste

//  ESTE E O METODO QUE E ULTILIZADO PARA COPIAR AS PROPRIEDADES DO ADICIONAR PARA A DO CARRO
//  OBS primeiro o OBJETO pai depois coloque o OBJETO que deseja adicionar.    
Object.assign(carro, adicionar);
console.log(carro);

Object.assign(adicionar, carro);
console.log(adicionar);


