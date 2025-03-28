

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