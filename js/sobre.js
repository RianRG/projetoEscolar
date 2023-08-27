
//maquina de escrever

const frase = document.querySelector('.retan h1');

function maquina(elemento){
    const letra = elemento.innerHTML.split('');
    elemento.innerHTML='';
    letra.forEach((cont, k) =>{
        setTimeout(letra =>{
            elemento.innerHTML+=cont;
        }, 120*k)
    })
}

maquina(frase);



//api users

const getUsers = async () =>{
  const fetchUsers = await fetch('https://api-users.cyclic.app');
  const res = await fetchUsers.json();
  return res;
}
// console.log(getUsers());
const slideArea = document.querySelector('.bloco');
const comentsCreate = async () =>{
  const users = await getUsers();

  users.forEach(item =>{
    const { firstName, secondName, password } = item;
    const div = document.createElement('div');
    const h4 = document.createElement('h4');
    const p = document.createElement('p');

    div.classList.add('conteudo');
    h4.innerHTML = `${firstName} ${secondName}`;
    p.innerHTML = password
    div.appendChild(h4);
    div.appendChild(p);
    slideArea.appendChild(div);
  })
  
}
comentsCreate();

// slider
// queria inovar fazendo um slide vertical mas n dava pelo tamanho dos textoskk
setTimeout(() =>{


const btEsq = document.querySelector('#coment .esq');
const btDir = document.querySelector('#coment .dir');
const bloco = document.querySelectorAll('#coment .conteudo');
let valor = 0;
const divWidth = bloco[0].offsetWidth + 100;
const limite = -(bloco.length - 1) * divWidth;
console.log(bloco);


const activeSlide = () => {
  bloco.forEach((bloco) => {
    bloco.style.transform = `translateX(${valor}px)`
  })
}
//button resets
btEsq.style.opacity='0';
btEsq.style.cursor='default';

//button slides mechanics
btDir.addEventListener('click', () => {
  if (valor > limite) {
    valor -= divWidth;
  }
  console.log(valor);
  if(valor==-divWidth*(bloco.length-1)){
    btDir.style.opacity='0';
    btDir.style.cursor='default';
  } else if(valor!=0){
    btEsq.style.opacity='1';
    btEsq.style.cursor='pointer';
  }

  activeSlide();
});

btEsq.addEventListener('click', () => {
  if (valor < 0) {
    valor += divWidth;
  }
  if(valor==0){
    btEsq.style.opacity='0';
    btEsq.style.cursor='default';
  } else if(valor!=1791){
    btDir.style.opacity='1';
    btDir.style.cursor='pointer';
  }
  
  activeSlide();
});

}, 1000);