//mecanica produtos
const icone = document.querySelectorAll('#itens .compra i.bx.bx-x');
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
