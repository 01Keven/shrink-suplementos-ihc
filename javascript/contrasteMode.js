// Seleciona o botão de alternar contraste
const contrastButton = document.querySelector('.form-button-contraste');

// Adiciona um evento de clique ao botão
contrastButton.addEventListener('click', function(event) {
    event.preventDefault();  // Evita o envio do formulário

    // Alterna a classe 'dark' no body
    document.body.classList.toggle('dark');

    // Alterna o texto do botão mantendo o ícone
    if (document.body.classList.contains('dark')) {
        contrastButton.childNodes[0].textContent = 'Desativar Alto Contraste ';
    } else {
        contrastButton.childNodes[0].textContent = 'Ativar Modo Alto Contraste ';
    }

    // Adiciona ou remove a classe 'clicked' para mudar o estilo e o ícone
    contrastButton.classList.toggle('clicked');

    // Remove o estado de foco do botão para que o hover funcione imediatamente
    contrastButton.blur();
});


