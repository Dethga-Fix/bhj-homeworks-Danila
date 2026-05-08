const form = document.getElementById('form');
const progress = document.getElementById('progress');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const xhr = new XMLHttpRequest();
  xhr.open('POST', form.action);

  xhr.upload.onprogress = (event) => {
    if (event.lengthComputable) {
      progress.value = event.loaded / event.total;
    }
  };

  xhr.onload = () => {
    if (xhr.status === 200) {
      alert('Файл загружен');
      progress.value = 0;
      form.reset();
    } else {
      alert('Ошибка: ' + xhr.status);
    }
  };

  xhr.onerror = () => alert('Ошибка сети');

  const formData = new FormData(form);
  xhr.send(formData);
});