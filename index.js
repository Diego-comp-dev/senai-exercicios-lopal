// let nome = prompt("Digite seu nome:")

// alert(`Olá, bom dia ${nome}`)

// let num_one = Number(prompt("Digite o primeiro numero:"))
// let num_two = Number(prompt("Digite o segundo numero:"))
// let soma = num_one + num_two
// alert(`A soma dos numeros é:${soma}`)

// let idade = Number(prompt("Digite sua idade:"))
// if (idade <18) {
//     alert("Você é menor de idade")
// } else{
//     alert("Você é maior de idade")
// }

let num = Number(prompt("Digite um numero"))
let lastnum = num % 10
if(lastnum === 0 || lastnum === 2 || lastnum === 4 || lastnum === 6 || lastnum === 8){
    alert(`seu numero é par porque termina com: ${lastnum}`)
} else {
    alert(`seu numero é impar porque termina com: ${lastnum}`)
}