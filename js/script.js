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
        document.querySelector('.botao-footer').disabled = false;
        const botao = document.querySelector('.botao-footer');
        botao.classList.add('verde');
        botao.textContent = "Fechar pedido"
    }
}
function confirmarpedido(){
    const precoum = document.querySelector('.selecionado-f1 .precoreal');
    const precodois = document.querySelector('.selecionado-f2 .precoreal');
    const precotres = document.querySelector('.selecionado-f3 .precoreal');
    const precorealum = Number(precoum.textContent);
    const precorealdois = Number(precodois.textContent);
    const precorealtres = Number(precotres.textContent);
    const total = precorealdois + precorealtres + precorealum;
    const totalreal = total.toFixed(2);
    var s = totalreal.toString();//27.70
    var index = 2;
    s = s.substring(0, index) + ',' + s.substring(index + 1);
    const comidaum = document.querySelector('.selecionado-f1 .titulo-comida').innerHTML;
    const comidadois = document.querySelector('.selecionado-f2 .titulo-comida').innerHTML;
    const comidatres = document.querySelector('.selecionado-f3 .titulo-comida').innerHTML;
    const confirmarPrato = document.querySelector(".pedidoum-um");
    confirmarPrato.textContent=comidaum;
    const confirmarBebida = document.querySelector(".pedidodois-um");
    confirmarBebida.textContent=comidadois;
    const confirmarSobremesa = document.querySelector(".pedidotres-um");
    confirmarSobremesa.textContent=comidatres;
    document.querySelector('.pedidoum-dois').innerHTML=document.querySelector('.selecionado-f1 .preco').innerHTML;
    document.querySelector('.pedidodois-dois').innerHTML=document.querySelector('.selecionado-f2 .preco').innerHTML;
    document.querySelector('.pedidotres-dois').innerHTML=document.querySelector('.selecionado-f3 .preco').innerHTML;
    document.querySelector('.pedidototal-dois').innerHTML="R$ " + s;
    document.querySelector('.confirmar').classList.add('aparecer');
    document.querySelector('.opaco').classList.add('aparecer');
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
    var s = totalreal.toString();//27.70
    var index = 2;
    s = s.substring(0, index) + ',' + s.substring(index + 1);
    console.log(s);
    const comidaum = document.querySelector('.selecionado-f1 .titulo-comida');
    const comidadois = document.querySelector('.selecionado-f2 .titulo-comida');
    const comidatres = document.querySelector('.selecionado-f3 .titulo-comida');
    const nome = prompt("Digite seu nome");
    const endereco = prompt("Digite seu endereco");
    const nomeurl = nome.replaceAll(' ', '+');
    const enderecourl = endereco.replaceAll(' ', '+');
    let textoComidaUm=condicaoum(comidaum);
    let textoComidaDois=condicaodois(comidadois);
    let textoComidaTres=condicaotres(comidatres);
    console.log(textoComidaUm);
    let link = "https://wa.me/5518999999999?text=Ol%c3%a1%2c+gostaria+de+fazer+o+pedido%3a%0d%0a-+Prato%3a+" + textoComidaUm + "%0d%0a-+Bebida%3a+" + textoComidaDois + "%0d%0a-+Sobremesa%3a+" + textoComidaTres + "%0d%0aTotal%3a+R%24+" + s + "%0A%0ANome%3A%20" + nomeurl + "%0AEndere%C3%A7o%3A%20" + enderecourl;
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
function cancelar(){
    document.querySelector(".confirmar").classList.remove("aparecer");
}