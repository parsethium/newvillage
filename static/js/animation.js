document.addEventListener('DOMContentLoaded', function() {
    const siteTitle = document.getElementById('siteTitle');
    const originalText = siteTitle.getAttribute('data-original-text') || 'New Village';
    const variantText = siteTitle.getAttribute('data-variant-text') || 'NV SHOP ABOUT';
    const currentPage = siteTitle.getAttribute('data-page') || 'home';

    // Detect if device supports hover (desktop)
    const supportsHover = window.matchMedia('(hover: hover)').matches;

    let isClicked = false;
    let hoverEnabled = false;  // Disable hover initially
    let hasLeftTitle = false;  // Track if user has moved mouse away from title

    function showMenu() {
        // Create clickable spans for each menu item
        // Filter out empty strings but preserve spacing
        const parts = variantText.split(' ');
        siteTitle.innerHTML = '';

        parts.forEach(function(part, index) {
            if (part.trim() === '') {
                // Add spaces for empty parts
                siteTitle.appendChild(document.createTextNode('\u00A0')); // non-breaking space
                return;
            }

            const span = document.createElement('span');
            span.className = 'menu-item';
            span.textContent = part;
            span.setAttribute('data-menu-item', part);

            // Add click handler for each menu item
            span.addEventListener('click', function(e) {
                e.stopPropagation();

                if (part === 'NV') {
                    window.location.href = '/';
                } else if (part === 'SHOP' && currentPage !== 'shop') {
                    window.location.href = '/shop/';
                } else if (part === 'ABOUT' && currentPage !== 'about') {
                    window.location.href = '/about/';
                }
            });

            siteTitle.appendChild(span);

            // Add space after each word
            if (index < parts.length - 1) {
                siteTitle.appendChild(document.createTextNode(' '));
            }
        });
    }

    function hideMenu() {
        siteTitle.textContent = originalText;
    }

    // Show variant on hover (desktop only)
    if (supportsHover) {
        // Track when mouse leaves the title area to enable hover
        siteTitle.addEventListener('mouseleave', function() {
            if (!hasLeftTitle) {
                hasLeftTitle = true;
                hoverEnabled = true;
            }

            if (!isClicked) {
                hideMenu();
            }
        });

        siteTitle.addEventListener('mouseenter', function() {
            // Only show menu on hover if user has moved mouse away at least once
            if (hoverEnabled && !isClicked) {
                showMenu();
            }
        });
    }

    // Toggle menu on click
    siteTitle.addEventListener('click', function(e) {
        // Only toggle if clicking on the title itself, not a menu item
        if (e.target.classList.contains('menu-item')) {
            return;
        }

        e.preventDefault();

        if (!isClicked) {
            showMenu();
            isClicked = true;
        } else {
            hideMenu();
            isClicked = false;
        }
    });
});
