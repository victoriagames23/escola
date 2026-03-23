document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('dark-mode-toggle');
    const form = document.getElementById('form-contato');
    const feedback = document.getElementById('feedback-msg');

    // 1. Persistência do Tema
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.body.setAttribute('data-theme', currentTheme);
    }

    themeBtn.addEventListener('click', () => {
        let theme = document.body.getAttribute('data-theme');
        let newTheme = theme === 'dark' ? 'light' : 'dark';
        
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // 2. Feedback do Formulário
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulação de envio
        const btn = form.querySelector('button');
        btn.innerText = "Enviando...";
        btn.disabled = true;

        setTimeout(() => {
            feedback.innerHTML = `<p style="color: #2ecc71; margin-top: 1rem;">Obrigado! Recebemos sua mensagem.</p>`;
            form.reset();
            btn.innerText = "Enviar Mensagem";
            btn.disabled = false;
        }, 1500);
    });
});
