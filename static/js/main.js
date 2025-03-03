/**
 * Kanopus Website - Main JavaScript
 * Enterprise-grade vanilla JS implementation
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initScrollEffects();
    populateProjects();
    setCurrentYear();
    createScrollToTopButton();
    initAnimations();
    // Removed initContactForm() as the contact section has been removed
});

/**
 * Handles mobile navigation functionality
 */
function initNavigation() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Toggle mobile menu
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            mainNav.classList.toggle('nav-open');
            document.body.classList.toggle('menu-open');
        });
    }
    
    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (mainNav.classList.contains('nav-open')) {
                mainNav.classList.remove('nav-open');
                document.body.classList.remove('menu-open');
            }
        });
    });
    
    // Handle header scroll effect
    const header = document.querySelector('.site-header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
        
        if (currentScroll > lastScroll && currentScroll > 300) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });
}

/**
 * Handles smooth scrolling and active link highlighting
 */
function initScrollEffects() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Update active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY + 200;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    });
}

/**
 * Populates projects section with data
 */
function populateProjects() {
    const projectsContainer = document.getElementById('projectsGrid');
    
    if (!projectsContainer) return;
    
    const projects = [
        {
            name: "Aurelis",
            tagline: "Enterprise AI Coding Assistant",
            description: "Aurelis represents the pinnacle of AI-powered software development assistance, leveraging multiple language models and advanced reasoning capabilities to deliver high-quality code solutions.",
            features: [
                "Multi-modal AI processing with GPT-4, DeepSeek R1, and O3-mini",
                "Enterprise-grade security with audit trails and encrypted credential storage",
                "Advanced capabilities including automated testing",
                "Seamless developer workflow integration"
            ],
            github: "https://github.com/KanopusDev/Aurelis",
            demo: "#"
        },
        {
            name: "Polris",
            tagline: "Advanced Code Generation Transformer",
            description: "A sophisticated transformer-based model specifically optimized for code generation, understanding, and processing, with a focus on CPU-based training efficiency.",
            features: [
                "Code-specific transformer architecture with customized positional encoding",
                "Advanced tokenization with language-specific optimizations",
                "Memory-optimized training for CPU environments",
                "Sophisticated conversation management with Redis-based context storage"
            ],
            github: "https://github.com/KanopusDev/Polris",
            demo: "#"
        },
        {
            name: "Canopus",
            tagline: "Professional AI-Driven Voice Assistant for Developers",
            description: "Canopus revolutionizes the development experience through an intuitive voice interface that streamlines navigation, documentation, and project management tasks.",
            features: [
                "Intelligent code navigation and semantic search capabilities",
                "On-demand code review and static analysis",
                "Automated documentation generation and maintenance",
                "Advanced speech recognition with noise reduction and VAD"
            ],
            github: "https://github.com/KanopusDev/Canopus",
            demo: "#"
        },
        {
            name: "Aoede",
            tagline: "AI-Powered Website Generation Engine",
            description: "A Python-based open-source project that leverages artificial intelligence for automated website generation, built on modern frameworks and practices.",
            features: [
                "High-performance FastAPI backend with asynchronous processing",
                "Advanced AI integration for website generation algorithms",
                "Robust database management with SQLAlchemy ORM",
                "High-speed data caching with Redis"
            ],
            github: "https://github.com/KanopusDev/Aoede",
            demo: "#"
        },
        {
            name: "Nova",
            tagline: "High-Performance AI-Enhanced Search Engine",
            description: "Nova delivers intelligent web crawling, efficient indexing, and lightning-fast search capabilities enhanced by advanced machine learning techniques.",
            features: [
                "Fast and accurate search powered by Elasticsearch",
                "AI-enhanced search rankings using BERT embeddings",
                "Intelligent web crawling with robots.txt compliance",
                "High-performance infrastructure with Redis caching"
            ],
            github: "https://github.com/KanopusDev/Nova",
            demo: "#"
        },
        {
            name: "Meta",
            tagline: "Meta Platforms Integration API",
            description: "A robust API framework for seamless integration with Meta platforms such as WhatsApp and Instagram, enabling sophisticated messaging capabilities and analytics.",
            features: [
                "Streamlined messaging integration with Meta platforms",
                "Template management for consistent communication",
                "Comprehensive analytics and monitoring tools",
                "Production-ready security measures"
            ],
            github: "https://github.com/KanopusDev/Meta",
            demo: "#"
        }
    ];
    
    // Create project cards and append to container
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card fade-in';
        
        projectCard.innerHTML = `
            <div class="project-header">
                <h3>${project.name}</h3>
                <p>${project.tagline}</p>
            </div>
            <div class="project-body">
                <div class="project-desc">
                    <p>${project.description}</p>
                </div>
                <div class="project-features">
                    <h4>Key Features:</h4>
                    <ul class="feature-list">
                        ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                <div class="project-footer">
                    <div class="project-links">
                        <a href="${project.github}" target="_blank" rel="noopener"><i class="fab fa-github"></i> GitHub</a>
                    </div>
                </div>
            </div>
        `;
        
        projectsContainer.appendChild(projectCard);
    });
}

/**
 * Validates email format - Kept for potential future use
 * @param {string} email - Email to validate
 * @return {boolean} - True if valid email
 */
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}

/**
 * Sets the current year in footer copyright
 */
function setCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

/**
 * Creates and handles the scroll-to-top button
 */
function createScrollToTopButton() {
    // Create button element
    const scrollButton = document.createElement('div');
    scrollButton.className = 'scroll-top';
    scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollButton);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 500) {
            scrollButton.classList.add('visible');
        } else {
            scrollButton.classList.remove('visible');
        }
    });
    
    // Scroll to top when clicked
    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * Initializes scroll animations for elements
 */
function initAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    // Check if IntersectionObserver is supported
    if (!'IntersectionObserver' in window) {
        // Fallback for browsers that don't support IntersectionObserver
        fadeElements.forEach(element => {
            element.classList.add('visible');
        });
        return;
    }
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });
    
    fadeElements.forEach(element => {
        observer.observe(element);
    });
}
