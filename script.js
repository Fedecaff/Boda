

document.addEventListener('DOMContentLoaded', () => {
  // Fecha del evento: 20 de septiembre de 2025 a las 20:30
const fechaBoda = new Date("2025-09-20T20:30:00").getTime();

function actualizarContador() {
  const ahora = new Date().getTime();
  const diferencia = fechaBoda - ahora;

  if (diferencia < 0) return; // Ya pasó la fecha

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  document.getElementById("dias").textContent = dias.toString().padStart(2, '0');
  document.getElementById("horas").textContent = horas.toString().padStart(2, '0');
  document.getElementById("minutos").textContent = minutos.toString().padStart(2, '0');
  document.getElementById("segundos").textContent = segundos.toString().padStart(2, '0');
}

// Actualiza cada segundo
setInterval(actualizarContador, 1000);
actualizarContador();






  const musica = document.getElementById('musica');
  const btnMusica = document.getElementById('btn-musica');
  const iconoMusica = document.getElementById('icono-musica');

  function actualizarIcono() {
    if (musica.paused) {
      iconoMusica.src = 'imagen/play-button.png';
      btnMusica.setAttribute('aria-label', 'Reproducir música');
    } else {
      iconoMusica.src = 'imagen/reproducir-pausar.png';
      btnMusica.setAttribute('aria-label', 'Pausar música');
    }
  }

  // Eliminamos auto-play forzado; el botón será el disparador principal

  // Reproducción/pausa con botón
  btnMusica.addEventListener('click', (e) => {
    e.stopPropagation();
    if (musica.paused) {
      musica.play().then(actualizarIcono).catch(err => {
        console.log('No se pudo reanudar la música:', err);
      });
    } else {
      musica.pause();
      actualizarIcono();
    }
  });

  // Mantener ícono sincronizado si el audio cambia por otros motivos
  musica.addEventListener('play', actualizarIcono);
  musica.addEventListener('pause', actualizarIcono);

  // Estado inicial del ícono
  actualizarIcono();
// Carrusel
const carruselContenedor = document.querySelector('.carrusel-contenedor');
const fotos = document.querySelectorAll('.carrusel-contenedor img');
let indice = 0;

document.querySelector('.next').addEventListener('click', () => {
  avanzarCarrusel();
});

document.querySelector('.prev').addEventListener('click', () => {
  indice = (indice - 1 + fotos.length) % fotos.length;
  actualizarCarrusel();
});

function avanzarCarrusel() {
  indice = (indice + 1) % fotos.length;
  actualizarCarrusel();
}

function actualizarCarrusel() {
  const ancho = fotos[0].clientWidth;
  carruselContenedor.style.transform = `translateX(${-indice * ancho}px)`;
}

// Movimiento automático cada 3 segundos
setInterval(avanzarCarrusel, 3000);



});
