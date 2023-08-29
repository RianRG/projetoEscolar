
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

const slideArea = document.querySelector('.bloco');
const comentsCreate = async () =>{
  const users = await getUsers();

  users.forEach(item =>{
    const { firstName, secondName, password: comment } = item;
    const div = document.createElement('div');
    const h4 = document.createElement('h4');
    const p = document.createElement('p');

    div.classList.add('conteudo');
    h4.innerHTML = `${firstName} ${secondName}`;
    p.innerHTML = comment
    div.appendChild(h4);
    div.appendChild(p);
    slideArea.appendChild(div);
  })
  
}
comentsCreate();

// slider
const btEsq = document.querySelector('#coment .esq');
const btDir = document.querySelector('#coment .dir');
const area = document.querySelector('#coment .bloco');
const load = document.querySelector('#coment .loading')

//button resets
btEsq.setAttribute("disabled", "true");
btDir.setAttribute("disabled", "true");
setTimeout(() =>{
  load.style.opacity=0;
  area.style.color='black';
  
  const block = document.querySelectorAll('#coment .conteudo');
  let value = 0;
  const divWidth = block[0].offsetWidth + 100;
  const limite = -(block.length - 1) * divWidth;
  console.log(block);


  const activeSlide = () => {
    block.forEach((block) => {
      block.style.transform = `translateX(${value}px)`
    })
  }

  btDir.removeAttribute("disabled");

  //button slides mechanics
  btDir.addEventListener('click', () => {
    if (value > limite) {
      value -= divWidth;
    }

    if(value==-divWidth*(block.length-1)){
      btDir.setAttribute('disabled', 'true');
    } else if(value!=0){
      btEsq.removeAttribute('disabled');
    }

    activeSlide();
  });

  btEsq.addEventListener('click', () => {
    if (value < 0) {
      value += divWidth;
    }
    if(value==0){
      btEsq.setAttribute('disabled', 'true');
    } else if(value!=1791){
      btDir.removeAttribute('disabled');
    }
    
    activeSlide();
  });

}, 3000);