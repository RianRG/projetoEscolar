//mecanica produtos
const icone = document.querySelectorAll('#itens .compra i.bx.bx-x');
const compras = document.querySelectorAll('#itens .compra');

compras.forEach(e =>{
    e.addEventListener('click', () =>{
        e.classList.add('abre');
        
        for(const item of compras){
            if(item!==e){
            item.classList.remove('abre');
            }
        }
       
        icone.forEach((i) =>{
            i.addEventListener('click', (event) =>{
                event.stopPropagation();
                e.classList.remove('abre');
            })
        })
    }) 
})
