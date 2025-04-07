//class contato

class contato {
    constructor(nome, sobrenome, email, cpf, telefone, contato, mensagem, checkbox, checkboxpromo ) {//inicializa as propriedades do objeto com os valores passados como argumentos
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.contato = contato;
        this.mensagem = mensagem
        this.checkbox = checkbox;
        this.checkboxpromo = checkboxpromo;
    }
}

function Post(form) {// recebe o parametro form que representa o formulario html

    let data = new contato(form.elements.namedItem("nome").value, // armazena as informações que receber
        form.elements.namedItem("sobrenome").value,
        form.elements.namedItem("email").value,
        form.elements.namedItem("cpf").value,
        form.elements.namedItem("telefone").value,
        form.elements.namedItem("contato").value,
        form.elements.namedItem("mensagem").value,
        form.elements.namedItem("checkbox").checked,
        form.elements.namedItem("checkboxpromo").checked
        
    );
    Enviar(data)//passa as informaç~es para enviar
    console.table(JSON.parse(dadosSalvos));//aparecer as informações no console

}

// Função para enviar os dados
function Enviar(data) {
    if (data.nome !== "") {
        localStorage.setItem('dadosUltimoEnvio', JSON.stringify(data)); // Salva os dados do usuario no localStorage
        alert('Obrigado sr(a) ' + data.nome + ' os seus dados foram encaminhados com sucesso');
    }
}

// Evento para carregar os dados salvos ao recarregar a página
window.addEventListener('load', () => {
    const dadosSalvos = localStorage.getItem('dadosUltimoEnvio');

    if (dadosSalvos) {
        try {
            console.table(JSON.parse(dadosSalvos));
        } catch (error) {
            console.error('Erro ao carregar os dados:', error);
        }
    }
});

//animação
setInterval(() => {
    const carro1 = document.getElementById("imagemcarro");
    const carro2 = document.getElementById("Imagemcarrotabela");
    carro1.style.display = "none";
    carro2.style.display = "block";
}, 2000);


//formatar o cpf e tel
   function formatarTelefone(campo) {
      let valor = campo.value.replace(/\D/g, ""); // Remove caracteres não numéricos
      valor = valor.replace(/^(\d{2})(\d)/, "($1)$2"); // Adiciona parênteses para o DDD
      valor = valor.replace(/(\d{4})(\d)/, "$1-$2"); // Adiciona o traço
      campo.value = valor;
    }

    function formatarCPF(campo) {
      let valor = campo.value.replace(/\D/g, ""); 
      valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
      valor = valor.replace(/(\d{3})(\d)/, "$1.$2"); 
      valor = valor.replace(/(\d{3})(\d{2})$/, "$1-$2"); 
      campo.value = valor;
    }
    
    //botão ficar cinza caso não esteja selecionado nenhum carro
    document.addEventListener("DOMContentLoaded", function () {
        const checkboxes = document.querySelectorAll("#termosCheckbox");
        const button = document.getElementById("meuBotao");
    
        function updateButton() {
            const checkedCount = document.querySelectorAll("#termosCheckbox:checked").length;
    
            if (checkedCount === 1) {
                button.classList.add("ativo");
                button.style.backgroundColor = "blue";
                button.disabled = false;
            } else {
                button.classList.remove("ativo");
                button.style.backgroundColor = "gray";
                button.disabled = true;
            }
        }
    
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener("change", updateButton);
        });
    
        updateButton(); // Garantir o estado inicial
    });
    
