
//car
let carArr = [];

class Car {
    // recebe as informações do carro
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image) {
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;
    }
}

// search on array if exist carClass returning 1 if not return -1(se existir retornar e se não for o caso não retornar)
function GetCarArrPosition(arr, carClass) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].nome === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {//limita a comparção a 2 carros e procura os carros selecionados para pegar as info e comparar
    if (!(carClass instanceof Car)) {
        throw "Você precisa definir uma instância válida da classe Car";
    }

    let index = GetCarArrPosition(carArr, carClass);

    if (el.checked) {
        if (index === -1) {
            if (carArr.length < 2) {
                carArr.push(carClass);

            } else {
                alert("Só é possível comparar 2 carros por vez.");
                el.checked = false;
            }
        }
    } else {
        if (index !== -1) {//se o valor não for encontrado
            carArr.splice(index, 1);//remove os itens em um array pela posição do index
        }
    }
}

function ShowCompare() {
    if (carArr.length < 2) {//caso o usuario não selecionar 2 carros
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();//atualizar os dados da tabela
    let compareDiv = document.getElementById("compare");
    compareDiv.style.display = "block";//faz com que a tabela seja exibida em um bloco
    compareDiv.scrollIntoView({ behavior: "smooth" });// faz o scroll automatico dela(ou seja quando fazer a comparação subir a pagina e fazer a tabela aparecer)
}

function HideCompare() {//esconde a tabela
    document.getElementById("compare").style.display = "none";
}

function UpdateCompareTable() {
    if (carArr.length < 2) return;//caso o usuario não selecione 2 carros

    for (let i = 0; i < 2; i++) {//codigo loop que une 2 elementos para prenhcer a tabeçla
        let car = carArr[i];//recebe o valor do elemento no array isso permite acessar os dados dos carros
        //preenche a tabela com o codigo document.getelementbyid e busca as informações para preecnehr os valores
        document.getElementById(`compare_modelo_${i}`).innerText = car.nome;
        document.getElementById(`compare_alturacacamba_${i}`).innerText = car.alturaCacamba + " mm";
        document.getElementById(`compare_alturaveiculo_${i}`).innerText = car.alturaVeiculo + " mm";
        document.getElementById(`compare_alturasolo_${i}`).innerText = car.alturaSolo + " mm";
        document.getElementById(`compare_capacidadecarga_${i}`).innerText = car.capacidadeCarga + " kg";
        document.getElementById(`compare_motor_${i}`).innerText = car.motor;
        document.getElementById(`compare_potencia_${i}`).innerText = car.potencia + " cv";
        document.getElementById(`compare_volumecacamba_${i}`).innerText = car.volumeCacamba + " L";
        document.getElementById(`compare_roda_${i}`).innerText = car.roda;
        document.getElementById(`compare_preco_${i}`).innerText = "R$ " + car.preco.toLocaleString();

        // Exibir as imagens dos carros
        document.getElementById(`compare_image_${i}`).innerHTML = `<img src="${car.image}" width="100">`;
    }
}

//texto da area de lançamento para fazer animação do typewritter
var i = 0;//contador onde rastreia qual caractere será exibido no texto
var txt = "A Ford Ranger 2022 é uma picape robusta e versátil, com design moderno e desempenho de destaque. Equipado com motores a diesel e a gasolina, oferece opções de tração 4x4, ideal para quem busca potência e resistência em diferentes terrenos. A cabine é espaçosa, com tecnologia avançada e recursos de segurança, como controle de estabilidade e assistente de colisão. É uma excelente escolha para quem precisa de força e conforto tanto no trabalho quanto no dia a dia.";
var speed = 11;//velocidade da digitação

function typeWriter() {
    if (i < txt.length) {//verifica se o indice i ainda está dentro do tamanho do texto
        document.getElementById("textolancamento").innerHTML += txt.charAt(i);//seleciona o elemento html com o id e adiciona o proximo texto txt.charAT(i) ao conteudo existente
        i++;//adiciona o indice para passar para a proxima letra
        setTimeout(typeWriter, speed);//chama a função após um intervalo criando o efeito de digitação
    }

}
window.addEventListener('load', typeWriter);//ocorrer automaticamente quando o site carrega


//
//botão ficar cinza caso não esteja selecionado nenhum carro
document.addEventListener("DOMContentLoaded", function () {//listener   para executar quando a pagina estiver carregada
    const checkboxes = document.querySelectorAll(".checkbox");
    const button = document.getElementById("buttonn");

    function updateButto() {
        const checkedCount = document.querySelectorAll(".checkbox:checked").length;

        if (checkedCount === 2) {
            button.style.backgroundColor = "blue"; // Cor do botão quando 2 checkboxes estão selecionadas
        } else {
            button.style.backgroundColor = "gray"; // Cor do botão quando as checkbox não estão selecionadas
            /*button.disabled = true;*///desabilitar o botão
        }
    }

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", updateButto);//listener para mudar a cor do botão
    });

    updateButto(); // uptade  para garantir que o botão comece no estado correto
});