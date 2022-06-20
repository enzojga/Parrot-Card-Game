let contadorFinal = 0;
let numeroJogadas = 0;
let tempo=0;
function jogarNovamente(){
    let novoJogo = prompt('Deseja jogar novamente?');
    if(novoJogo === 'sim'){
        let documento = document.querySelector('.cartas');
        documento.innerHTML = '';
        perguntaPares();
        contadorFinal = 0;
        numeroJogadas = 0;
        tempo=0;
    }else if(novoJogo === 'não'){
        alert('Obrigado por jogar');
    }
}
function finalizarJogo(){
    if(contadorFinal === par){
        let segundos = document.querySelector('.contador').innerHTML;
        alert(`Parabens voce ganhou em ${numeroJogadas} jogadas e em ${segundos} segundos`);
        jogarNovamente();
    }
}
function adicionaCartas(array){
    for(i = 0; i < array.length; i++){
        let cartas = document.querySelector('.cartas');
        cartas.innerHTML += array[i];
        console.log(array[i]);
    }
    console.log(array.length);
}
function temporizador() {
    tempo++;
    document.querySelector(".contador").innerHTML = tempo;
}
function comparador() { 
	return Math.random() - 0.5; 
}
function desviraCarta(cartasViradas){
    let carta1 = cartasViradas[0].querySelector(' :nth-child(2)');
    console.log(carta1);
    let carta2 = cartasViradas[1].querySelector(' :nth-child(2)');
    console.log(carta2);
    carta1.classList.add('back-face');
    carta2.classList.add('back-face');

}
function viraCarta(carta){
    carta.classList.add('virada')
    let cartaSelecionada = carta.querySelector(' :nth-child(2)');
    cartaSelecionada.classList.remove('back-face');
    numeroJogadas++;
    verificaVirada();
   setTimeout(finalizarJogo,0500);
}
function verificaVirada(){
    let cartasViradas = document.querySelectorAll('.virada');
    if(cartasViradas.length === 2){
        if(cartasViradas[0].innerHTML === cartasViradas[1].innerHTML){
            contadorFinal = contadorFinal +2;
        }else{
            setTimeout(desviraCarta,1000,cartasViradas);    
        }
        let teste = document.querySelector('.virada');
        teste.classList.remove('virada');
        let teste2 = document.querySelector('.virada');
        teste2.classList.remove('virada');
    }
}

function distribuiCartas(quantidadeCartas){
    let cartas = document.querySelector('.cartas');
    const img = '<img src="imagens/front.png" alt="">'
    const array = [];
    let contador = 0;
    max = quantidadeCartas -1;
    for(i =0; i < quantidadeCartas ; i = i + 2){
        const div = `<div class="card" onclick="viraCarta(this)" data-identifier="card">
                        <div class="front-face face">${img}
                        </div>
                        <div class="back-face face" data-identifier="back-face">
                            <img src="imagens/gif${contador}.gif" alt="">
                        </div>
                    </div>`;

        array.push(div);
        array.push(div);

        /*
        let numero1 = geraNumeroRandom(0,max);
        let numero2 = geraNumeroRandom(0,max);

        if(array[numero1] === undefined){
            array[numero1] = div;
         }else{
             array.push(div);
        }
        if(array[numero2] === undefined){
            array[numero2] = div;
         }else{
             array.push(div);
        }*/
        array.sort(comparador)

        contador++;
    }
    adicionaCartas(array);
}

function perguntaPares(){
    par = Number(prompt("Insira a quantidade de cartas que voce quer jogar(Apenas numeros pares de 4 a 14)"));
    if(par%2 !== 0 || isNaN(par) || par === 0 ){
        perguntaPares();
    }else if(par >=4 && par <=14){
        distribuiCartas(par);
    }else{
        perguntaPares();
    }
    return par;
}
setInterval(temporizador,1000);
perguntaPares();

