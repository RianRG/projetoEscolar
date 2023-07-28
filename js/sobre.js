// slider
// queria inovar fazendo um slide vertical mas n dava pelo tamanho dos textoskjjjkkk

const btEsq = document.querySelector('#coment .esq');
const btDir = document.querySelector('#coment .dir');
const bloco = document.querySelectorAll('#coment .conteudo');
let valor = 0;
const divWidth = bloco[0].offsetWidth + 100;
const limite = -(bloco.length - 1) * divWidth;

const activeSlide = () => {
  bloco.forEach((bloco) => {
    bloco.style.transform = `translateX(${valor}px)`
  })
}

btDir.addEventListener('click', () => {
  if (valor > limite) {
    valor -= divWidth;
  } else {
    valor = 0; // Volta para o primeiro slide
  }
  activeSlide();
});

btEsq.addEventListener('click', () => {
  if (valor < 0) {
    valor += divWidth;
  } else {
    valor = limite; // Volta para o último slide
  }
  activeSlide();
});
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
