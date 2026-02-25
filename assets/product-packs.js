document.addEventListener('DOMContentLoaded', function() {
    const variantSelects = document.querySelectorAll('select.product-pack-variant-select');
    
    variantSelects.forEach(select => {
        select.addEventListener('change', function() {
            const parent = select.closest('.product-packs-item');
            const atcButton = parent.querySelector('button.product-pack-atc-btn');
            atcButton.setAttribute('data-product-url', select.value);
            if (select.options[select.selectedIndex].dataset.outOfStock) {
                atcButton.setAttribute("disabled","disabled");
            } else {
                atcButton.removeAttribute("disabled");
            }
        });

        organizeOptions(select);

        const event = new Event('change');
        select.dispatchEvent(event);
    });

    const atcButtons = document.querySelectorAll('button.product-pack-atc-btn');

    function organizeOptions(select) {
        const firstElementValue = select.querySelector('option').getAttribute('data-first-element');
        const options = Array.from(select.options);
        let firstOption = null;

        options.forEach(function(option) {
        if (option.value === firstElementValue) {
            firstOption = option;
        }
        });

        if (firstOption) {
            select.removeChild(firstOption);
            select.insertBefore(firstOption, select.firstChild);
        }

        select.value = select.options[0].value;       
    }
    
    atcButtons.forEach(button => {
        button.addEventListener('click', function() {
            const href = button.getAttribute('data-product-url');
            
            window.location.href = href
        });
    });

    document.querySelectorAll('a.cta-button[href="#product-packs-section"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - 55;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});