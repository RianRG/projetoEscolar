//mecanica produtos
const icone = document.querySelectorAll('#itens .compra i.bx.bx-x');
const compras = document.querySelectorAll('#itens .compra');

compras.forEach((e) =>{
    e.addEventListener('click', () =>{
        compras.forEach((compra) =>{
            if(compra!==e){
                compra.classList.remove('abre');
            }
        })
        e.classList.add('abre');
        icone.forEach((i) =>{
            i.addEventListener('click', (event) =>{
                event.stopPropagation();
                e.classList.remove('abre');
            })
        })
    }) 
})
