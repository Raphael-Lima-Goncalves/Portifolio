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
