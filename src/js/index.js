
    var img = document.getElementById('image-car');

    function changeImage(image) {
        if (image == '1') {
            img.src = 'src/assets/car2.jpg';
        } else if (image == '2') {
            img.src = 'src/assets/car3.jpg';
        } else {
            img.src = 'src/assets/car.jpg';
        }
    }

    function startImageChange() {
        let count = 0;

        let intervalo = setInterval(() => {
            img.style.opacity = 0.2; // Esconde a imagem antes de trocar

            setTimeout(() => {
                changeImage(count);
                img.style.opacity = 1; // Faz a imagem reaparecer suavemente
                count++;

                if (count > 3) count = 1;
            }, 100); // Aguarda a animação antes de trocar a imagem
            
        }, 3000);
    }

    // Chamar a função para iniciar a troca
    startImageChange();




    let menuMobile = document.getElementById("menuHamburguer");

let botao = document.getElementById("botaaao");

function menuVis() {
    botao.classList.toggle("ativar");
    if(menuMobile.classList.contains("invisivel")) {
        menuMobile.classList.remove("invisivel");
        menuMobile.classList.add("visivel");
    } else {
        menuMobile.classList.remove("visivel");
        menuMobile.classList.add("invisivel");
    }
}
