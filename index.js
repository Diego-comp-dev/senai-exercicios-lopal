// Crie um programa que peça o nome do usuário e exiba uma saudação personalizada no console.
// let nome = prompt("Digite seu nome:")
// alert(`Olá, bom dia ${nome}`)

// Peça dois números ao usuário e exiba a soma, a subtração, a multiplicação e a divisão entre eles.
// let num_one = Number(prompt("Digite o primeiro numero:"))
// let num_two = Number(prompt("Digite o segundo numero:"))
// let soma = num_one + num_two
// alert(`A soma dos numeros é:${soma}`)

// Peça a idade do usuário e informe se ele é maior de idade ou menor de idade.
// let idade = Number(prompt("Digite sua idade:"))
// if (idade <18) {
//     alert("Você é menor de idade")
// } else{
//     alert("Você é maior de idade")
// }

// Peça um número e informe se ele é par ou ímpar.
// let num = Number(prompt("Digite um numero"))
// let lastnum = num % 10
// if(lastnum === 0 || lastnum === 2 || lastnum === 4 || lastnum === 6 || lastnum === 8){
//     alert(`seu numero é par porque termina com: ${lastnum}`)
// } else {
//     alert(`seu numero é impar porque termina com: ${lastnum}`)
// }

// Peça três números e informe qual é o maior entre eles.
// let num_one = Number(prompt("Digite o primeiro numero:"))
// let num_two = Number(prompt("Digite o segundo numero:"))
// let num_three = Number(prompt("Digite o terceiro numero:"))
// if (num_one > num_two && num_one > num_three) {
//     alert(`O primeiro numero é o maior: ${num_one}`)
// } else if (num_two > num_one && num_two > num_three){
//     alert(`O segundo numero é o maior: ${num_two}`)
// } else if(num_three > num_one && num_three > num_two) {
//     alert(`O terceiro numero é o maior: ${num_three}`)
// } else {
//     alert("Digite numeros diferentes um dos outros")
// }

// Peça a nota de um aluno e informe se ele foi aprovado, ficou em recuperação ou foi reprovado, considerando as faixas que você definir.
// let nota = Number(prompt("Digite sua nota:"))
// if (nota >= 6 && nota <= 10) {
//     alert(`Voce foi aprovado com a sua nota ${nota}`)
// } else if(nota < 6 && nota >=4){
//     alert(`Voce esta de recuperação com a sua nota ${nota}`)
// } else if(nota <4 && nota >= 0) {
//     alert(`Voce foi reprovado com a sua nota ${nota}`)
// } else{
//     alert("Nota invalida, digite uma nota entre 0 e 10")
// }

// Peça o preço de um produto e a quantidade desejada, calcule o valor total e aplique um desconto caso a quantidade seja maior que um valor definido por você.
let valor = Number(prompt("Digite o valor do seu produto:"))
let quant = Number(prompt("Digite a quantidade  desejada:"))      
let valor_total = valor * quant
let desconto = valor_total * 0.9
if (quant >= 5) {
    alert(`Voce ganhou um desconto de 10%, o valor a pagar é: ${desconto}R$`)
} else{
    alert(`Voce não ganhou desconto, o valor a pagar é: ${valor_total}R$`)
}