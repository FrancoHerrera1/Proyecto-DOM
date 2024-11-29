// Función para el Popup!

let popup = document.getElementById("popup");

setTimeout(() => {
    popup.style.display = 'flex'

}, 5000)

// Funcionalidad para el boton CERRAR del Popup!

let closeBtn = document.getElementById('close-btn');

closeBtn.addEventListener('click', () => {

    popup.style.display = 'none';

})


// Funcionalidad para poner el titulo en movimiento!

let subtitulo = document.querySelector('.h2-mov');

let contenido = 'Sarah Glass Ceramics is a woman-owned pottery studio located in Fort Lauderdale. Our mission is to ' +
    'provide everyone of all skill levels a strong foundation and supportive environment to experience the ' +
    'relaxing art of pottery making. We are happy to provide studio space and equipment to let you channel ' +
    'your inner artist.';

let i = 0;

function escribir() {

    if (i < contenido.length) {
        subtitulo.textContent += contenido.charAt(i)

        i++  // Para incrementar el indice y pasar a otra letra

        setTimeout(escribir, 75);
    }
}

escribir()  // Se llama a la funcion por fuera



// Funcionalidad para Modo Claro/Oscuro!

let togglebtn = document.getElementById("toggleMode")

function darkMode() {   // Funcion para manipular al body

    document.body.classList.toggle("dark-mode")
}

togglebtn.addEventListener("click", darkMode)

// En este caso para implementar la funcionalidad del modo Claro/Oscuro, en lugar de agregar un boton nuevo, agregue directamente un icono en el menu de arriba a la derecha!
// Todo el body y la fuente cambiaron de color correctamente pero en algunas zonas no quedaba del todo bien, por eso tuve que hacer unos retoques en Css con chatgpt para que quedara TODO bien!


// Funcionalidad de Botones para cambiar el tamaño de la fuente!

let aumentarBoton = document.getElementById("aumentarFuente");

let reducirBoton = document.getElementById("reducirFuente");

let defaultFontSize = 20;

// Funcion para ajustar los tamaños:

function adjustFontSize(change) {
    defaultFontSize += change;
    document.body.style.fontSize = `${defaultFontSize}px`;
}

// Aplicar evento a botones:

aumentarBoton.addEventListener("click", () => adjustFontSize(2));
reducirBoton.addEventListener("click", () => adjustFontSize(-2));