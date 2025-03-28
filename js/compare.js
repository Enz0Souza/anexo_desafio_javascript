
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
        if (index !== -1) {
            carArr.splice(index, 1);
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

        // Exibir as imagens dos carros(lembrete: fazer um easter egg se eu fizer algo na pagina aparecer o relampago marquinhos)
        document.getElementById(`compare_image_${i}`).innerHTML = `<img src="${car.image}" width="100">`;
    }
}

//lembretes: innertext é uma propriedade que retorna o conteudo de um teto html
/*a função toLocaleString formata o preço de forma adequada para o padrão de numeros local (por exemplo, separando milhar e com virgula no
lugar de ponto dependendo do pais)

*/
