

//carousel

//Array storage class
let carouselArr = [];

//class Carousel("carousel" kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk)
class Carousel {
    static Start(arr) {
        if (arr && arr.length > 0) {
            Carousel._sequence = 0;
            Carousel._size = arr.length;
            Carousel.Next(); // Iniciar carrossel
            Carousel._interval = setInterval(function () {
                Carousel.Next();
            }, 1500);//era pra ser 5000 mas tava demorando mt
        } else {
            throw "Method Start need a Array Variable.";
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

            // Atualiza a imagem dos carros(obgd youtube)
            carouselElement.innerHTML = `<a href="${currentImage.link}">
                <img src="img/${currentImage.img}" width="500"
            </a>`;

            // coloca outro titulo
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
