let btns = document.querySelectorAll(".piano-wrapp .btn")

function playNote(note){
    let audio = new Audio();  // Создаём новый элемент Audio
    audio.src = `/audio/${note}.mp3`; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
}

btns.forEach((elems) =>{
    elems.addEventListener('mousedown', (e)=>{
        playNote(e.target.dataset.sound)
        e.target.classList.add('active')
    });
    elems.addEventListener('mouseup', (e)=>{ e.target.classList.remove('active') });
   
   
    document.addEventListener('keydown', (e)=>{
        if(e.code == elems.value)
        {
            playNote(elems.dataset.sound)
            elems.classList.add('active')
        }
    })

    document.addEventListener('keyup', (e)=>{
        if(e.code == elems.value) elems.classList.remove('active')
    })


})


