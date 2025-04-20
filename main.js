// Main JavaScript file for Premium Travel Insights Hub
// Handles navigation, animations, and interactive elements

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            const icon = mobileMenuToggle.querySelector('i');
            if (icon) {
                if (mainNav.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }
    
    // Sticky header
    const header = document.querySelector('.site-header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput && emailInput.value) {
                // In a real implementation, this would send the data to a server
                // For now, we'll just show a success message
                const formContainer = this.parentElement;
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.innerHTML = '<p>Thank you for subscribing! We\'ll send you travel inspiration soon.</p>';
                
                // Replace the form with the success message
                formContainer.innerHTML = '';
                formContainer.appendChild(successMessage);
            }
        });
    }
    
    // Initialize animation on scroll
    // This is a simple implementation - in a production site, you might use a library like AOS
    const animateElements = document.querySelectorAll('.destination-card, .tour-card, .article-card');
    
    const animateOnScroll = function() {
        animateElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    };
    
    // Initial check on page load
    animateOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Add affiliate link tracking
    // This would track clicks on affiliate links for analytics
    const affiliateLinks = document.querySelectorAll('a[href*="tripadvisor"], a[href*="gadventures"]');
    
    affiliateLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // In a real implementation, this would send tracking data to analytics
            console.log('Affiliate link clicked:', this.href);
            
            // You could also implement cookie tracking for conversions here
        });
    });
});
