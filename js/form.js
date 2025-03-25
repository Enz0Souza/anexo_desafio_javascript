//class contato

class contato {//mesma coisa do compare nem vou me dar o trabalho de explicar essa misera(até porque nem sei realmente como funfa direito akakkakakaka)
    constructor(nome, sobrenome, email, cpf, telefone, contato){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email =email;
        this.cpf=cpf;
        this.telefone= telefone;
        this.contato=contato;
    }
}

function Post(form) {

  let data = new contato(form.elements.namedItem("nome").value,
            form.elements.namedItem("sobrenome").value, 
            form.elements.namedItem("email").value, 
            form.elements.namedItem("cpf").value, 
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem("contato").value
        );

        Enviar(data)
}

// Função para enviar os dados
function Enviar(data) {
    if (data.nome && data.nome.trim() !== "") {
        console.log('Dados recebidos:', data); // Exibe os dados do cliente no console do navegador
        localStorage.setItem('dadosUltimoEnvio', JSON.stringify(data)); // Salva os dados do usuario no localStorage
        alert('Obrigado sr(a) ' + data.nome + ' os seus dados foram encaminhados com sucesso');
    } else {
        alert('Por favor, insira um nome válido.');
    }
}

// Evento para carregar os dados salvos ao recarregar a página(obgd cara do youtube vc é 100000)
window.addEventListener('load', () => {
    const dadosSalvos = localStorage.getItem('dadosUltimoEnvio'); // Pegar o item 'dadosUltimoEnvio'
    if (dadosSalvos) {
        try {
            console.table('dadosUltimoEnvio:', JSON.parse(dadosSalvos)); // Exibe os dados no console
        } catch (error) {
            console.error('Erro ao carregar os dados:', error);
        }
    }
});
