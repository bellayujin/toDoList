const waterProgress = document.querySelector('.water-progress');
const waterList = document.querySelector('.water-img')

let dailyGoal = 1;

function waterActive(event){
    const drop = event.target;
    let check = drop.classList.length;

    if(check === 0){
        drop.classList.add('fin');
        drop.src= '/image/water_on.png';
    }else{
        drop.classList.remove('fin');
        drop.src= '/image/water_off.png';
    };

    let fill = document.querySelector('.activeBar');
    let drunken = waterList.querySelectorAll('.fin');
    let drunken_ea = drunken.length;

    console.log(drunken_ea);
    fill.style.width= 100 / 8 * drunken_ea + "%";

    let fillValue = fill.style.width;
    let feeling = document.querySelector('.feeling');


    if (fillValue < '20%' && fillValue !== '100%'){

        feeling.src="/image/drink_0.png";

    } else if (fillValue < '40%' && fillValue !== '100%'){

        feeling.src="/image/drink_1.png";

    } else if (fillValue < '70%' && fillValue !== '100%'){

        feeling.src="/image/drink_2.png";

    } else if (fillValue < '90%' && fillValue !== '100%'){

        feeling.src="/image/drink_3.png";

    } else {
        feeling.src="/image/drink_4.png";
    }
    
};

function waterGauge(){
    const activeBar = document.createElement('div');
    let activeFace = document.createElement('img');

    activeBar.classList.add('activeBar');
    waterProgress.appendChild(activeBar);

    activeFace.src='/image/drink_0.png';
    activeFace.classList.add('feeling');
    activeBar.appendChild(activeFace);

    for (var i = 1; i < 9; i++){
        let img = document.createElement('div');
        img.setAttribute("id", "drop_" + i)

        img.innerHTML = "<img src='/image/water_off.png' width='30px'/>"
        waterList.appendChild(img);
    }



}

function init(){
    waterGauge();
    waterList.addEventListener('click', waterActive);
};

init();