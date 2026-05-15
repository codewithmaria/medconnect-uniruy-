document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('medForm');
    const mensagemSucesso = document.getElementById('mensagemSucesso');

    form.addEventListener('submit', (event) => {
        // Impede a página de recarregar
        event.preventDefault();

        // Simulação de lógica de backend
        console.log("Processando agendamento...");

        // Mostra a mensagem de sucesso
        mensagemSucesso.classList.remove('hidden');

        // Limpa o formulário após 2 segundos
        setTimeout(() => {
            form.reset();
            mensagemSucesso.classList.add('hidden');
        }, 3000);
    });
});