const products = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products');

products.forEach(product => {
  const id = product.dataset.id;
  const image = product.querySelector('.product__image');
  const imageSrc = image.src;
  const decBtn = product.querySelector('.product__quantity-control_dec');
  const incBtn = product.querySelector('.product__quantity-control_inc');
  const quantityValue = product.querySelector('.product__quantity-value');
  const addBtn = product.querySelector('.product__add');

  decBtn.addEventListener('click', () => {
    let value = parseInt(quantityValue.textContent);
    if (value > 1) {
      quantityValue.textContent = value - 1;
    }
  });

  incBtn.addEventListener('click', () => {
    let value = parseInt(quantityValue.textContent);
    quantityValue.textContent = value + 1;
  });

  addBtn.addEventListener('click', () => {
    const quantity = parseInt(quantityValue.textContent);
    let existingCartItem = cartProducts.querySelector(`.cart__product[data-id="${id}"]`);
    if (existingCartItem) {
      const countSpan = existingCartItem.querySelector('.cart__product-count');
      let currentCount = parseInt(countSpan.textContent);
      countSpan.textContent = currentCount + quantity;
    } else {
      const cartItem = document.createElement('div');
      cartItem.className = 'cart__product';
      cartItem.setAttribute('data-id', id);
      const img = document.createElement('img');
      img.className = 'cart__product-image';
      img.src = imageSrc;
      const countSpan = document.createElement('div');
      countSpan.className = 'cart__product-count';
      countSpan.textContent = quantity;
      cartItem.appendChild(img);
      cartItem.appendChild(countSpan);
      cartProducts.appendChild(cartItem);
    }
  });
});