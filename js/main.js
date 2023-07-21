console.log('Rian Gomes, INF11')

//bt menu
const bt = document.querySelector('.bar');

bt.addEventListener('click', function menuzin(){
    document.querySelector('header').classList.toggle('ativei');
})
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