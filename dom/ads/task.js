const rotators = document.querySelectorAll('.rotator');

rotators.forEach(rotator => {
  const cases = Array.from(rotator.querySelectorAll('.rotator__case'));
  if (cases.length === 0) return;
  
  let currentIndex = 0;
  let intervalId;
  
  function rotate() {
    cases[currentIndex].classList.remove('rotator__case_active');
    
    currentIndex = (currentIndex + 1) % cases.length; //переход к новому
    
    cases[currentIndex].classList.add('rotator__case_active');
    
    //применяем цвет из data-color
    if (cases[currentIndex].dataset.color) {
      cases[currentIndex].style.color = cases[currentIndex].dataset.color;
    }
    
    //получаем data-speed
    let speed = 1000;
    if (cases[currentIndex].dataset.speed) {
      speed = parseInt(cases[currentIndex].dataset.speed);
    }
    
    //перезапускаем интервал
    clearInterval(intervalId);
    intervalId = setInterval(rotate, speed);
  }
  
  //цвет и скорость
  if (cases[currentIndex].dataset.color) {
    cases[currentIndex].style.color = cases[currentIndex].dataset.color;
  }
  
  let initialSpeed = 1000;
  if (cases[currentIndex].dataset.speed) {
    initialSpeed = parseInt(cases[currentIndex].dataset.speed);
  }

  //запускаем
  intervalId = setInterval(rotate, initialSpeed);
});