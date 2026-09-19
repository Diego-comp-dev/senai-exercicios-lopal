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
let num_one = Number(prompt("Digite o primeiro numero:"))
let num_two = Number(prompt("Digite o segundo numero:"))
let num_three = Number(prompt("Digite o terceiro numero:"))
if (num_one > num_two && num_one > num_three) {
    alert(`O primeiro numero é o maior: ${num_one}`)
} else if (num_two > num_one && num_two > num_three){
    alert(`O segundo numero é o maior: ${num_two}`)
} else if(num_three > num_one && num_three > num_two) {
    alert(`O terceiro numero é o maior: ${num_three}`)
} else {
    alert("Digite numeros diferentes um dos outros")
}