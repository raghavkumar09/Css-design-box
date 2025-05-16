document.addEventListener('DOMContentLoaded', () => {
    const bundleOptions = document.querySelectorAll('.bundle-option');
    const radioButtons = document.querySelectorAll('input[name="bundle-choice"]');
    const totalAmountElement = document.getElementById('total-amount');

    // --- Hardcoded total from image ---
    const staticTotal = "DKK 360.00";

    function handleSelectionChange(event) {
        const selectedRadio = event.target;
        const selectedOption = selectedRadio.closest('.bundle-option');

        bundleOptions.forEach(option => {
            option.classList.remove('selected');
            option.querySelector('.option-details');
        });

        // Add 'selected' class to the clicked option and show its details
        if (selectedOption) {
            selectedOption.classList.add('selected');
            selectedOption.querySelector('.option-details');
        } else {
             console.error("Could not find parent .bundle-option for", selectedRadio);
        }
    }

    // Add event listeners to radio buttons
    radioButtons.forEach(radio => {
        radio.addEventListener('change', handleSelectionChange);
    });

    // --- Set initial state based on 'checked' attribute in HTML ---
    function setInitialState() {
        const checkedRadio = document.querySelector('input[name="bundle-choice"]:checked');
        if (checkedRadio) {
            const initialSelectedOption = checkedRadio.closest('.bundle-option');
            if (initialSelectedOption) {
                initialSelectedOption.classList.add('selected');
                totalAmountElement.textContent = staticTotal;
            }
        } else {
             totalAmountElement.textContent = staticTotal;
        }
    }

    setInitialState();
});