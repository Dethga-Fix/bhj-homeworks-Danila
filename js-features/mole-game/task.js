const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

//reset
function resetGame() {
    deadCounter.textContent = 0;
    lostCounter.textContent = 0;
}

//Финал
function checkGameOver() {
    const dead = parseInt(deadCounter.textContent);
    const lost = parseInt(lostCounter.textContent);
    
    if (dead === 10) {
        alert('Победа! Вы убили 10 кротов!');
        resetGame();
        return true;
    }
    
    if (lost === 5) {
        alert('Поражение! Вы пропустили 5 кротов!');
        resetGame();
        return true;
    }
    
    return false;
}

for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);
    
    hole.addEventListener('click', function() {
        if (hole.classList.contains('hole_has-mole')) {
            //Хрясь по кроту
            let dead = parseInt(deadCounter.textContent);
            dead++;
            deadCounter.textContent = dead;
        } else {
            //Ха-ха
            let lost = parseInt(lostCounter.textContent);
            lost++;
            lostCounter.textContent = lost;
        }
        
        checkGameOver();
    });
}