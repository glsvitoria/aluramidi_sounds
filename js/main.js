const teclas = document.querySelectorAll('.tecla')

for(let btn of teclas){
    btn.addEventListener('click', tocarSom)
}

function tocarSom(btn){
    const som = btn.path[0].classList[1]

    document.querySelector(`#som_${som}`).play()
}