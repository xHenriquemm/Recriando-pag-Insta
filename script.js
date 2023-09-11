

// Adicione um ouvinte de evento ao botão de alternância do Modo Escuro
const toggleDarkModeButton = document.getElementById('toggle-dark-mode');

toggleDarkModeButton.addEventListener('click', function () {
    const body = document.body;

    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        toggleDarkModeButton.textContent = 'Modo Claro'; // Atualize o texto do botão para 'Modo Claro'
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        toggleDarkModeButton.textContent = 'Modo Escuro'; // Atualize o texto do botão para 'Modo Escuro'
    }
});
