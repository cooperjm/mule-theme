document.addEventListener('DOMContentLoaded', function() {
    var openPopup = document.getElementById('open-contact-block');
    var popup = document.getElementById('header-contact-block');
    var mobileBtn = document.querySelector('.header-mobile-phone');
    const overlay = document.querySelector('[data-site-main-dimmer]');
    var showTimeout, hideTimeout;

    function showPopup() {
        overlay.setAttribute("data-animation", "closed=>open");
        setTimeout(() => {
            overlay.setAttribute("data-animation-state", "open");
            setTimeout(() => {
                overlay.removeAttribute("data-animation");
            }, 400);
            popup.classList.add("active");
        }, 100);
    }

    function hidePopup() {
        overlay.setAttribute("data-animation", "open=>closed");
        overlay.setAttribute("data-animation-state", "closed");
        setTimeout(() => {
            overlay.removeAttribute("data-animation");
        }, 400);
        popup.classList.remove("active");
    }

    openPopup.addEventListener('mouseover', function() {
        clearTimeout(hideTimeout); 
        showTimeout = setTimeout(function() {
            if (openPopup.matches(':hover')) {
                showPopup();
            }
        }, 200);
    });

    openPopup.addEventListener('click', function() {
        clearTimeout(hideTimeout); 
        showTimeout = setTimeout(function() {
            if (openPopup.matches(':hover')) {
                showPopup();
            }
        }, 200);
    });

    openPopup.addEventListener('mouseleave', function(e) {
        clearTimeout(showTimeout);
        hideTimeout = setTimeout(function() {
            if (!popup.contains(e.relatedTarget) && !openPopup.contains(e.relatedTarget)) {
                hidePopup();
            }
        }, 400);
    });

    popup.addEventListener('mouseleave', function(e) {
        hideTimeout = setTimeout(function() {
            if (!openPopup.contains(e.relatedTarget) && !popup.contains(e.relatedTarget)) {
                hidePopup();
            }
        }, 400);
    });

    popup.addEventListener('mouseover', function() {
        clearTimeout(hideTimeout);
    });

    mobileBtn.addEventListener('click', function() {
        if(!overlay.hasAttribute("data-animation") && !popup.classList.contains("active")) {
            showPopup();
        }
        if(!overlay.hasAttribute("data-animation") && popup.classList.contains("active")) {
            hidePopup();
        }
    });

    document.addEventListener('click', function(event) {
        if (!popup.contains(event.target) && !openPopup.contains(event.target) && !mobileBtn.contains(event.target)) {
            hidePopup();
        }
    });
});