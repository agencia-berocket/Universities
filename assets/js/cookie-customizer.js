/**
 * Cookie-Script Customizer
 * Customizes the text content and appearance of the Cookie-Script banner
 * to match The Data Savings Act visual identity.
 */

(function() {
    function customizeCookieBanner() {
        const banner = document.getElementById('cookiescript_injected') || document.getElementById('cookiescript_injected_fsd');
        if (!banner) return;

        // 1. Customize Header Text (Red/Italic "cookies")
        const header = document.getElementById('cookiescript_header');
        if (header && !header.dataset.customized) {
            let text = header.innerHTML;
            if (text.includes('cookies')) {
                header.innerHTML = text.replace('cookies', '<span class="cs-red-italic">cookies</span>');
                header.dataset.customized = 'true';
            }
        }

        // 2. Customize Description Text (Red/Bold/Italic "Privacy Policy")
        const desc = document.getElementById('cookiescript_description');
        if (desc && !desc.dataset.customized) {
            let text = desc.innerHTML;
            
            // Fix Privacy Policy link formatting
            if (text.includes('Privacy Policy')) {
                // If it's already a link, we style the link. If not, we might need to wrap it.
                // Cookie-Script often puts a link there.
                const links = desc.getElementsByTagName('a');
                let foundLink = false;
                for (let link of links) {
                    if (link.textContent.includes('Privacy Policy')) {
                        link.classList.add('cs-link-highlight');
                        foundLink = true;
                    }
                }
                
                if (!foundLink) {
                    desc.innerHTML = text.replace('Privacy Policy', '<span class="cs-link-highlight">Privacy Policy</span>');
                }
                desc.dataset.customized = 'true';
            }
        }
        
        // 3. Ensure the banner doesn't break the page layout/styles
        // The CSS overrides in dsa-style.css handle the visual isolation.
    }

    // Use MutationObserver to catch the banner as soon as it's injected
    const observer = new MutationObserver((mutations) => {
        for (let mutation of mutations) {
            if (mutation.addedNodes.length) {
                customizeCookieBanner();
            }
        }
    });

    // Start observing
    if (document.body) {
        observer.observe(document.body, { childList: true, subtree: true });
    } else {
        window.addEventListener('DOMContentLoaded', () => {
            observer.observe(document.body, { childList: true, subtree: true });
            customizeCookieBanner();
        });
    }

    // Fallback interval
    const interval = setInterval(() => {
        customizeCookieBanner();
        const banner = document.getElementById('cookiescript_injected');
        if (banner && banner.dataset.customized) {
            // We can keep it running for a bit to be sure, or stop.
            // Some dynamic updates might revert changes.
        }
    }, 1000);
    
    // Stop after 10 seconds to save resources
    setTimeout(() => clearInterval(interval), 10000);
})();
