const editor = document.getElementById('editor');
const container = document.querySelector('.card');

const clearButton = document.createElement('button');
clearButton.textContent = 'Очистить содержимое';
clearButton.className = 'clear-button';
clearButton.style.marginTop = '10px';
container.appendChild(clearButton);

editor.addEventListener('input', () => {
  localStorage.setItem('editorContent', editor.value);
});

clearButton.addEventListener('click', () => {
  editor.value = '';
  localStorage.removeItem('editorContent');
});

window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('editorContent');
  if (saved !== null) {
    editor.value = saved;
  }
});