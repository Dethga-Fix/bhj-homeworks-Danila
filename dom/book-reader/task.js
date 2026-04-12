const book = document.getElementById('book');
const fontSizes = document.querySelectorAll('.font-size');

fontSizes.forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    
    fontSizes.forEach(btn => btn.classList.remove('font-size_active'));  //remove активный класс у всех кнопок

    button.classList.add('font-size_active'); //add активный класс нажатой кнопке
    
    book.classList.remove('book_fs-big', 'book_fs-small');  //remove классы размера у book
    
    if (button.dataset.size === 'small') {
      book.classList.add('book_fs-small');
    } else if (button.dataset.size === 'big') {
      book.classList.add('book_fs-big');
    }
  });
});