
const readline = require('readline'); //essa função importa o módulo readline do node.js para criar uma interface de linha de comando

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); //essa função cria uma interface de linha de comando com o readline

let cssProperties = []; //: essa variável cria um array vazio
const colors = require('colors');

function sortProperties(){
  cssProperties.sort();
  for (let prop of cssProperties) {
    console.log(prop.red);
  }
} //essa função ordena as propriedades em ordem alfabetica e as imprime

function getInput(){
  r1.question("Digite a propriedade de CSS ou digite 'SAIR' para finalizar: ".green, (input) => {
    if (input.toLowerCase() === 'sair') {
      console.log("LISTA CSS:".magenta);
      sortProperties();
      r1.close();
    } else {
      cssProperties.push(input);
      getInput();
    }
  });
} // essa função adiciona as propriedades ao array e chama a função getInput novamente para continuar o loop

getInput(); //essa função chama a função getInput pela primeira vez