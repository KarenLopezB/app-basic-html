const buttons = document.querySelectorAll('button'); 

const playnote = event =>{
    console.log(event);
    alert('hola');
}

buttons.forEach(
    button => button.addEventListener('click', playnote)
);


//alert('dude js working!');
//let btnDo = document.getElementById('btnDo');
//btnDo.addEventListener('click', ()=>{alert('yolo')})
//let btnDO =document.getElementById('btnDO');
//btnDO.addEventListener ('click', ()=>{alert('yolo')});

