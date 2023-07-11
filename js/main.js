console.log('Rian Gomes, INF11')

const bt = document.querySelector('.bar');

bt.addEventListener('click', function menuzin(){
    document.querySelector('header').classList.toggle('ativei');
})

function trocarImg(img){
    document.querySelector('.prin img').src=(img);
    
    document.querySelector('.prin').classList.add('animei');
    
    setTimeout(() =>{
        document.querySelector('.prin').classList.remove('animei');
    }, 400)
}
//scrollreveal

const alvo = document.querySelectorAll('[data-anim]');

function scrollRev(elemento){
    const windowTop = window.pageYOffset + window.innerHeight*0.75;

    alvo.forEach((elemento) =>{
        if(windowTop>elemento.offsetTop){
            elemento.classList.add('animei');
        } else{
            elemento.classList.remove('animei');
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
maquina(frase);

function maquina(elemento){
    const texto = elemento.innerHTML.split('');
    elemento.innerHTML='';
    
    texto.forEach((letra, k) =>{
        setTimeout((texto) =>{
            elemento.innerHTML+=letra;
        }, 90*k)
    })
}

// slider
// queria fazer um slide vertical mas n dava pelo tamanho dos textoskjjjkkk

const btDir = document.querySelector('#coment .dir');
const btEsq = document.querySelector('#coment .esq');
btDir.addEventListener('click', () =>{
    document.querySelector('#coment .bloco').classList.add('esquerda');
})

btEsq.addEventListener('click', () =>{
    document.querySelector('#coment .bloco').classList.remove('esquerda');
})
