//Пытался повышенный уровень сделать, но видимо уже не соображаю.

const signin = document.getElementById('signin');
const signinForm = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const userIdSpan = document.getElementById('user_id');

signinForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(signinForm);
  fetch(signinForm.action, {
    method: 'POST',
    body: formData
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        localStorage.setItem('userId', data.user_id);
        userIdSpan.textContent = data.user_id;
        welcome.classList.add('welcome_active');
        signin.classList.remove('signin_active');
      } else {
        alert('Неверный логин/пароль');
      }
    })
    .catch(() => {
      alert('Ошибка соединения. Попробуйте позже.');
    });
});

const savedUserId = localStorage.getItem('userId');
if (savedUserId) {
  userIdSpan.textContent = savedUserId;
  welcome.classList.add('welcome_active');
  signin.classList.remove('signin_active');
} else {
  signin.classList.add('signin_active');
}