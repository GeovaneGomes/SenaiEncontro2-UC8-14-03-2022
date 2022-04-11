// criar um laço para exibir se o numero é impar ou par

let numeros = 20;

for(let contador = 0; contador <= numeros; contador++) {
    //mod é o resto da divisão
    if(contador % 2 == 0){
        console.log(contador+"é PAR")
    }else{
        console.log(contador+"é IMPAR")
    }
}