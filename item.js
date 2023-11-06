const items = document.querySelectorAll('.item');

items.forEach(item => {
    const addButton = item.querySelector('.btn');
    const plusButton = item.querySelector('.plus');
    const minusButton = item.querySelector('.minus');
    const quantityElement = item.querySelector('.quantity');

    let quantity = 0;

    // Функция для обновления состояния кнопки "Add"
    function updateAddButtonState() {
        if (quantity > 0) {
            addButton.disabled = true;
        } else {
            addButton.disabled = false;
        }
    }

    addButton.addEventListener('click', () => {
        quantity++;
        quantityElement.textContent = quantity;
        updateAddButtonState();
    });

    plusButton.addEventListener('click', () => {
        quantity++;
        quantityElement.textContent = quantity;
        updateAddButtonState();
    });

    minusButton.addEventListener('click', () => {
        if (quantity > 0) {
            quantity--;
            quantityElement.textContent = quantity;
            updateAddButtonState();
        }
    });
});
