//пытался сделать по короче, но трудновато выходит, так что могут быть ошибки или недочёты...
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab__content');

//обработтчик
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    if (tab.classList.contains('tab_active')) {
      return;
    }
    
    tabs.forEach(t => t.classList.remove('tab_active'));
    
    tab.classList.add('tab_active');
    
    contents.forEach(c => c.classList.remove('tab__content_active'));
    
    contents[index].classList.add('tab__content_active');
  });
}); //отдельная кукуха с оформлением, тяжко с });, при чём сам путаю себя...