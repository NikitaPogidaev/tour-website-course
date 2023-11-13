const checkboxes = document.querySelectorAll('input[name="services"]');
            const totalPriceElement = document.getElementById('total-price');
        
            checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                let totalPrice = 0;
                checkboxes.forEach(checkbox => {
                if (checkbox.checked) {
                    totalPrice += parseInt(checkbox.getAttribute('data-price'));
                }
                });
                totalPriceElement.textContent = `Сумма: ${totalPrice} рублей`;
            });
            });