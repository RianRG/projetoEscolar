const bt = document.querySelector('.bar');

bt.addEventListener('click', () =>{
    document.querySelector('header').classList.toggle('ativei');
})

function trocarImg(img){
    document.querySelector('.prin img').src=(img);

    document.querySelector('.prin').classList.add('animei');

    setTimeout(() =>{
        document.querySelector('.prin').classList.remove('animei');
    }, 400)
}