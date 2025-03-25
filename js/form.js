//class contato

class contato {
    constructor(nome, sobrenome, email, cpf, telefone, contato){//inicializa as propriedades do objeto com os valores passados como argumentos
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email =email;
        this.cpf=cpf;
        this.telefone= telefone;
        this.contato=contato;
    }
}

function Post(form) {// recebe o parametro form que representa o formulario html

  let data = new contato(form.elements.namedItem("nome").value, // armazena as informações que receber
            form.elements.namedItem("sobrenome").value, 
            form.elements.namedItem("email").value, 
            form.elements.namedItem("cpf").value, 
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem("contato").value
        );

        Enviar(data)//passa as informaç~es para enviar
}

// Função para enviar os dados
function Enviar(data) {
    if (data.nome && data.nome.trim() !== "") {
        localStorage.setItem('dadosUltimoEnvio', JSON.stringify(data)); // Salva os dados do usuario no localStorage
        alert('Obrigado sr(a) ' + data.nome + ' os seus dados foram encaminhados com sucesso');
    }
}

// Evento para carregar os dados salvos ao recarregar a página(obgd cara do youtube vc é 100000)
window.addEventListener('load', () => {
    const dadosSalvos = localStorage.getItem('dadosUltimoEnvio'); // Pegar o item 'dadosUltimoEnvio'
    if (dadosSalvos) {
        try {
            console.table('Ultimo Envio de Dados:', JSON.parse(dadosSalvos)); // Exibe os dados no console
        } catch (error) {
            console.error('Erro ao carregar os dados:', error);
        }
    }
});
//trim remove espaços em bracno ou seja se o nome só tiver espaço não será computado e será dado como um valor vazio