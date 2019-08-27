const buttons = document.querySelectorAll('button');

let playNote = event => {
    console.log(event.target)
    const button = event.target;
    const note = button.dataset.note;
    console.log(`audio${note}`); //concatenar un texto con emascript 6 (atajo para poner las comillas invertidas : alt+96, pero en este teclado es : ctrl+alt+(icono)) 
    const audio = document.getElementById(`audio${note}`);
    audio.pause();
    audio.currentTime = 0; 
    audio.play();
}

buttons.forEach(
    button => button.addEventListener('click', playNote)
);

document.addEventListener('keydown', 
    event => {
        const key = event.key;
        const button = document.querySelector(`button[data-key="${key}"]`);
        if(button) button.click();
    }
);