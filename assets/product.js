document.addEventListener('DOMContentLoaded', function() {

    var productTitle = document.querySelector('.product-block--title');
    var productSKU = document.querySelector('.product-block--sku');
    var productTagline = document.querySelector('.product-block--prd_tagline');
    var productTagline2 = document.querySelector('.product-block--prd_tagline_2');
    var productApp = document.querySelector('.product-app');
    var productGallery = document.querySelector('.product-gallery');
    var quantitySelector = document.querySelector('.quantity-selector.quantity-selector');
    var priceElement = document.querySelector('.price.product__price');

    function moveTitleAboveGallery() {
    var windowWidth = window.innerWidth;

        if (windowWidth <= 768) {
            var container = productGallery.parentNode;
        
            if (productTitle) {
                container.insertBefore(productTitle, productGallery);
            }
        
            if (productSKU) {
                container.insertBefore(productSKU, productGallery);
            }
        
            if (productTagline) {
                container.insertBefore(productTagline, productGallery);
            }
        
            if (productTagline2) {
                container.insertBefore(productTagline2, productGallery);
            }
        
            if (productApp) {
                container.insertBefore(productApp, productGallery);
            }
        }
    }

    window.addEventListener('load', moveTitleAboveGallery);
    window.addEventListener('resize', moveTitleAboveGallery);


    var tabPanel = document.querySelector('.tab-panel');

    if (tabPanel) {
        var originalContent = tabPanel.innerHTML;
    }
    var maxLength = 752;

    if (originalContent) {
        if (originalContent.length > maxLength) {
            var truncatedContent = originalContent.substring(0, maxLength) + '...';
            var readMoreLink = '<a href="#" id="read-more-link">Read More +</a>';
            tabPanel.innerHTML = truncatedContent + readMoreLink;

            var readMoreElement = document.getElementById('read-more-link');
            readMoreElement.addEventListener('click', function(e) {
                e.preventDefault();
                tabPanel.innerHTML = originalContent;
            });
        }
    }

});