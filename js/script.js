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
    }
}
function pedido(){
    const precoum = document.querySelector('.selecionado-f1 .precoreal');
    const precodois = document.querySelector('.selecionado-f2 .precoreal');
    const precotres = document.querySelector('.selecionado-f3 .precoreal');
    const precorealum = Number(precoum.textContent);
    const precorealdois = Number(precodois.textContent);
    const precorealtres = Number(precotres.textContent);
    const total = precorealdois + precorealtres + precorealum;
    const totalreal = total.toFixed(2);
    const comidaum = document.querySelector('.selecionado-f1 .titulo-comida');
    const comidadois = document.querySelector('.selecionado-f2 .titulo-comida');
    const comidatres = document.querySelector('.selecionado-f3 .titulo-comida');
    console.log(comidaum.textContent);
    let textoComidaUm=condicaoum(comidaum);
    let textoComidaDois=condicaodois(comidadois);
    let textoComidaTres=condicaotres(comidatres);
    console.log(textoComidaUm);
    let link = "https://wa.me/5518999999999?text=Ol%c3%a1%2c+gostaria+de+fazer+o+pedido%3a%0d%0a-+Prato%3a+" + textoComidaUm + "%0d%0a-+Bebida%3a+" + textoComidaDois + "%0d%0a-+Sobremesa%3a+" + textoComidaTres + "%0d%0aTotal%3a+R%24+" + totalreal;
    console.log(link);
    document.querySelector('a').href = link;
}
function condicaoum(comidaum){
    let textoComidaUm = 0;
    if(comidaum.textContent === "Frango Yin Yang"){
        textoComidaUm = "Frango+Yin+Yang";
        return textoComidaUm;
    }
    else if(comidaum.textContent === "Hamburguer Art."){
        textoComidaUm = "Hamburguer+Art.";
        return textoComidaUm;
    }
    else if(comidaum.textContent === "Bife Acebolado"){
        textoComidaUm = "Bife+Acebolado";
        return textoComidaUm;
    }
    console.log(textoComidaUm);
}
function condicaodois(comidadois){
    if(comidadois.textContent === "Coquinha gelada"){
        let textoComidaDois = "Coquinha+gelada";
        return(textoComidaDois);
    }
    else if(comidadois.textContent === "Guarana Antartica"){
        let textoComidaDois = "Guarana+Antartica";
        return(textoComidaDois);
    }
    else if(comidadois.textContent === "Suco de laranja"){
        let textoComidaDois = "Suco+de+laranja";
        return(textoComidaDois);
    }
}
function condicaotres(comidatres){
    if(comidatres.textContent === "Pudim"){
        let textoComidaTres = "Pudim";
        return textoComidaTres;
    }
    else if(comidatres.textContent === "Sorvete de creme"){
        let textoComidaTres = "Sorvete+de+creme";
        return textoComidaTres;
    }
    else if(comidatres.textContent === "Creme de acai"){
        let textoComidaTres = "Creme+de+acai";
        return textoComidaTres;
    }
}