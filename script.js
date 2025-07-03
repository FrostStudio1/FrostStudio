document.addEventListener('DOMContentLoaded', () => {

    // --- Scroll to Top Button Logic ---
    const scrollToTopBtn = document.querySelector('.scroll-to-top');

    // Ensure the button exists before adding listeners
    if (scrollToTopBtn) {
        // Function to toggle button visibility
        const toggleVisibility = () => {
            if (window.scrollY > 400) { // Show button after scrolling 400px
                scrollToTopBtn.classList.add('is-visible');
            } else {
                scrollToTopBtn.classList.remove('is-visible');
            }
        };

        // Listen for scroll events
        window.addEventListener('scroll', toggleVisibility);

        // Smooth scroll to top on click
        scrollToTopBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // --- Cookie Banner Logic ---
    const cookieBanner = document.getElementById('cookie-banner');
    const cookieAcceptBtn = document.getElementById('cookie-accept-btn');

    // Check if the banner and button exist
    if (cookieBanner && cookieAcceptBtn) {
        // Check localStorage to see if the user has already consented
        if (!localStorage.getItem('cookieConsent')) {
            cookieBanner.classList.add('is-visible');
        }

        // Add click event to the accept button
        cookieAcceptBtn.addEventListener('click', () => {
            // Hide the banner
            cookieBanner.classList.remove('is-visible');
            // Set a value in localStorage to remember the consent
            localStorage.setItem('cookieConsent', 'true');
        });
    }
});