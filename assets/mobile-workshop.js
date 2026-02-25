document.addEventListener('DOMContentLoaded', ()=> {
    const anchorSections = document.querySelectorAll('.image-with-content-section');
    document.querySelectorAll('.anchor-image-slider-block-img:not(.slick-cloned)').forEach((anchor, i) => {
        anchor.addEventListener('click', function(e) {
            const targetElement = anchorSections[i];
    
            if (targetElement) {
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - (window.innerWidth <= 768 ? 50 : 70);
    
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
})