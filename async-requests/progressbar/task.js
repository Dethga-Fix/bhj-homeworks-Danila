const form = document.getElementById('form');
const progress = document.getElementById('progress');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const xhr = new XMLHttpRequest();
    xhr.open('POST', form.action);

    xhr.upload.onprogress = function(event) {
        if (event.lengthComputable) {
            progress.value = event.loaded / event.total;
        }
    };

    xhr.onload = function() {
        if (xhr.status === 200) {
            alert('Файл успешно загружен');
        } else {
            alert('Ошибка при загрузке файла');
        }
    };

    const formData = new FormData(form);
    xhr.send(formData);
});