document.getElementById('formMatricula').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede a página de recarregar

    // Capturando os valores
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const serie = document.getElementById('serie').value;

    // Aqui você enviaria os dados para um servidor real usando fetch()
    console.log("Dados recebidos:", { nome, email, serie });

    // Simulação de processamento
    const botao = document.getElementById('btnEnviar');
    botao.innerText = "Enviando...";
    botao.disabled = true;

    setTimeout(() => {
        // Esconde o formulário e mostra mensagem de sucesso
        document.getElementById('formMatricula').classList.add('hidden');
        document.getElementById('mensagemSucesso').classList.remove('hidden');
    }, 1500);
});
