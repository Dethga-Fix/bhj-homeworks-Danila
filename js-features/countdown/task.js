const timerElement = document.getElementById('timer');
let totalSeconds = parseInt(timerElement.textContent);

//hh:mm:ss
function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = secs.toString().padStart(2, '0');
    
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function updateDisplay() {
    timerElement.textContent = formatTime(totalSeconds);
}

function redirectToFile() {
    //Попытка со скачиванием
    window.location.href = 'https://example.com/prize.zip';
}

//Обновления таймера
function updateTimer() {
    totalSeconds--;
    updateDisplay();
    
    if (totalSeconds <= 0) {
        clearInterval(timerInterval);
        alert('Вы победили в конкурсе!');
        redirectToFile();
    }
}

updateDisplay();
const timerInterval = setInterval(updateTimer, 1000);