const cookie = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter');

const clickerSpeed = document.createElement('div');
clickerSpeed.innerHTML = 'Скорость клика: <span id="clicker__speed-counter">0</span> кликов/сек';
document.querySelector('.clicker').appendChild(clickerSpeed);

const speedCounter = document.getElementById('clicker__speed-counter');

let clickCount = 0;
let lastClickTime = null;

function handleClick() {
    //счётчик
    clickCount++;
    clickerCounter.textContent = clickCount;
    
    // Клик-размер печеньки
    const currentWidth = cookie.width;
    
    if (currentWidth === 200) {
        cookie.width = 220;
        cookie.height = 220;
    } else {
        cookie.width = 200;
        cookie.height = 200;
    }
    
    //скорость клика..
    if (lastClickTime !== null) {
        const currentTime = new Date();
        const timeDiff = (currentTime - lastClickTime) / 1000;
        const speed = (1 / timeDiff).toFixed(2);
        speedCounter.textContent = speed;
    }
    
    lastClickTime = new Date();
}

cookie.addEventListener('click', handleClick);