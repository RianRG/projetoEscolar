console.log('Rian Gomes, INF11')

//mecanica produtos
const icone = document.querySelectorAll('#itens .compra i');
const compra = document.querySelectorAll('#itens .compra');

compra.forEach((e) =>{
    e.addEventListener('click', () =>{
        e.classList.add('abre');
        document.querySelector('#itens').classList.add('display');

        icone.forEach((i) =>{
            i.addEventListener('click', (event) =>{
                event.stopPropagation();
                e.classList.remove('abre');
                document.querySelector('#itens').classList.remove('display');
            })
        })
    })
})


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

//header anim
const imgfundo = document.querySelector('#inicio img');
const header = document.querySelector('header');
let windowTop;
const headerAnim = () =>{

    if(windowTop>114){
        header.style.background='rgba(52, 70, 106, .7)';
        header.style.backdropFilter='brightness(70%) blur(2px)';
    } else{
        header.style.background='#285551';
    }
}

headerAnim();

window.addEventListener('scroll', () =>{
    windowTop=pageYOffset
    headerAnim();
})

//maquina de escrever

const frase = document.querySelector('.retan h1');

function maquina(elemento){
    const letra = elemento.innerHTML.split('');
    elemento.innerHTML='';
    letra.forEach((cont, k) =>{
        setTimeout((letra) =>{
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

const activeSlide = () =>{
    bloco.forEach((bloco) =>{
        bloco.style.transform=`translateX(${valor}px)`
    })
}

btDir.addEventListener('click', () =>{
    if(valor>limite){
        valor-=divWidth;
        activeSlide();
    }
})
btEsq.addEventListener('click', () =>{
    if(valor<0){
        valor+=divWidth;
        activeSlide();
    }
})