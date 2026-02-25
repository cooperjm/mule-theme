document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll('.product-comparison-section .product-comparison-tabs .product-comparison-tab')
    const items = document.querySelectorAll('.product-comparison-section .product-comparison-block .product-comparison-item')
    tabs.forEach(tab => {
        tab.addEventListener('click', ()=> {
            if (!tab.classList.contains('active')) {
                tabs.forEach(tab => {
                    tab.classList.toggle('active')
                })
                items.forEach(tab => {
                    tab.classList.toggle('active')
                })
            }
        })
    })
})