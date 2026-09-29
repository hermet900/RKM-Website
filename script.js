(() => {
  const languageButtons = document.querySelectorAll('[data-language-toggle]');
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.primary-nav');
  const supportedLanguages = ['en', 'sw'];

  function setLanguage(language) {
    const selected = supportedLanguages.includes(language) ? language : 'en';
    document.documentElement.lang = selected;
    document.querySelectorAll('[data-lang-content]').forEach((element) => {
      element.hidden = element.dataset.langContent !== selected;
    });
    languageButtons.forEach((button) => {
      const next = selected === 'en' ? 'Kiswahili' : 'English';
      button.setAttribute('aria-label', `Switch language to ${next}`);
    });
    try { localStorage.setItem('rkm-site-language', selected); } catch { /* Storage can be disabled. */ }
  }

  let language = 'en';
  try { language = localStorage.getItem('rkm-site-language') || 'en'; } catch { /* Keep the default language. */ }
  setLanguage(language);

  languageButtons.forEach((button) => button.addEventListener('click', () => {
    setLanguage(document.documentElement.lang === 'en' ? 'sw' : 'en');
  }));

  if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!open));
      menuButton.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
      navigation.classList.toggle('is-open', !open);
    });
    navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
      navigation.classList.remove('is-open');
    }));
  }

  document.querySelectorAll('[data-current-year]').forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  const revealItems = document.querySelectorAll('.feature-item');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => {
      item.classList.add('reveal');
      observer.observe(item);
    });
  }
})();