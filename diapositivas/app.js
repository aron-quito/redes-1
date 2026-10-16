/**
 * PRESENTACIÓN DE REDES I - MOTOR DE NAVEGACIÓN DE DIAPOSITIVAS
 * Control por teclado, clics, touch y actualización de barra de progreso
 */

document.addEventListener('DOMContentLoaded', () => {
  const slides = Array.from(document.querySelectorAll('.slide'));
  const totalSlides = slides.length;
  const currentNumEl = document.getElementById('current-slide');
  const totalNumEl = document.getElementById('total-slides');
  const progressBar = document.getElementById('progress-bar');
  const stage = document.querySelector('.slide-stage');
  const prevBtn = document.getElementById('btn-prev');
  const nextBtn = document.getElementById('btn-next');

  let currentIndex = 0;

  // Inicializar contador total
  if (totalNumEl) {
    totalNumEl.textContent = String(totalSlides).padStart(2, '0');
  }

  // Leer hash inicial si existe (ej. #slide-5)
  const hash = window.location.hash;
  if (hash && hash.startsWith('#slide-')) {
    const page = parseInt(hash.replace('#slide-', ''), 10);
    if (!isNaN(page) && page >= 1 && page <= totalSlides) {
      currentIndex = page - 1;
    }
  }

  function goToSlide(index, updateHistory = true) {
    if (index < 0) index = 0;
    if (index >= totalSlides) index = totalSlides - 1;

    currentIndex = index;

    slides.forEach((slide, i) => {
      if (i === currentIndex) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    // Actualizar contador
    if (currentNumEl) {
      currentNumEl.textContent = String(currentIndex + 1).padStart(2, '0');
    }

    // Actualizar barra de progreso
    if (progressBar) {
      const percentage = totalSlides > 1 ? (currentIndex / (totalSlides - 1)) * 100 : 100;
      progressBar.style.width = `${percentage}%`;
    }

    // Actualizar URL sin reload
    if (updateHistory) {
      window.history.replaceState(null, null, `#slide-${currentIndex + 1}`);
    }
  }

  function nextSlide() {
    if (currentIndex < totalSlides - 1) {
      goToSlide(currentIndex + 1);
    }
  }

  function prevSlide() {
    if (currentIndex > 0) {
      goToSlide(currentIndex - 1);
    }
  }

  // Clic en el escenario para avanzar (comportamiento natural de presentación)
  if (stage) {
    stage.addEventListener('click', (e) => {
      // Si hizo clic en un botón de navegación o link, no duplicar el evento
      if (e.target.closest('#nav-controls') || e.target.closest('a') || e.target.closest('button')) {
        return;
      }
      nextSlide();
    });
  }

  // Botones de navegación
  if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); nextSlide(); });
  if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); prevSlide(); });

  // Control por teclado
  window.addEventListener('keydown', (e) => {
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
      case ' ':
      case 'PageDown':
      case 'Enter':
        e.preventDefault();
        nextSlide();
        break;

      case 'ArrowLeft':
      case 'ArrowUp':
      case 'PageUp':
      case 'Backspace':
        e.preventDefault();
        prevSlide();
        break;

      case 'Home':
        e.preventDefault();
        goToSlide(0);
        break;

      case 'End':
        e.preventDefault();
        goToSlide(totalSlides - 1);
        break;

      case 'f':
      case 'F':
        e.preventDefault();
        toggleFullscreen();
        break;
    }
  });

  // Pantalla completa
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.warn(`Error al activar pantalla completa: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  // Soporte Touch / Deslizamiento en tablets o móviles
  let touchStartX = 0;
  let touchStartY = 0;

  window.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  window.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    const touchEndY = e.changedTouches[0].screenY;
    const diffX = touchEndX - touchStartX;
    const diffY = touchEndY - touchStartY;

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX < 0) {
        nextSlide(); // Swipe izquierda -> siguiente
      } else {
        prevSlide(); // Swipe derecha -> anterior
      }
    }
  }, { passive: true });

  // Iniciar en la diapositiva actual
  goToSlide(currentIndex, false);
});
