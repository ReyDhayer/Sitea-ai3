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


let carrinho = [];
let total = 0;

function adicionarCarrinho(nome, imagem, preco) {
    // Adiciona o produto ao carrinho
    carrinho.push({ nome, imagem, preco, quantidade: 1 });
    total += preco;
    
    // Atualiza o modal
    atualizarCarrinho();
    abrirCarrinho();
}

function atualizarCarrinho() {
    const carrinhoProdutos = document.getElementById("carrinhoProdutos");
    const totalCarrinho = document.getElementById("totalCarrinho");
    carrinhoProdutos.innerHTML = ''; // Limpar lista de produtos

    // Preencher o modal com os itens do carrinho
    carrinho.forEach((produto, index) => {
        carrinhoProdutos.innerHTML += `
            <div class="produto-carrinho">
                <img src="${produto.imagem}" alt="${produto.nome}">
                <div>
                    <h4>${produto.nome}</h4>
                    <p>R$ ${produto.preco}</p>
                    <div class="quantidade">
                        <button onclick="ajustarQuantidade(${index}, -1)">-</button>
                        <span>${produto.quantidade}</span>
                        <button onclick="ajustarQuantidade(${index}, 1)">+</button>
                    </div>
                </div>
            </div>
        `;
    });

    // Atualizar o total do carrinho
    totalCarrinho.textContent = total.toFixed(2);
}

function ajustarQuantidade(index, delta) {
    if (carrinho[index].quantidade + delta > 0) {
        carrinho[index].quantidade += delta;
        total += delta * carrinho[index].preco;
        atualizarCarrinho();
    }
}

function abrirCarrinho() {
    document.getElementById("carrinhoModal").style.display = "block";
}

function fecharCarrinho() {
    document.getElementById("carrinhoModal").style.display = "none";
}

function finalizarCompra() {
    alert("Compra Finalizada! Total: R$ " + total.toFixed(2));
    carrinho = [];  // Limpar carrinho
    total = 0;
    atualizarCarrinho();
    fecharCarrinho();
}
