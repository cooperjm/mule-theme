document.addEventListener("DOMContentLoaded", () => {
    const tooltips = document.querySelectorAll(".text-content-tooltip");
    
    const removeAllActiveClasses = () => {
        tooltips.forEach(tooltip => {
            tooltip.classList.remove("active");
        });
    };

    tooltips.forEach(tooltip => {
        tooltip.addEventListener("click", (event) => {
            event.stopPropagation(); 
            
            removeAllActiveClasses();
            
            tooltip.classList.toggle("active");
        });
    });

    document.addEventListener("click", () => {
        removeAllActiveClasses();
    });

    document.querySelectorAll('a.cta-secondary-button[href="#image-with-content-section"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - 70;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});