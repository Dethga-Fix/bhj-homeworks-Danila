const form = document.getElementById('form');
const progress = document.getElementById('progress');
const fileInput = document.getElementById('file');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const file = fileInput.files[0];
  if (!file) {
    alert('Пожалуйста, выберите файл для загрузки');
    return;
  }

  const xhr = new XMLHttpRequest();
  xhr.open('POST', form.action);

  //прогресс загрузки
  xhr.upload.onprogress = (event) => {
    if (event.lengthComputable) {
      progress.value = event.loaded / event.total;
    }
  };

  //завершение загрузки
  xhr.onload = () => {
    if (xhr.status === 200) {
      alert('Файл успешно загружен');
      progress.value = 0;
      form.reset();
    } else {
      alert('Ошибка загрузки: ' + xhr.status);
    }
  };

  //ошибки
  xhr.onerror = () => {
    alert('Произошла ошибка сети при загрузке файла');
  };

  const formData = new FormData();
  formData.append('file', file);
  xhr.send(formData);
});
