/* AppNho header/menu behavior (sao chép từ index homepage AppNho) */
(()=> {
  const nav = document.querySelector('.main-nav');
  const btn = document.querySelector('.menu-toggle');
  const overlay = document.querySelector('.nav-overlay');
  const drops = [...document.querySelectorAll('.nav-drop')];
  const themes = ['apps','games','tools','ai'];
  if (!nav) return;

  if (btn) {
    btn.setAttribute('aria-controls', 'appnho-main-nav');
    btn.setAttribute('aria-expanded', 'false');
  }
  nav.id = nav.id || 'appnho-main-nav';

  drops.forEach((drop, index) => {
    const trigger = drop.querySelector(':scope > a');
    const menu = drop.querySelector(':scope > .dropdown');
    if (trigger && menu) {
      const menuId = menu.id || `appnho-submenu-${index + 1}`;
      menu.id = menuId;
      trigger.setAttribute('aria-controls', menuId);
      trigger.setAttribute('aria-haspopup', 'true');
      trigger.setAttribute('aria-expanded', 'false');
    }
  });

  function closeAll() {
    drops.forEach(drop => {
      drop.classList.remove('is-open', 'show');
      themes.forEach(theme => drop.classList.remove('theme-' + theme));
      const trigger = drop.querySelector(':scope > a');
      if (trigger) trigger.setAttribute('aria-expanded', 'false');
    });
    if (overlay) {
      overlay.className = 'nav-overlay';
      overlay.setAttribute('aria-hidden', 'true');
    }
  }

  function openDrop(drop) {
    closeAll();
    const trigger = drop.querySelector(':scope > a');
    const label = (trigger?.textContent || '').toLowerCase();
    const theme = label.includes('ứng dụng') ? 'apps'
      : label.includes('trò chơi') ? 'games'
      : label.includes('công cụ') ? 'tools' : 'ai';
    drop.classList.add('is-open', 'show', 'theme-' + theme);
    drop.style.setProperty('--drop-accent',
      theme === 'apps' ? '#f3aa20' :
      theme === 'games' ? '#f4b51b' :
      theme === 'tools' ? '#667085' : '#6a5ac8');
    if (trigger) trigger.setAttribute('aria-expanded', 'true');
    if (overlay) {
      overlay.className = 'nav-overlay theme-' + theme;
      overlay.setAttribute('aria-hidden', 'false');
    }
  }

  drops.forEach(drop => {
    drop.addEventListener('mouseenter', () => {
      if (window.innerWidth > 900) openDrop(drop);
    });
    drop.addEventListener('mouseleave', () => {
      if (window.innerWidth > 900) {
        setTimeout(() => {
          if (!drop.matches(':hover') && !document.querySelector('.dropdown:hover')) closeAll();
        }, 80);
      }
    });
    const trigger = drop.querySelector(':scope > a');
    if (trigger) {
      trigger.addEventListener('click', event => {
        if (window.innerWidth <= 900) {
          if (!drop.classList.contains('is-open')) {
            event.preventDefault();
            openDrop(drop);
          } else {
            // Second tap follows the main hub link instead of trapping users in the submenu.
            closeAll();
          }
        }
      });
    }
  });

  overlay?.addEventListener('click', closeAll);
  document.addEventListener('click', event => {
    if (!event.target.closest('.site-header')) closeAll();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeAll();
      nav.classList.remove('open');
      btn?.setAttribute('aria-expanded', 'false');
      btn?.focus();
    }
  });
  btn?.addEventListener('click', event => {
    event.stopPropagation();
    const isOpen = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
    if (!isOpen) closeAll();
  });
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 900 && !link.closest('.nav-drop > a')) {
        nav.classList.remove('open');
        btn?.setAttribute('aria-expanded', 'false');
        closeAll();
      }
    });
  });
})();
