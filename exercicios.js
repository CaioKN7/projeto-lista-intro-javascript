// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
/* function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
} */

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
   const altura = +prompt("Me mande a altura do retangulo")
   const largura = +prompt("Me mande a largura do retangulo")
   const area = altura*largura
   console.log(area)

}


// EXERCÍCIO 02
 function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = +prompt("me envie o ano atual")
   const anoDeNascimento = +prompt("Agora me envie seu ano de nascimento")
   const idade = anoAtual-anoDeNascimento
   console.log(idade)

}

 // EXERCÍCIO 03
 function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return imc = peso/(altura*altura)
}

// EXERCÍCIO 04
 function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Me informe o seu nome")
  const idade = prompt("Agora me informe a sua idade")
  const email = prompt("Por fim, me informe o seu melhor email")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

 // EXERCÍCIO 05 - FAZER DEPOIS
 function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Me diga sua cor favorita")
  const cor2 = prompt("Me diga mais uma cor que gosta")
  const cor3 = prompt("Mais uma cor para finalizar")
  const resposta = [cor1, cor2, cor3]

  console.log(resposta)


}

// EXERCÍCIO 06
 function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const stringMaiuscula = string.toUpperCase()
  return stringMaiuscula
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const ingressosNecessarios = custo / valorIngresso
  return ingressosNecessarios

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
 return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
return array.pop()
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const primeiroNumero = array[0];
  const ultimoNumero = array[array.length - 1];

  array[0] = ultimoNumero;
  array[array.length - 1] = primeiroNumero;

  return array;

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}