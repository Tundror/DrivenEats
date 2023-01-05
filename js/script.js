function selecionar(opcaoSelecionada){
const botaoAnterior = document.querySelector('.selecionado');
console.log(botaoAnterior);
if(botaoAnterior !== null){
botaoAnterior.classList.remove('selecionado');
}
console.log(opcaoSelecionada);
const botaoSelecionado = document.querySelector(opcaoSelecionada);
console.log(botaoSelecionado);
botaoSelecionado.classList.add('selecionado');

}