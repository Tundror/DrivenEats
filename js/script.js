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
}