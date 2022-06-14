(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelectorAll('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.forEach(btn => btn.addEventListener('click', toggleMenu));

  // Закрываем мобильное меню на более широких экранах
  // в случае изменения ориентации устройства.
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();

(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.forEach(link =>
    link.addEventListener('click', toggleModal)
  );
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();


(() => {
  const refs = {
    openAboutBtn: document.querySelector('[data-about-open]'),
    closeAboutBtn: document.querySelector('[data-about-close]'),
    about: document.querySelector('[data-about]'),
    body: document.querySelector('body'),
  };

  refs.openAboutBtn.addEventListener('click', toggleAbout);
  refs.closeAboutBtn.addEventListener('click', toggleAbout);

  function toggleAbout() {
    refs.about.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();

(() => {
  const refs = {
    openFranchiseBtn: document.querySelector(".franchise-modal"),
    closeFranchiseBtn: document.querySelector(".franchise-modal-close-btn"),
    franchise: document.querySelector(".franchise-backdrop"),
    body: document.querySelector("body"),
  };

  refs.openFranchiseBtn.addEventListener("click", toggleMenu);
  refs.closeFranchiseBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.franchise.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }
})();

