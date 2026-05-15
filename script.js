document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Sticky Header ---
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- 2. Scroll Reveal Animations ---
    const revealElements = document.querySelectorAll('.fade-up, .reveal-up, .reveal-left, .reveal-right');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });
    revealElements.forEach(el => revealObserver.observe(el));

    // --- 3. Horizontal Tech Scroller ---
    const techScroller = document.getElementById('tech-scroller');
    const scrollLeftBtn = document.getElementById('tech-scroll-left');
    const scrollRightBtn = document.getElementById('tech-scroll-right');

    if (techScroller && scrollLeftBtn && scrollRightBtn) {
        scrollLeftBtn.addEventListener('click', () => {
            techScroller.scrollBy({ left: -400, behavior: 'smooth' });
        });
        scrollRightBtn.addEventListener('click', () => {
            techScroller.scrollBy({ left: 400, behavior: 'smooth' });
        });
    }

    // --- 4. Multi-Step Booking Engine ---
    const multiStepForm = document.getElementById('multiStepForm');
    if (multiStepForm) {
        let currentStep = 1;
        const steps = document.querySelectorAll('.form-step');
        const indicators = document.querySelectorAll('.step-indicator .step');
        const nextBtns = document.querySelectorAll('.next-btn');
        const prevBtns = document.querySelectorAll('.prev-btn');

        function updateFormSteps() {
            // Update step visibility
            steps.forEach((step, index) => {
                if (index === currentStep - 1) {
                    step.classList.add('active');
                } else {
                    step.classList.remove('active');
                }
            });

            // Update indicators
            indicators.forEach((indicator, index) => {
                if (index < currentStep) {
                    indicator.classList.add('active');
                } else {
                    indicator.classList.remove('active');
                }
            });
        }

        nextBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                if (currentStep < steps.length) {
                    // Optional: Add validation here before proceeding
                    currentStep++;
                    updateFormSteps();
                }
            });
        });

        prevBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                if (currentStep > 1) {
                    currentStep--;
                    updateFormSteps();
                }
            });
        });

        // Handle final submit
        multiStepForm.addEventListener('submit', (e) => {
            e.preventDefault();
            multiStepForm.style.display = 'none';
            document.querySelector('.step-indicator').style.display = 'none';
            document.getElementById('form-success').classList.add('active');
        });
    }

    // --- 5. Educational Hub Filters ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const blogCards = document.querySelectorAll('.blog-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state of buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            // Filter cards
            blogCards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'block';
                    // Reset animation
                    card.classList.remove('active');
                    setTimeout(() => card.classList.add('active'), 50);
                } else {
                    if (card.classList.contains(filterValue)) {
                        card.style.display = 'block';
                        card.classList.remove('active');
                        setTimeout(() => card.classList.add('active'), 50);
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });

    // --- 6. Testimonial Slider ---
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.slider-dots .dot');
    let currentSlide = 0;
    let slideInterval;

    function goToSlide(n) {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    if (slides.length > 0) {
        // Auto slide
        slideInterval = setInterval(nextSlide, 5000);

        // Dot click handlers
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                clearInterval(slideInterval);
                goToSlide(index);
                slideInterval = setInterval(nextSlide, 5000); // Restart interval
            });
        });
    }

});
