document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    const resposta = `Obrigado, ${nome}! Recebemos sua mensagem e entraremos em contato em breve.`;

    document.getElementById('resposta').textContent = resposta;

    document.getElementById('form-contato').reset();
});
