class cadastroProdutos{
    public mainContent = document.getElementById('content');

    public cleanMain() {
        if (mainContent.innerHTML.trim() !== "") {
            mainContent.innerHTML = "";
        }
    }
    
    public conexaoCadastroProdutos() {
        fetch('src/cadastroProdutos.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Sem exito no contato');
                } else {
                    return response.text();
                }
            })
            .then(html => {
                mainContent.innerHTML = html;
            });
    }
    
    public aparecerCadastroProduto(){
        cleanMain()
        conexaoCadastroProdutos()
    }
}