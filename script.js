// Efeito de rolagem suave para os links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mensagem de boas-vindas no console
console.log("Site do Colégio Estadual São Cristóvão carregado com sucesso!");

// Exemplo de interatividade: Alerta ao clicar nos cards de cursos
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('click', () => {
        alert("Em breve traremos mais detalhes sobre este nível de ensino!");
    });
});
