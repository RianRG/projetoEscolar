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

// maquina de escrever

const frase = document.querySelector('.retan h1');
escreve(frase);

function escreve(elemento){
    const texto = elemento.innerHTML.split('');
    elemento.innerHTML='';

    texto.forEach((letra, k) =>{
        setTimeout((texto) =>{
            elemento.innerHTML+=letra;
        }, 90*k)
    })
}