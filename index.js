let input = document.querySelectorAll('.input');
let button = document.querySelector('.button')

input.forEach(function(item){
    item.addEventListener('input', () =>{
        console.log("ta funcional")

        if(item.value !== ""){
            item.classList.add('preenchido');
            item.classList.remove('vazio');
        }else{
            item.classList.add('vazio');
            item.classList.remove('preenchido');
        }
    });

    button.addEventListener('click', () => {
        if(item.value !== ""){
            item.classList.add('preenchido');
            item.classList.remove('vazio');
        }else{
            item.classList.add('vazio');
            item.classList.remove('preenchido');
        }
    })
});