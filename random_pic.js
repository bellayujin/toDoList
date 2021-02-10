const random_box = document.querySelector(".random_pic");

const IMG_NUMBER = 5;

function paintImage(imgNumber){
    const image = new Image();
    image.src = `image/${imgNumber + 1}.jpg`;
    image.classList.add("bgImg");
    random_box.appendChild(image);
};

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
};

function init(){
    const randomNumber = genRandom();

    paintImage(randomNumber);
};

init();