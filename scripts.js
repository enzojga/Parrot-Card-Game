function distribuiCartas(quantidadeCartas){
    let teste = document.querySelector('.cartas');
    const div = '<div class="carta"></div>'
    const array = [];
    for(let i =0; i < quantidadeCartas ; i++){
        array.push(div);
        teste.innerHTML = array;
    }
}

function perguntaPares(){
    par = Number(prompt("Insira a quantidade de cartas que voce quer jogar"));
    if(par%2 !== 0 || isNaN(par) || par === 0 ){
        perguntaPares();
    }else if(par >=4 && par <=14){
        alert('Pode Jogar');
        distribuiCartas(par);
    }else{
        perguntaPares();
    }
}

perguntaPares();