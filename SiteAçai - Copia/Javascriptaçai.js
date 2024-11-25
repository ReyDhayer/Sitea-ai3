function filtrarProdutos() {
    const input = document.getElementById('buscaInput');
    const filter = input.value.toLowerCase();
    const produtos = document.querySelectorAll('.produto-item');

    produtos.forEach(function(produto) {
        const nomeProduto = produto.querySelector('h3').textContent.toLowerCase();
        const descricaoProduto = produto.querySelector('.descricao').textContent.toLowerCase();

        if (nomeProduto.includes(filter) || descricaoProduto.includes(filter)) {
            produto.style.display = '';  // Exibe o produto
        } else {
            produto.style.display = 'none';  // Oculta o produto
        }
    });
}


