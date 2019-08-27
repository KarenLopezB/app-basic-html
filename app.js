const buttons = document.querySelectorAll('button');

let playNote = event => {
    console.log(event.target)
    const button = event.target;
    const note = button.dataset.note;
    console.log(`audio${note}`); //concatenar un texto con emascript 6 (atajo para poner las comillas invertidas : alt+96, pero en este teclado es : ctrl+alt+(icono)) 
    const audio = document.getElementById(`audio${note}`); 
    audio.pause(); //si se da click muchas veces seguidas, esto hace que se detenga el audio hasta que pare y se vuelva a dar click para reproducirse
    audio.currentTime = 0; //para reiniciar el audio, desde cero (0)
    audio.play(); //para que el audio vuelva a reproducirse
}

/////si quieres poner un dataset, debes poner data-(y el nombre del data), ejemplo; "data-note="

buttons.forEach(
    button => button.addEventListener('click', playNote)
);

const keyNoteDown = event =>{
    const key =event.key;
    console.log(event);
    const button = document.querySelector(`button[data-key="${key}"]`)
    if(button) button.click();
}

document.addEventListener('keydown', 
    event => {
        const key = event.key;
        const button = document.querySelector(`button[data-key="${key}"]`);
        if(button) button.click();
    }
);
// git pull //para que sirve el comando pull
// git add // para que sirve y como se usa
// git commit // para que sirve ese comando
// git push // para que sirve
// git merch // para que sirve
// git branch // para que sirve, que maneras hay para usar git branch, hay dos formas
// git checkout // para que sirve