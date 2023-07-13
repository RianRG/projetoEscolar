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
    const letra = elemento.innerHTML.split('');
    elemento.innerHTML='';
    letra.forEach((cont, i) =>{
        setTimeout((letra) =>{
            elemento.innerHTML+=cont;
        }, 120*i)
    })
}

maquina(frase);
// slider
// queria fazer um slide vertical mas n dava pelo tamanho dos textoskjjjkkk
// const bloco = document.querySelectorAll('#coment .conteudo');
// const btDir = document.querySelector('#coment .dir');
// const btEsq = document.querySelector('#coment .esq');
// btDir.addEventListener('click', () =>{
//     bloco.forEach((bloco) =>{
//         bloco.style.transform="translateX(-400px)";
//     })
// })

// btEsq.addEventListener('click', () =>{
//     bloco.forEach((bloco) =>{
//         bloco.style.transform="translateX(400px)";
//     })
// })


const bloco = document.querySelectorAll('#coment .conteudo');
const btDir = document.querySelector('#coment .dir');
const btEsq = document.querySelector('#coment .esq');
let translateValue = 0;
const divWidth = bloco[0].offsetWidth+100;
const maxTranslateValue = -(bloco.length -1) * divWidth;

btDir.addEventListener('click', () => {
  if (translateValue > maxTranslateValue) {
    translateValue -= divWidth;
    bloco.forEach((bloco) => {
      bloco.style.transform = `translateX(${translateValue}px)`;
    });
  }
});

btEsq.addEventListener('click', () => {
  if (translateValue < 0) {
    translateValue += divWidth;
    bloco.forEach((bloco) => {
      bloco.style.transform = `translateX(${translateValue}px)`;
    });
  }
});
