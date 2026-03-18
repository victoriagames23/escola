// 1. Alternar Modo Noturno
const darkBtn = document.getElementById('dark-mode-toggle');
darkBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    darkBtn.innerText = isDark ? "☀️ Modo Claro" : "🌓 Modo Noturno";
});

// 2. Manipulação do Formulário de Contato
const form = document.getElementById('form-contato');
const feedback = document.getElementById('feedback-msg');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simulando envio
    feedback.innerText = "Enviando...";
    feedback.style.color = "#ffde59";

    setTimeout(() => {
        feedback.innerText = "Mensagem enviada com sucesso! Entraremos em contato em breve.";
        feedback.style.color = "#4BB543";
        form.reset();
    }, 2000);
});

// 3. Efeito de scroll suave ao clicar no menu
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
