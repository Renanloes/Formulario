let input = document.querySelectorAll('.input');

input.forEach(function(item){
    item.addEventListener('input', () =>{

        if(input.length > 0){
            item.classList.add('preenchido');
            item.classList.remove('vazio');

        }else if(input.length == 0){
            item.classList.add('vazio');
            item.classList.remove('preenchido');
        }
    });
});