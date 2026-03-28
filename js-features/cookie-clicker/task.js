const clickerCounter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');

// Сам таймер, нормально должно выглядеть...
const timerDisplay = document.createElement('div');
timerDisplay.id = 'timer';
timerDisplay.className = 'clicker__timer';
timerDisplay.style.cssText = `
    font-size: 32px;
    text-align: center;
    margin-top: 20px;
    font-weight: bold;
    color: #ff6b6b;
    font-family: monospace;
`;

// Попытка работы с document...
const clickerStatus = document.querySelector('.clicker__status');
clickerStatus.insertAdjacentElement('afterend', timerDisplay);

// Количества кликов
let clickCount = 0;

//Счётчик кликов фун.
function handleClick() {
    clickCount++;
    clickerCounter.textContent = clickCount;
    
    //Просто поигрался с кодом, увеличение cookie
    cookie.style.width = '250px';
    setTimeout(() => {
        cookie.style.width = '200px';
    }, 100);
}

cookie.onclick = handleClick; //Клик на cookie

let timeLeft = 120; //2 минут

//hh:mm:ss
function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

//Функция обновления таймера
function updateTimer() {
    if (timeLeft <= 0) {
        alert('Вы победили в конкурсе!');
        clearInterval(timerInterval);
        timerDisplay.textContent = '00:00:00';
        timerDisplay.style.color = '#4caf50';
        return;
    }
    
    //обновляю отображение
    timerDisplay.textContent = formatTime(timeLeft);
    timeLeft--;
}

const timerInterval = setInterval(updateTimer, 1000); //Старт

timerDisplay.textContent = formatTime(timeLeft);