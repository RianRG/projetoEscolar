console.log('Rian Gomes, INF11')

//bt menu
const bt = document.querySelector('.bar');

bt.addEventListener('click', function menuzin(){
    document.querySelector('header').classList.toggle('ativei');
})

//troca img
function trocarImg(img){
    document.querySelector('.prin img').src=(img);
    
    document.querySelector('.prin').classList.add('animei');
    
    setTimeout(() =>{
        document.querySelector('.prin').classList.remove('animei');
    }, 400)
}
//scrollreveal

const alvo = document.querySelectorAll('[data-anim]');

function scrollRev(){
    const windowTop = window.pageYOffset + window.innerHeight*0.75;
    alvo.forEach((alvo) =>{
        if(windowTop>alvo.offsetTop){
            alvo.classList.add('animei');
        } else{
            alvo.classList.remove('animei');
        }
    })
}

scrollRev();
if(alvo.length){
    window.addEventListener('scroll', () =>{
        scrollRev();
    })
}
// maquina de escrever

const frase = document.querySelector('.retan h1');

function maquina(elemento){
    const letras = elemento.innerHTML.split('');
    elemento.innerHTML='';
    letras.forEach((cont, k) =>{
        setTimeout((letras) =>{
            elemento.innerHTML+=cont;
        }, 120*k)
    })
}

maquina(frase);
// slider
// queria inovar fazendo um slide vertical mas n dava pelo tamanho dos textoskjjjkkk

const btEsq = document.querySelector('#coment .esq');
const btDir = document.querySelector('#coment .dir');
const bloco = document.querySelectorAll('#coment .conteudo');
let valor = 0;
const divWidth = bloco[0].offsetWidth+100;
const limite = -(bloco.length-1)*divWidth;

btDir.addEventListener('click', () =>{
    if(valor>limite){
        valor-=divWidth;
        bloco.forEach((bloco) =>{
            bloco.style.transform=`translateX(${valor}px)`
        })
    }
})

btEsq.addEventListener('click', () =>{
    if(valor<0){
        valor+=divWidth;
        bloco.forEach((bloco) =>{
            bloco.style.transform=`translateX(${valor}px)`
        })
    }
})