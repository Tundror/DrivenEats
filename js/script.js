function selecionar1(opcaoSelecionada, idCheck){
    const botaoAnterior = document.querySelector('.selecionado-f1');
    if(botaoAnterior !== null){
        botaoAnterior.classList.remove('selecionado-f1');
    }
    const botaoSelecionado = document.querySelector(opcaoSelecionada);
    botaoSelecionado.classList.add('selecionado-f1');
    const checkAnterior = document.querySelector('.checkSelecionado-f1')
    if(checkAnterior !== null){
        checkAnterior.classList.remove('checkSelecionado-f1')
    }
    const checkSelecionado = document.querySelector(idCheck);
    checkSelecionado.classList.add('checkSelecionado-f1');
    enableButton();
}
function selecionar2(opcaoSelecionada, idCheck){
    const botaoAnterior = document.querySelector('.selecionado-f2');
    if(botaoAnterior !== null){
        botaoAnterior.classList.remove('selecionado-f2');
    }
    const botaoSelecionado = document.querySelector(opcaoSelecionada);
    botaoSelecionado.classList.add('selecionado-f2');
    const checkAnterior = document.querySelector('.checkSelecionado-f2')
    if(checkAnterior !== null){
        checkAnterior.classList.remove('checkSelecionado-f2')
    }
    const checkSelecionado = document.querySelector(idCheck);
    checkSelecionado.classList.add('checkSelecionado-f2');
    enableButton();
}
function selecionar3(opcaoSelecionada, idCheck){
    const botaoAnterior = document.querySelector('.selecionado-f3');
    if(botaoAnterior !== null){
        botaoAnterior.classList.remove('selecionado-f3');
    }
    const botaoSelecionado = document.querySelector(opcaoSelecionada);
    botaoSelecionado.classList.add('selecionado-f3');
    const checkAnterior = document.querySelector('.checkSelecionado-f3')
    if(checkAnterior !== null){
        checkAnterior.classList.remove('checkSelecionado-f3')
    }
    const checkSelecionado = document.querySelector(idCheck);
    checkSelecionado.classList.add('checkSelecionado-f3');
    enableButton();
}
function enableButton(){
    const selecaoum = document.querySelector('.selecionado-f1');
    const selecaodois = document.querySelector('.selecionado-f2');
    const selecaotres = document.querySelector('.selecionado-f3');
    if(selecaoum !== null && selecaodois !== null && selecaotres !== null)
    {
        document.querySelector('button').disabled = false;
        const botao = document.querySelector('button');
        botao.classList.add('verde');
        botao.textContent = "Fechar pedido"
        console.log(botao);
    }
}