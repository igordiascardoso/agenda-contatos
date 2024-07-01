const form = document.getElementById('form-contato');
const nomeContato = document.getElementById('nome-contato');
const telefoneContato = document.getElementById('telefone-contato');
const tabelaContatos = document.getElementById('tabela-contatos');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionarContato();
});

function adicionarContato() {
    const nome = nomeContato.value.trim();
    const telefone = telefoneContato.value.trim();

    if (nome === '' || telefone === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const novaLinha = `
        <tr>
            <td>${nome}</td>
            <td>${telefone}</td>
        </tr>
    `;

    tabelaContatos.innerHTML += novaLinha;

    // Limpar campos do formulário
    nomeContato.value = '';
    telefoneContato.value = '';
}
