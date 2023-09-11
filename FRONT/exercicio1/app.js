
function inicio(){
// let opcao = 0; 
opcao = prompt(`Selecione o exercício que deseja executar: 1 a 6:

1 - Calculo de numeros
2 - Nome e sobrenome
3 - Conversão de dolar
4 - Antecessor e sucessor
5 - Valor de metragem quadrada
6 - Calculo de consumo combustível
`
);
opcao = parseInt(opcao); 

switch(opcao) {
    case 1:
        exercicio1();
        console.log(`O selecionao foi o exercicio 1.`)
      // roda o exercicio 1
      break;
    case 2:
        exercicio2();
        console.log(`O selecionao foi o exercicio 2.`)
        // roda o exercicio 2
        break;
    case 3:
        exercicio3();
        console.log(`O selecionao foi o exercicio 3.`)
        // roda o exercicio 3
        break;
    case 4:
        exercicio4();
        console.log(`O selecionao foi o exercicio 4.`)
        // roda o exercicio 4
        break;
    
    case 5:
        exercicio5();
        console.log(`O selecionao foi o exercicio 5.`)
        // roda o exercicio 5
        break;
    
    case 6:
        exercicio6();
        console.log(`O selecionao foi o exercicio 6.`)
        // roda o exercicio 6
        break;
    
    default:
      console.log(`o valor não é valido!`);
      
  }
 
};
//1) Escreva um programa que receba 2 números e faça a soma entre eles. ( Utiliza alert( ) e prompt( ) )

function exercicio1(){


     let numero1;
     let numero2;
     let calculoNumeros;

    numero1 = prompt ("Insira o primeiro numero");
    numero2 = prompt ("Insira o segundo numero");

    numero1 = parseFloat(numero1);  // o parsefoat converte a string em int para possibilitar a conta
    numero2 = parseFloat(numero2);


    calculoNumeros = numero1 + numero2;
    console.log(`O valor da soma de ${numero1} + ${numero2} é:  ${calculoNumeros}`);

};



//2) Escreva um programa que pergunte o nome e o sobrenome do usuário e escreva na tela: "Olá, -usuário-".


function exercicio2(){
let nome = prompt ("digite seu primeiro nome:");
let sobrenome = prompt ("digite seu sobrenome:");

console.log(`Olá, ${nome} ${sobrenome} !!, bem vindo! `);
}

//3) Escreva uma calculadora que receba um valor em reais e converta para dólar. Considere o valor do dólar a R$4,95.


function exercicio3(){
    let valorReal = prompt ("Insira o valor em reais para ser convertido em dolar: ");
    let calculoDolar = valorReal / 4.95;

    calculoDolar = calculoDolar.toFixed(2);
    console.log(`O valor de ${valorReal} em reais é equivalente a ${calculoDolar} dolares! `);
    
    }
    




//4) Construa um algoritmo que leia um número inteiro na tela e responda o número antecessor e o sucessor.

function exercicio4(){
    let numeroInteiro;  
    let antecessor;  
    let sucessor; 

    numeroInteiro = prompt("Digite o número que você quer saber o antecessor e o sucessor:");
    
    numeroInteiro = parseFloat(numeroInteiro);
    antecessor = numeroInteiro-1;
    sucessor = numeroInteiro+1;
    console.log(`O número antecessor de ${numeroInteiro} é ${antecessor} e o sucessor é ${sucessor}.`);

}




//5) Construa um algoritmo que calcule o valor de um terreno baseado na sua área e valor por m2.

function exercicio5(){
    let valorM2;
    let largura;
    let comprimento;

    valorM2 = parseFloat(valorM2);
    largura = parseFloat(largura);
    comprimento = parseFloat(comprimento);

    valorM2 = prompt(`Digite o valor em Reais para o metro quadrado: `);
    largura = prompt(`Digite o valor em metros para a LARGURA do terreno: `);
    comprimento = prompt(`Digite o valor em metros para o COMPRIMENTO do terreno: `);

    calculoMetros = comprimento * largura;
    calculoValor = calculoMetros * valorM2;

    console.log(`O o terreno possui ${calculoMetros} metros quadrados e seu valor é de R$ ${calculoValor},00.`);
}


//6) Construa um algoritmo que leia a distância percorrida por um veículo em km e o total gasto em combustível em litros. No final deverá ser respondido o consumo médio deste veículo em km/l.

function exercicio6(){

let distancia;
let autonomia;
let valorCombustivel;


distancia = parseFloat(distancia);
autonomia = parseFloat(autonomia);
valorCombustivel = parseFloat(valorCombustivel);

distancia = prompt(`Digite a DISTANCIA que foi percorrida com o carro: `);
autonomia = prompt(`Digite a autonomia do carro km/l: `);
valorCombustivel = prompt(`Digite o valor do LITRO do combustível abastecido: `);

calculoLitros = distancia / autonomia;
calculoGastoGAs = calculoLitros * valorCombustivel;

console.log(`Se o veículo percorreu ${distancia}km, possui uma autonomia de ${autonomia} km/l e você pagou R$ ${valorCombustivel},00 por litro da gasolina.... `);
console.log(`Você gastou ${calculoLitros} litros de combustivel no percurso. O valor gasto foi de R$ ${calculoGastoGAs},00 `);

}
//Extra) Aproveite o programa do exercício 1 e refatore para que agora ele consiga fazer cálculos com as 4 operações (+, - * e /). 


inicio();

//exercicio3();