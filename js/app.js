let altura = 0 ;
let largura = 0 ;
let tempo = 15 ;
let vida = 1
let dificuldadeJogo = 1500 
let nivel = window.location.search

nivel = nivel.replace('?', '');

console.log(nivel)

function nivelJogo() {

    if(nivel == 'facil'){

        dificuldadeJogo = 1500; 

    }else if(nivel == 'medio'){

        dificuldadeJogo = 1000; 


    }else if(nivel == 'dificil'){

        dificuldadeJogo = 800; 


    }
    



}



function ajustaTamanhoJogo() {

    altura = window.innerHeight; 
    largura = window.innerWidth; 

    


}

ajustaTamanhoJogo()


function contador() {

    let contador = document.getElementById('contador')


    return contador; 


}

function cronometro (){
    let mostrador = contador();
     setInterval( ()=> {

        tempo-= 1 
        if(tempo < 0 ) {

            clearInterval(mostrador); 
            clearInterval(interval);

            //window.location.href = 'https://www.google.com'; 

        }else{

            mostrador.innerHTML = tempo; 


        }

    }, 2000)


}



function criandoElemento() {

    let posicaoX = Math.floor(Math.random() * largura) -100; 
    let posicaoY = Math.floor(Math.random() * altura) -100;
    
    posicaoX = posicaoX < 0? 0 : posicaoX; 
    posicaoY = posicaoY <  0? 0 : posicaoY; 
    
    console.log(posicaoX, posicaoY);    

        if(document.getElementById('Mosquitinho')) {
            
            document.getElementById('Mosquitinho').remove()

            if(vida > 3){





                

            }else{

                document.getElementById(`vida${vida}`).src = '../imagens/coracao_vazio.png'; 

                vida++
            }

            

        }



    let mosquito = document.createElement('img') ; 

        mosquito.src = '../imagens/mosca.png'; 
        
        mosquito.className = tamanhoDiversos() + ' ' + alterandoLado(); 
        mosquito.id = 'Mosquitinho'; 
        mosquito.style.top = posicaoY + 'px';
        mosquito.style.left = posicaoX + 'px';
        mosquito.style.position = 'absolute';
        mosquito.onclick = function () {

            this.remove()


        }
        document.body.appendChild(mosquito); 



}




function tamanhoDiversos() {

    let Prandomica = Math.floor(Math.random() * 3); 

    switch(Prandomica){

        case 0: 
        return 'mosquito1';
        case 1: 
        return 'mosquito2';
        case 2: 
        return 'mosquito3'; 

    }


}



function alterandoLado() {

    let ladoRandomico = Math.floor(Math.random() * 3 ); 


    switch(ladoRandomico){

        case 0: 

        return 'ladoA'; 

        case 1: 

        return 'ladoB';






    }




}

cronometro(); 



