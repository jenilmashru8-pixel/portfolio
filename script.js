/* ==========================================================================
   TABLE OF CONTENTS - SCRIPT.JS
   --------------------------------------------------------------------------
   1. DOM CONTENT LOADED INITIALIZER
   2. SMOOTH LERP CURSOR GLOW
   3. SUBTLE MOUSE PARALLAX EFFECT
   4. MAGNETIC BUTTON PHYSICS
   5. NAVBAR INTERACTION & MENU TOGGLE
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* --------------------------------------------------------------------------
       2. SMOOTH LERP CURSOR GLOW
       -------------------------------------------------------------------------- */
    const cursorGlow = document.getElementById('cursorGlow');
    
    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let cursor = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    // Linear Interpolation helper
    const lerp = (start, end, factor) => start + (end - start) * factor;

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    function animateCursor() {
        cursor.x = lerp(cursor.x, mouse.x, 0.08);
        cursor.y = lerp(cursor.y, mouse.y, 0.08);

        if (cursorGlow) {
            cursorGlow.style.transform = `translate(${cursor.x}px, ${cursor.y}px) translate(-50%, -50%)`;
        }

        requestAnimationFrame(animateCursor);
    }
    animateCursor();


    /* --------------------------------------------------------------------------
       3. SUBTLE MOUSE PARALLAX EFFECT
       -------------------------------------------------------------------------- */
    const parallaxHeading = document.querySelector('.parallax-heading');
    const parallaxDesc = document.querySelector('.parallax-desc');
    const parallaxButtons = document.querySelector('.parallax-buttons');

    window.addEventListener('mousemove', (e) => {
        const xPercent = (e.clientX / window.innerWidth - 0.5) * 2; // -1 to 1
        const yPercent = (e.clientY / window.innerHeight - 0.5) * 2;

        // Heading moves 5px
        if (parallaxHeading) {
            parallaxHeading.style.transform = `translate3d(${xPercent * 5}px, ${yPercent * 5}px, 0)`;
        }

        // Description moves 3px
        if (parallaxDesc) {
            parallaxDesc.style.transform = `translate3d(${xPercent * 3}px, ${yPercent * 3}px, 0)`;
        }

        // Buttons move 2px
        if (parallaxButtons) {
            parallaxButtons.style.transform = `translate3d(${xPercent * 2}px, ${yPercent * 2}px, 0)`;
        }
    });


    /* --------------------------------------------------------------------------
       4. MAGNETIC BUTTON PHYSICS
       -------------------------------------------------------------------------- */
    const magneticBtns = document.querySelectorAll('.magnetic-btn');

    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - (rect.left + rect.width / 2);
            const y = e.clientY - (rect.top + rect.height / 2);

            // Magnetic pull calculation
            btn.style.transform = `translate3d(${x * 0.3}px, ${y * 0.3}px, 0) scale(1.05)`;
        });

        btn.addEventListener('mouseleave', () => {
            // Smooth return to base state
            btn.style.transform = `translate3d(0px, 0px, 0) scale(1)`;
        });
    });


    /* --------------------------------------------------------------------------
       5. NAVBAR INTERACTION & MENU TOGGLE
       -------------------------------------------------------------------------- */
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navDrawer = document.getElementById('navDrawer');

    if (hamburgerBtn && navDrawer) {
        hamburgerBtn.addEventListener('click', () => {
            navDrawer.classList.toggle('active');
        });
    }

    const themeBtn = document.getElementById('themeBtn');

    function updateThemeIcon(isLight) {
        if (!themeBtn) return;
        if (isLight) {
            // Render Moon Icon for switching to Dark Mode
            themeBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
            themeBtn.setAttribute('title', 'Switch to Dark Mode');
        } else {
            // Render Sun Icon for switching to Light Mode
            themeBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
            themeBtn.setAttribute('title', 'Switch to Light Mode');
        }
    }

    // Check saved theme
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        updateThemeIcon(true);
    }

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const isLight = document.body.classList.toggle('light-mode');
            localStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark');
            updateThemeIcon(isLight);
        });
    }


    /* --------------------------------------------------------------------------
       6. CONTACT FORM SUBMISSION & SMOOTH SCROLL
       -------------------------------------------------------------------------- */
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            const submitBtn = contactForm.querySelector('button[type="submit"]');

            if (formFeedback) {
                formFeedback.className = 'form-feedback active sending';
                formFeedback.textContent = '⚡ Sending your message directly to Jenil...';
            }

            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.style.opacity = '0.7';
            }

            try {
                const response = await fetch('https://formsubmit.co/ajax/jenilmashru8@gmail.com', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        _subject: `[Portfolio Inquiry] ${subject}`,
                        _template: 'table',
                        _captcha: 'false',
                        message: message
                    })
                });

                const result = await response.json();

                if (response.ok || result.success === "true" || result.success === true) {
                    if (formFeedback) {
                        formFeedback.className = 'form-feedback active success';
                        formFeedback.textContent = '✅ Thank you! Your message has been sent directly to Jenil\'s email.';
                    }
                    contactForm.reset();
                } else {
                    throw new Error(result.message || 'Submission failed');
                }
            } catch (err) {
                console.warn('Direct API submission failed, falling back to mailto:', err);
                if (formFeedback) {
                    formFeedback.className = 'form-feedback active sending';
                    formFeedback.textContent = 'Opening your email client...';
                }
                const mailtoUrl = `mailto:jenilmashru8@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
                window.location.href = mailtoUrl;
            } finally {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.style.opacity = '1';
                }
            }
        });
    }

    // Smooth Scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetElem = document.querySelector(targetId);
                if (targetElem) {
                    e.preventDefault();
                    if (navDrawer && navDrawer.classList.contains('active')) {
                        navDrawer.classList.remove('active');
                    }
                    targetElem.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });


    /* --------------------------------------------------------------------------
       7. DYNAMIC SCROLL REVEAL OBSERVER
       -------------------------------------------------------------------------- */
    const revealElements = document.querySelectorAll('.skill-category-card, .timeline-item, .glass-card');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -20px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));

});

