const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

fetch('https://students.netoservices.ru/nestjs-backend/poll')
  .then(res => res.json())
  .then(data => {
    pollTitle.textContent = data.data.title;
    pollAnswers.innerHTML = '';
    data.data.answers.forEach((answer, idx) => {
      const btn = Object.assign(document.createElement('button'), { className: 'poll__answer', textContent: answer });
      btn.onclick = () => {
        alert('Спасибо, ваш голос засчитан!');
        fetch('https://students.netoservices.ru/nestjs-backend/poll', {
          method: 'POST',
          headers: { 'Content-type': 'application/x-www-form-urlencoded' },
          body: `vote=${data.id}&answer=${idx}`
        })
          .then(res => res.json())
          .then(res => {
            pollAnswers.innerHTML = '';
            const total = res.stat.reduce((s, i) => s + i.votes, 0);
            res.stat.forEach(item => {
              const percent = total ? Math.round(item.votes / total * 100) : 0;
              pollAnswers.innerHTML += `<div>${item.answer}: ${item.votes} голосов (${percent}%)</div>`;
            });
          });
      };
      pollAnswers.appendChild(btn);
    });
  });