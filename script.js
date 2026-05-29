// Função do botão "Saiba Mais"
document.getElementById('btnSaibaMais').addEventListener('click', function() {
    alert('O Agrinho Paraná 2026 incentiva cidadania, educação e sustentabilidade nas escolas do estado!');
});

// Validação simples do formulário
document.getElementById('formContato').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Obrigado pelo contato.');
    this.reset();
});
