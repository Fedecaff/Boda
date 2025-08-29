

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
    const textoMusica = document.querySelector('.texto-musica');
    if (musica.paused) {
      iconoMusica.src = 'imagen/play-button.png';
      btnMusica.setAttribute('aria-label', 'Reproducir música');
      textoMusica.textContent = 'Música';
    } else {
      iconoMusica.src = 'imagen/reproducir-pausar.png';
      btnMusica.setAttribute('aria-label', 'Pausar música');
      textoMusica.textContent = 'Pausar';
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

  // Funcionalidad del botón de contribuir
  const modal = document.getElementById('modal-contribucion');
  const btnContribuir = document.getElementById('btn-contribuir');
  const cerrar = document.querySelector('.cerrar');
  const aliasCuenta = document.getElementById('alias-cuenta');

  // Abrir modal
  btnContribuir.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'block';
  });

  // Cerrar modal
  cerrar.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Cerrar modal al hacer clic fuera
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Copiar alias al hacer clic
  aliasCuenta.addEventListener('click', () => {
    navigator.clipboard.writeText('bodafg20').then(() => {
      // Mostrar mensaje de copiado
      const mensajeOriginal = aliasCuenta.textContent;
      aliasCuenta.textContent = '¡Alias copiado!';
      aliasCuenta.style.backgroundColor = '#b5dc98';
      aliasCuenta.style.color = '#2d5a2d';
      
      setTimeout(() => {
        aliasCuenta.textContent = mensajeOriginal;
        aliasCuenta.style.backgroundColor = '#e8f5e8';
        aliasCuenta.style.color = '#2d5a2d';
      }, 2000);
    }).catch(err => {
      console.log('Error al copiar:', err);
    });
  });
// Carrusel infinito
const carruselContenedor = document.querySelector('.carrusel-contenedor');
const fotos = document.querySelectorAll('.carrusel-contenedor img');
let indice = 0;

// Clonar primera y última foto para el efecto infinito
const primeraFoto = fotos[0].cloneNode(true);
const ultimaFoto = fotos[fotos.length - 1].cloneNode(true);
carruselContenedor.appendChild(primeraFoto);
carruselContenedor.insertBefore(ultimaFoto, fotos[0]);

// Ajustar el índice inicial
indice = 1;

document.querySelector('.next').addEventListener('click', () => {
  avanzarCarrusel();
});

document.querySelector('.prev').addEventListener('click', () => {
  retrocederCarrusel();
});

function avanzarCarrusel() {
  indice++;
  actualizarCarrusel();
  
  // Si llegamos al clon de la primera foto, saltar a la real
  if (indice >= fotos.length + 1) {
    setTimeout(() => {
      indice = 1;
      carruselContenedor.style.transition = 'none';
      actualizarCarrusel();
      setTimeout(() => {
        carruselContenedor.style.transition = 'transform 0.5s ease-in-out';
      }, 10);
    }, 500);
  }
}

function retrocederCarrusel() {
  indice--;
  actualizarCarrusel();
  
  // Si llegamos al clon de la última foto, saltar a la real
  if (indice <= 0) {
    setTimeout(() => {
      indice = fotos.length;
      carruselContenedor.style.transition = 'none';
      actualizarCarrusel();
      setTimeout(() => {
        carruselContenedor.style.transition = 'transform 0.5s ease-in-out';
      }, 10);
    }, 500);
  }
}

function actualizarCarrusel() {
  const ancho = fotos[0].clientWidth;
  carruselContenedor.style.transform = `translateX(${-indice * ancho}px)`;
}

// Movimiento automático cada 3 segundos
setInterval(avanzarCarrusel, 3000);



});
