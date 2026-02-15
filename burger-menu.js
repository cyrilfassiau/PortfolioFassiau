document.addEventListener('DOMContentLoaded', function() {
  // Sélection des éléments
  const burgerBtn = document.querySelector('.burger-menu');
  const nav = document.querySelector('.main-nav');
  const overlay = document.querySelector('.menu-overlay');
  const navLinks = document.querySelectorAll('.nav-link');
  const body = document.body;

  // Fonction pour ouvrir le menu
  function openMenu() {
    burgerBtn.classList.add('active');
    nav.classList.add('active');
    overlay.classList.add('active');
    body.classList.add('menu-open');
    burgerBtn.setAttribute('aria-expanded', 'true');
  }

  // Fonction pour fermer le menu
  function closeMenu() {
    burgerBtn.classList.remove('active');
    nav.classList.remove('active');
    overlay.classList.remove('active');
    body.classList.remove('menu-open');
    burgerBtn.setAttribute('aria-expanded', 'false');
  }

  // Toggle du menu au clic sur le burger
  burgerBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    
    if (nav.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Fermer le menu en cliquant sur l'overlay
  overlay.addEventListener('click', closeMenu);

  // Fermer le menu en cliquant sur un lien de navigation
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Petite pause pour permettre l'animation du scroll
      setTimeout(closeMenu, 300);
    });
  });

  // Fermer le menu avec la touche Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && nav.classList.contains('active')) {
      closeMenu();
    }
  });

  // Fermer le menu si on redimensionne vers desktop
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      if (window.innerWidth > 1024 && nav.classList.contains('active')) {
        closeMenu();
      }
    }, 250);
  });

  // Smooth scroll pour tous les liens d'ancrage
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Vérifier si c'est un lien d'ancrage (commence par #)
      if (href && href.startsWith('#')) {
        e.preventDefault();
        
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          // Calculer la position en tenant compte du header fixe
          const headerHeight = document.querySelector('header').offsetHeight;
          const targetPosition = targetElement.offsetTop - headerHeight;
          
          // Scroll fluide
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Animation des boutons du hero
  const exploreBtn = document.querySelector('.explore');
  const discussBtn = document.querySelector('.discuss');

  if (exploreBtn) {
    exploreBtn.addEventListener('click', function() {
      const projectsSection = document.getElementById('projectss');
      if (projectsSection) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = projectsSection.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  }

  if (discussBtn) {
    discussBtn.addEventListener('click', function() {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = contactSection.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  }
});