// Função para voltar ao topo da página
function topo() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

// Função para realizar o login
function login() {
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    if (usuario === 'admin' && senha === '12345') {
        window.location = "index.html";
    } else {
        alert("Acesso Negado. Dados incorretos");
    }
}


//Ativar alert no botão cadastrar

function cadastro(){
    alert("Cadastro com sucesso!");
    window.location.href = "index.html";
}
