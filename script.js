document.getElementById("cadastro-produtos").addEventListener('click', aparecerCadastroProduto)
document.getElementById("verificar-produtos").addEventListener('click', exibirItens)

const main = document.getElementById('content');

function cleanMain() {
    if (main.innerHTML.trim() !== "") {
        main.innerHTML = "";
    }
}

function conexaoCadastroProdutos() {
    fetch('src/cadastroProdutos.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Sem exito no contato');
            } else {
                return response.text();
            }
        })
        .then(html => {
            main.innerHTML = html;
        });
}

function aparecerCadastroProduto() {
    cleanMain()
    conexaoCadastroProdutos()
}

function getExibicaoItems() {
    fetch('https://66ca221d59f4350f064e7b14.mockapi.io/produtos')
        .then(response => response.json())
        .then(dados => {
            // Itera sobre todos os produtos e cria um elemento para cada um
            dados.forEach(produto => {
                const produtoDiv = document.createElement('div');
                produtoDiv.className = 'produto';

                const nome = document.createElement('h3');
                nome.textContent = produto.nome;

                const valor = document.createElement('p');
                valor.textContent = `Valor: R$ ${produto.valor.toFixed(2)}`;

                produtoDiv.appendChild(nome);
                produtoDiv.appendChild(valor);

                main.appendChild(produtoDiv);
            });
        })
        .catch(erro => {
            console.error("Erro na busca a API", erro);
        });
}

function exibirItens() {
    cleanMain();
    getExibicaoItems()
}