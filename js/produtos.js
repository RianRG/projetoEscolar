//mecanica produtos
const icone = document.querySelectorAll('#itens .compra i.bx.bx-x');
const compras = document.querySelectorAll('#itens .compra');

compras.forEach((e) =>{
    e.addEventListener('click', () =>{

        for(const itens of compras){
            if(itens!==e){
                itens.classList.remove('abre');
            }
        }
        e.classList.add('abre');
        icone.forEach((i) =>{
            i.addEventListener('click', (event) =>{
                event.stopPropagation();
                e.classList.remove('abre');
            })
        })
    }) 
})
