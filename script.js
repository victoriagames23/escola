// Efeito de Revelação ao Rolar (Scroll Reveal simplificado)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

// Aplicar animação inicial aos elementos
document.querySelectorAll('.stat-item, .gallery-item, .news-card').forEach(el => {
    el.style.opacity
