document.addEventListener('DOMContentLoaded', function() {
  const loader = document.getElementById('loader');
  const itemsContainer = document.getElementById('items');

  //загрузка = 1
  loader.classList.add('loader_active');

  fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
    .then(response => {
      if (!response.ok) throw new Error(`Ошибка HTTP: ${response.status}`);
      return response.json();
    })
    .then(data => {
      const valute = data.response.Valute;

      itemsContainer.innerHTML = Object.values(valute).map(currency => `
        <div class="item">
          <div class="item__code">${currency.CharCode}</div>
          <div class="item__value">${currency.Value.toFixed(2)}</div>
          <div class="item__currency">руб.</div>
        </div>
      `).join('');

      //загрузка = 0
      loader.classList.remove('loader_active');
    })
    .catch(error => {
      console.error('Ошибка загрузки данных:', error);
      loader.classList.remove('loader_active');
      itemsContainer.innerHTML = '<p>Не удалось загрузить курсы валют. Попробуйте позже.</p>';
    });
});
