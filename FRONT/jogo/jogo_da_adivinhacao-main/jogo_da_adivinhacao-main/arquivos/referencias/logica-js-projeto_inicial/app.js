alert("Bem vindo ao jogo da advinhacao")


const numeroSecreto = 4;

var chute = prompt("Chute um numero de 1 a 10")
 


if (chute == numeroSecreto) {
    alert ("Voce acertou!!")
}
else
{ 
    alert ("Voce errou!!!!!!!!!")

    if (chute < numeroSecreto) {
        alert(`o numero secreto é maior que ${chute}`)
    }
    else
    {
        alert(`o numero secreto é menor que ${chute}`)

       
    };
}