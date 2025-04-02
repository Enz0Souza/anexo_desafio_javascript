

//carousel

//Array storage class(armazena as imagens do carrosel)
let carouselArr = [];

//class Carousel(modelo para representar cada imagem do carrosel)
class Carousel {
    static Start(arr) {
        if (arr && arr.length > 0) {//verifica se tem imagens no carrosel
            Carousel._sequence = 0;//indica que começa da primeira imagem
            Carousel._size = arr.length;//define qual o tamanho dependendo das imagens que eu vou colocar 
            Carousel.Next(); // Iniciar carrossel
            Carousel._interval = setInterval(function () {
                Carousel.Next();//exibe a primeira imagem antes da troca e quanto tempo pra trocar
            }, 2000);
        } else {
            throw "Method Start need a Array Variable.";
        }
    }
    static Next() {
        ///contêiner do carrossel
        let carouselElement = document.getElementById("carousel");
        let titleElement = document.getElementById("carousel-title");

        if (carouselElement && titleElement) {
            // pega a imagem atual dos carros
            let currentImage = carouselArr[Carousel._sequence];

            // Atualiza a imagem dos carros como uma imagem redirecionavel
            carouselElement.innerHTML = `<a href="${currentImage.link}">
                <img  src="img/${currentImage.img}" width="700"
            </a>`

            // coloca outro titulo na pagina dos carros
            titleElement.innerHTML = `<a href="${currentImage.link}"><p>${currentImage.text}</p></a>`;

            // Muda para a próxima imagem
            Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
        }
    }
}
// modelo do carrosel primeiro imagem texto e dps link até onde eu entendi sla forun é uma desgraça
class CarouselItem {
    constructor(img, text, link) {
        this.img = img;
        this.text = text;
        this.link = link;
    }
}

//botões 
// Variável para armazenar o índice da imagem atual
Carousel._sequence = 0;

// Função para avançar no carrossel
// Variável para armazenar o índice da imagem atual
Carousel._sequence = 0;
Carousel._interval = null;

// Função para iniciar o carrossel automaticamente
Carousel.Start = function (arr) {
    if (arr && arr.length > 0) {
        Carousel._sequence = 0;
        Carousel._size = arr.length;
        Carousel.Next();
        Carousel._interval = setInterval(Carousel.Next, 2000);
    } else {
        throw "Method Start need an Array Variable.";
    }
};

// Função para avançar no carrossel
Carousel.Next = function () {
    Carousel.ResetInterval();
    let carouselElement = document.getElementById("carousel");
    let titleElement = document.getElementById("carousel-title");

    if (carouselElement && titleElement) {
        let currentImage = carouselArr[Carousel._sequence];

        carouselElement.innerHTML = `<a href="${currentImage.link}">
            <img src="img/${currentImage.img}" width="700">
        </a>`;

        titleElement.innerHTML = `<a href="${currentImage.link}"><p>${currentImage.text}</p></a>`;

        Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
    }
};

// Função para retroceder no carrossel
// Variável para armazenar o índice da imagem atual
Carousel._sequence = 0;
Carousel._interval = null;

// Função para iniciar o carrossel automaticamente
Carousel.Start = function (arr) {
    if (arr && arr.length > 0) {
        Carousel._sequence = 0;
        Carousel._size = arr.length;
        Carousel.Next();
        Carousel.ResetInterval();
    } else {
        throw "Method Start need an Array Variable.";
    }
};

// Função para avançar no carrossel
Carousel.Next = function () {
    Carousel.UpdateCarousel((Carousel._sequence + 1) % Carousel._size);
    Carousel.ResetInterval();
};

// Função para retroceder no carrossel
Carousel.Prev = function () {
    Carousel.UpdateCarousel((Carousel._sequence - 1 + Carousel._size) % Carousel._size);
    Carousel.ResetInterval();
};

// Função para atualizar o carrossel com a nova imagem
Carousel.UpdateCarousel = function (newIndex) {
    let carouselElement = document.getElementById("carousel");
    let titleElement = document.getElementById("carousel-title");

    if (carouselElement && titleElement) {
        Carousel._sequence = newIndex;
        let currentImage = carouselArr[Carousel._sequence];

        carouselElement.innerHTML = `<a href="${currentImage.link}">
            <img src="img/${currentImage.img}" width="700">
        </a>`;

        titleElement.innerHTML = `<a href="${currentImage.link}"><p>${currentImage.text}</p></a>`;
    }
};

// Função para resetar o intervalo quando um botão é clicado
Carousel.ResetInterval = function () {
    clearInterval(Carousel._interval);
    Carousel._interval = setInterval(Carousel.Next, 2000);
};

// Event listeners para os botões
window.onload = function () {
    document.getElementById("nextBtn").addEventListener("click", function() {
        Carousel.Next();
    });
    document.getElementById("prevBtn").addEventListener("click", function() {
        Carousel.Prev();
    });
};

