const modal = document.getElementById('subscribe-modal');
const closeBtn = modal.querySelector('.modal__close');

function setCookie(name, value, days = 365) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

function closeModal() {
  modal.classList.remove('modal_active');
  setCookie('modalClosed', 'true');
}

closeBtn.addEventListener('click', closeModal);

const isModalClosed = getCookie('modalClosed');
if (!isModalClosed) {
  modal.classList.add('modal_active');
}