const dropdowns = document.querySelectorAll('.dropdown');

//close
function closeAllDropdowns() {
    document.querySelectorAll('.dropdown__list_active').forEach(list => {
        list.classList.remove('dropdown__list_active');
    });
}

//открыть/закрыть
function toggleDropdown(dropdown) {
    const list = dropdown.querySelector('.dropdown__list');
    if (list) {
        list.classList.toggle('dropdown__list_active');
    }
}

document.addEventListener('click', (event) => {
    const dropdown = event.target.closest('.dropdown');
    
    if (event.target.closest('.dropdown__value')) {
        event.preventDefault();
        if (dropdown) {
            const list = dropdown.querySelector('.dropdown__list');
            const isOpen = list.classList.contains('dropdown__list_active');
            
            closeAllDropdowns();
            
            if (!isOpen) {
                list.classList.add('dropdown__list_active');
            }
        }
    }
    
    else if (event.target.closest('.dropdown__item')) {
        event.preventDefault();
        if (dropdown) {
            //выбранное значение оставляем
            const link = event.target.closest('.dropdown__link');
            const value = link ? link.textContent : event.target.closest('.dropdown__item').textContent.trim();
            
            //меняем
            const valueElement = dropdown.querySelector('.dropdown__value');
            if (valueElement) {
                valueElement.textContent = value;
            }
            
            const list = dropdown.querySelector('.dropdown__list');
            if (list) {
                list.classList.remove('dropdown__list_active');
            }
        }
    }
    
    //dropdown-закрываем
    else if (!event.target.closest('.dropdown')) {
        closeAllDropdowns();
    }
});