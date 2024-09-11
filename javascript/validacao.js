// document.getElementById('form-login').addEventListener('submit', function(event) {
//     event.preventDefault(); // Impede o envio do formulário enquanto valida

//     // Seleciona todos os inputs do formulário
//     const inputs = document.querySelectorAll('.form-input');
//     let formIsValid = true;

//     inputs.forEach(input => {
//         const errorMessage = input.nextElementSibling; // A tag <small> ao lado do input

//         // Se o campo estiver vazio
//         if (input.value.trim() === '') {
//             input.classList.add('error'); // Adiciona classe de erro
//             errorMessage.textContent = `Por favor, preencha o campo ${input.name}`; // Mensagem de erro personalizada
//             errorMessage.style.display = 'block'; // Exibe a mensagem de erro
//             formIsValid = false;
//         } else {
//             input.classList.remove('error'); // Remove a classe de erro
//             errorMessage.style.display = 'none'; // Esconde a mensagem de erro
//         }
//     });

//     // Se o formulário for válido, prossiga com o envio
//     if (formIsValid) {
//         alert('Formulário enviado com sucesso!');
//         // Aqui você pode continuar com o envio ou fazer algo como enviar via AJAX
//         // document.getElementById('form-login').submit();
//     }
// });
