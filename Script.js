let botom1 = document.getElementById("botom");
let botom2 = document.getElementById("close");



const AbreBoton = ()=>{
    let header = document.querySelector("#encabezado-activate");
    header.style.display = "block"; 
}

const cierraBotom = ()=>{
    let header = document.querySelector("#encabezado-activate");
    header.style.display = "none"; 
    
}
botom1.addEventListener("click",AbreBoton);
botom2.addEventListener("click",cierraBotom);

var typed = new Typed('.typed', {
	stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
}); 
//ScrollReveal().reveal('.logo',{delay:1000});
//ScrollReveal().reveal('.contenedor-texto',{delay:2000});
ScrollReveal().reveal('.informacion',{delay:3000});
ScrollReveal().reveal('home',{delay:4000});


let videoBtn = document.querySelectorAll('.vid-btn');
videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

var typed2 = new Typed('.typed2', {
	stringsElement: '#cadenas-texto2', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 95, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
}); 

var typed3 = new Typed('.typed3', {
	stringsElement: '#cadenas-texto3', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 105, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
}); 

var typed4 = new Typed('.typed4', {
	stringsElement: '#cadenas-texto4', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 125, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
}); 

let boton_info = document.getElementById('Boton-1');
let boton_info2 = document.getElementById('Boton-2');
let boton_info3 = document.getElementById('Boton-3');
let contenedor = document.querySelector('.perfil-informacion');
let contenedor2 = document.querySelector('.perfil-informacion-2');
let contenedor3 = document.querySelector('.perfil-informacion-3');
const info_boton = ()=>{
	let contenedor = document.querySelector('.perfil-informacion');
	contenedor.style.display = 'flex';
};
const info_boton2 = ()=>{
	let contenedor = document.querySelector('.perfil-informacion-2');
	contenedor.style.display = 'flex';
};
const info_boton3 = ()=>{
	let contenedor = document.querySelector('.perfil-informacion-3');
	contenedor.style.display = 'flex';
}; 

boton_info.addEventListener('click',info_boton);
boton_info2.addEventListener('click',info_boton2);
boton_info3.addEventListener('click',info_boton3);

contenedor.addEventListener('click',()=>{
	contenedor.style.display = 'none';
})
contenedor2.addEventListener('click',()=>{
	contenedor2.style.display = 'none';
})
contenedor3.addEventListener('click',()=>{
	contenedor3.style.display = 'none';
})