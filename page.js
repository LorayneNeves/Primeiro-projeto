const button = document.querySelector('.lading-button');
const form = document.querySelector('.lading-form');
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();

    const nav = document.getElementById('nav');
    nav.classList.toggle('active');

    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);

    if (active) {

        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');

    } else {

        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');

    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
const Button = (event) => {

    event.preventDefault();
    window.location.href = 'index.html';

}

form.addEventListener('submit', Button);


function typeWriter(elemento){

    const textoArray = elemento.innerHTML.split('');

    elemento.innerHTML = '';
    textoArray.forEach((letra, i) =>{

        setTimeout(() =>{
            elemento.innerHTML +=letra;
        }, 50 * i)
        
    });
}

const titulo = document.querySelector('b');

typeWriter(titulo);