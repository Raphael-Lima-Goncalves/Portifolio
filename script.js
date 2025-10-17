window.onload = function() {
    const mensagens = [
        "Este é o meu Portifólio"
    ];
    const mensagem = mensagens[Math.floor(Math.random() * mensagens.length)];
    const msgDiv = document.getElementById('mensagem-dinamica');
    msgDiv.textContent = mensagem;
    msgDiv.style.display = 'block';

    setTimeout(() => {
        msgDiv.style.opacity = '0';
        setTimeout(() => {
            msgDiv.style.display = 'none';
            msgDiv.style.opacity = '1';
        }, 600);
    }, 1500);
};

window.onload = function() {
    const mensagens = [
        "Este é o meu Portifólio"
    ];
    const mensagem = mensagens[Math.floor(Math.random() * mensagens.length)];
    const msgDiv = document.getElementById('mensagem-dinamica');
    msgDiv.textContent = mensagem;
    msgDiv.style.display = 'block';

    setTimeout(() => {
        msgDiv.style.opacity = '0';
        setTimeout(() => {
            msgDiv.style.display = 'none';
            msgDiv.style.opacity = '1';
        }, 600);
    }, 800);
};


// função para abrir/fechar o menu mobile (usada pelo botão hamburger)
function toggleMobileMenu() {
    const btn = document.getElementById('hamburgerBtn') || document.querySelector('.hamburger');
    const menu = document.getElementById('mobileMenu');
    if (!menu || !btn) return;
    const opened = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', opened ? 'true' : 'false');
    menu.setAttribute('aria-hidden', opened ? 'false' : 'true');
    // bloquear scroll do body quando menu aberto
    document.body.style.overflow = opened ? 'hidden' : '';
}

// conectar clique do botão (em caso de múltiplas páginas o botão pode já existir)
document.addEventListener('click', function (e) {
    const btn = e.target.closest('.hamburger');
    if (btn) {
        toggleMobileMenu();
    }
    // fechar menu quando clicar em um link interno do mobile
    if (e.target.matches('.mobile-menu a')) {
        const menu = document.getElementById('mobileMenu');
        if (menu) {
            menu.classList.remove('open');
            const hb = document.getElementById('hamburgerBtn') || document.querySelector('.hamburger');
            if (hb) hb.setAttribute('aria-expanded', 'false');
            menu.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }
    }
});

// fechar com ESC
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        const menu = document.getElementById('mobileMenu');
        if (menu && menu.classList.contains('open')) {
            menu.classList.remove('open');
            const hb = document.getElementById('hamburgerBtn') || document.querySelector('.hamburger');
            if (hb) hb.setAttribute('aria-expanded', 'false');
            menu.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }
    }
});