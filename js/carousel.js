

//carousel

//Array storage class(armazena as imagens do carrosel)
let carouselArr = [];

//class Carousel("carousel" kkkkkkkkkkkkkkkkkkk)(modelo para representar cada imagem do carrosel)
class Carousel {
    static Start(arr) {
        if (arr && arr.length > 0) {//verifica se tem imagens no carrosel
            Carousel._sequence = 0;//indica que começa da primeira imagem
            Carousel._size = arr.length;//define qual o tamanho dependendo das imagens que eu vou colocar 
            Carousel.Next(); // Iniciar carrossel
            Carousel._interval = setInterval(function () {
                Carousel.Next();//exibe a primeira imagem antes da troca e quanto tempo pra trocar
            }, 2000);//era pra ser 5000 mas tava demorando mt(perguntar pra atila ou pra juarez quanto tempo devo deixar 5000 é sacanagem)
            } else {
                throw "Method Start need a Array Variable.";//acho que é uma mensagem de erro(lembrete:TRADUZIR OU MUDAR A MENSAGEM.)
            }
    }
    static Next() {
        ///contêiner do carrossel
        let carouselElement = document.getElementById("carousel");
        let titleElement = document.getElementById("carousel-title");
        //lembrete && é como um and só que n fizeram como and mas sim como && nmrl programador é retardado
        if (carouselElement && titleElement) {
            // pega a imagem atual dos carros
            let currentImage = carouselArr[Carousel._sequence];

            // Atualiza a imagem dos carros como uma imagem redirecionavel(obgd youtube)
            carouselElement.innerHTML = `<a href="${currentImage.link}">
                <img src="img/${currentImage.img}" width="700"
            </a>`

            // coloca outro titulo na pagina dos carros
            titleElement.innerHTML = `<p>${currentImage.text}</p>`;

            // Muda para a próxima imagem(obgdchat pela ajuda)
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
