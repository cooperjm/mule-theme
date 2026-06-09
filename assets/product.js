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
        if (!productGallery) {
            return;
        }

        var windowWidth = window.innerWidth;

        if (windowWidth <= 768) {
            var container = productGallery.parentNode;
            if (!container) return;
        
            if (productTitle && productTitle.parentNode !== container) {
                container.insertBefore(productTitle, productGallery);
            }
        
            if (productSKU && productSKU.parentNode !== container) {
                container.insertBefore(productSKU, productGallery);
            }
        
            if (productTagline && productTagline.parentNode !== container) {
                container.insertBefore(productTagline, productGallery);
            }
        
            if (productTagline2 && productTagline2.parentNode !== container) {
                container.insertBefore(productTagline2, productGallery);
            }
        
            if (productApp && productApp.parentNode !== container) {
                container.insertBefore(productApp, productGallery);
            }
        } else {
            var productDetails = document.querySelector('[data-product-details]');
            if (productDetails) {
                var referenceNode = null;
                var children = productDetails.children;
                for (var i = 0; i < children.length; i++) {
                    var child = children[i];
                    if (!child.classList.contains('product-block--title') &&
                        !child.classList.contains('product-block--sku') &&
                        !child.classList.contains('product-block--prd_tagline') &&
                        !child.classList.contains('product-block--prd_tagline_2') &&
                        !child.classList.contains('product-app') &&
                        !child.classList.contains('product-block--app')) {
                        referenceNode = child;
                        break;
                    }
                }

                if (productTitle && productTitle.parentNode !== productDetails) {
                    productDetails.insertBefore(productTitle, referenceNode);
                }
                if (productSKU && productSKU.parentNode !== productDetails) {
                    productDetails.insertBefore(productSKU, referenceNode);
                }
                if (productTagline && productTagline.parentNode !== productDetails) {
                    productDetails.insertBefore(productTagline, referenceNode);
                }
                if (productTagline2 && productTagline2.parentNode !== productDetails) {
                    productDetails.insertBefore(productTagline2, referenceNode);
                }
                if (productApp && productApp.parentNode !== productDetails) {
                    productDetails.insertBefore(productApp, referenceNode);
                }
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