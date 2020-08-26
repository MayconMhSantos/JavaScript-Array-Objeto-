let nomes = ["Maycon","jose","Carlos","Jaqueline","Antonio","Andre"];



// Funcionou mas poderia ser bem mais facil.
// porem assim descobri em qual posicao o elemento se encontra no Array, pelo console do navegador. 
function verificarNomes(verif){
    for(let i = 0; i < nomes.length; i++){
        if(nomes[i] == verif){
            console.log("Existe");
        } else {
            console.log("Nao Existe")
        }   
    }
}
console.log(verificarNomes("Jaqueline"));



// modo rapido e facil
function verificarNome(){
    if(nomes.includes("Carlos")){
        console.log("O nome Foi encontrado");
    }   else {
        console.log("O nome nao foi encontrado");
    }
}
console.log(verificarNome());
