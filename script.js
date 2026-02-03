// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-container')) {
            navLinks.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        });
    });
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#download') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Screenshots Carousel
const track = document.querySelector('.screenshots-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

if (track && prevBtn && nextBtn) {
    const images = track.querySelectorAll('img');
    let currentIndex = 0;
    
    // Create position indicator
    const carouselSection = document.querySelector('.screenshots');
    if (carouselSection && !document.querySelector('.carousel-position')) {
        const positionIndicator = document.createElement('div');
        positionIndicator.className = 'carousel-position';
        positionIndicator.setAttribute('aria-live', 'polite');
        carouselSection.querySelector('.container').appendChild(positionIndicator);
        updatePosition();
    }
    
    function updatePosition() {
        const indicator = document.querySelector('.carousel-position');
        if (indicator) {
            indicator.textContent = `${currentIndex + 1} / ${images.length}`;
        }
        
        // Update button states
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === images.length - 1;
        prevBtn.style.opacity = currentIndex === 0 ? '0.3' : '1';
        nextBtn.style.opacity = currentIndex === images.length - 1 ? '0.3' : '1';
    }
    
    function scrollToIndex(index) {
        if (index < 0) index = 0;
        if (index >= images.length) index = images.length - 1;
        currentIndex = index;
        
        const imageWidth = images[0].offsetWidth + parseInt(getComputedStyle(images[0]).marginRight);
        track.scrollTo({
            left: imageWidth * index,
            behavior: 'smooth'
        });
        updatePosition();
    }

    nextBtn.addEventListener('click', () => {
        scrollToIndex(currentIndex + 1);
    });

    prevBtn.addEventListener('click', () => {
        scrollToIndex(currentIndex - 1);
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        // Only respond if carousel is in view
        const carouselRect = track.getBoundingClientRect();
        const isInView = carouselRect.top < window.innerHeight && carouselRect.bottom > 0;
        
        if (isInView && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
            e.preventDefault();
            if (e.key === 'ArrowLeft') {
                scrollToIndex(currentIndex - 1);
            } else if (e.key === 'ArrowRight') {
                scrollToIndex(currentIndex + 1);
            }
        }
    });

    // Update index when manually scrolling
    track.addEventListener('scroll', () => {
        const imageWidth = images[0].offsetWidth + parseInt(getComputedStyle(images[0]).marginRight);
        const newIndex = Math.round(track.scrollLeft / imageWidth);
        if (newIndex !== currentIndex) {
            currentIndex = newIndex;
            updatePosition();
        }
    });
    
    // Initialize
    updatePosition();
}

// Intersection Observer for Fade-in Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature cards and other elements
document.querySelectorAll('.feature-card, .why-item, .pricing-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// Lazy Load Images
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        }
    });
});

document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});

// Track Download Button Clicks (for analytics)
document.querySelectorAll('.btn-download').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const platform = btn.classList.contains('btn-apple') ? 'iOS' : 'Android';
        console.log(`Download clicked: ${platform}`);
        
        // You can add analytics tracking here
        // gtag('event', 'download_click', { platform: platform });
    });
});

// Performance: Reduce motion for users who prefer it
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    document.querySelectorAll('*').forEach(el => {
        el.style.animation = 'none';
        el.style.transition = 'none';
    });
}

// Add active state to navigation on scroll
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});

// Easter Egg: Konami Code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode.splice(-konamiSequence.length - 1, konamiCode.length - konamiSequence.length);
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        console.log('🤿 Secret diver mode activated!');
        document.body.style.transform = 'rotate(180deg)';
        setTimeout(() => {
            document.body.style.transform = 'rotate(0deg)';
        }, 2000);
    }
});

// Console Message for Developers
console.log('%c🤿 Skuba — Built by divers, for divers', 'font-size: 20px; font-weight: bold; color: #0066ff;');
console.log('%cInterested in how we built this? Check out https://skuba.app', 'font-size: 14px; color: #666;');
