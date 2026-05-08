const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

fetch('https://students.netoservices.ru/nestjs-backend/poll')
  .then(response => response.json())
  .then(data => {
    pollTitle.textContent = data.data.title;
    pollAnswers.innerHTML = '';
    data.data.answers.forEach(answer => {
      const button = document.createElement('button');
      button.classList.add('poll__answer');
      button.textContent = answer;
      button.addEventListener('click', () => {
        alert('Спасибо, ваш голос засчитан!');
      });
      pollAnswers.appendChild(button);
    });
  })
  .catch(err => {
    pollTitle.textContent = 'Ошибка загрузки опроса';
    console.error(err);
  });