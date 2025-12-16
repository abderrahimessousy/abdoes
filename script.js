// script.js - Enhanced with more features
// At the top of script.js
const CONFIG = {
    totalQuestions: 250, // This will be updated when questions are merged
    chapters: 7,
    version: '1.1.0',
    lastUpdate: '2025-12-16'
};

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initNavigation();
    initModals();
    initChapters();
    initScrollEffects();
    initAnimations();
    initTooltips();
    
    console.log(`%c🔧 Systèmes Embarqués & IA v${CONFIG.version}`, 
        'color: #2563eb; font-weight: bold; font-size: 16px;');
    console.log(`%c✅ Initialisation terminée - ${CONFIG.totalQuestions} questions disponibles`,
        'color: #10b981;');
});

// Gestion du thème améliorée
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Récupérer le thème sauvegardé
    const savedTheme = localStorage.getItem('theme') || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    // Appliquer le thème
    applyTheme(savedTheme);
    
    // Mettre à jour l'icône
    updateThemeIcon(savedTheme);
    
    // Gestionnaire du bouton
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
        
        // Animation de transition
        document.documentElement.classList.add('theme-transition');
        setTimeout(() => {
            document.documentElement.classList.remove('theme-transition');
        }, 300);
    });
    
    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
    }
    
    function updateThemeIcon(theme) {
        themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        themeToggle.setAttribute('aria-label', 
            theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre');
    }
    
    // Écouter les changements de préférences système
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            applyTheme(newTheme);
            updateThemeIcon(newTheme);
        }
    });
}

// Navigation améliorée
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const menuToggle = document.getElementById('menuToggle');
    const navbar = document.querySelector('.navbar');
    const navMenu = document.querySelector('.nav-menu');
    
    // Scroll de la navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Détection de la section active
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
    
    // Navigation fluide
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Mettre à jour l'état actif
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Scroll fluide
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
            
            // Fermer le menu mobile si ouvert
            navMenu.classList.remove('open');
            document.body.style.overflow = 'auto';
        });
    });
    
    // Menu mobile
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        const isOpen = navMenu.classList.contains('open');
        menuToggle.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
        menuToggle.setAttribute('aria-expanded', isOpen);
    });
    
    // Fermer le menu en cliquant à l'extérieur
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target) && navMenu.classList.contains('open')) {
            navMenu.classList.remove('open');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            document.body.style.overflow = 'auto';
            menuToggle.setAttribute('aria-expanded', false);
        }
    });
    
    // Fermer avec Echap
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('open')) {
            navMenu.classList.remove('open');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            document.body.style.overflow = 'auto';
            menuToggle.setAttribute('aria-expanded', false);
        }
    });
}

// Modales améliorées
function initModals() {
    const modal = document.getElementById('lessonModal');
    const modalClose = document.getElementById('modalClose');
    
    // Fermer la modale
    modalClose.addEventListener('click', () => {
        closeModal();
    });
    
    // Fermer en cliquant à l'extérieur
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Fermer avec Echap
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });
    
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Chapitres avec plus de contenu
function initChapters() {
    const chapterButtons = document.querySelectorAll('[data-chapter]');
    const modal = document.getElementById('lessonModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    
    // Gestionnaire des boutons de chapitre
    chapterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const chapterId = button.getAttribute('data-chapter');
            openChapter(chapterId);
        });
    });
    
    // Fonction pour ouvrir un chapitre
    window.openChapter = function(chapterId) {
        if (COURSE_CONTENT.chapters[chapterId]) {
            const chapter = COURSE_CONTENT.chapters[chapterId];
            
            modalTitle.textContent = chapter.title;
            modalContent.innerHTML = chapter.content;
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            
            // Scroll en haut du contenu
            modalContent.scrollTop = 0;
        } else {
            console.error(`Chapitre ${chapterId} non trouvé`);
        }
    };
}

// Effets de scroll
function initScrollEffects() {
    // Animation des éléments au scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observer les sections et cartes
    document.querySelectorAll('.section, .chapter-card, .function-card, .resource-card').forEach(el => {
        observer.observe(el);
    });
    
    // Effet parallaxe pour le hero
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.hero-visual');
        if (parallax) {
            parallax.style.transform = `translateY(${scrolled * 0.05}px)`;
        }
    });
}

// Animations
function initAnimations() {
    // Ajouter la classe d'animation
    document.querySelectorAll('.chapter-card, .function-card, .resource-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('animate-on-scroll');
    });
    
    // Animation du code
    const codeElement = document.querySelector('.code-content code');
    if (codeElement) {
        const code = codeElement.textContent;
        codeElement.innerHTML = code.split('\n').map((line, i) => 
            `<span class="line" style="animation-delay: ${i * 0.1}s">${line}</span>`
        ).join('\n');
    }
}

// Tooltips
function initTooltips() {
    // Ajouter des tooltips aux éléments avec data-tooltip
    document.querySelectorAll('[data-tooltip]').forEach(element => {
        element.addEventListener('mouseenter', () => {
            const tooltip = element.getAttribute('data-tooltip');
            // Implémentation simple - peut être améliorée
            console.log(`Tooltip: ${tooltip}`);
        });
    });
}

// Utilitaires
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Exporter les fonctions utiles
window.SE_IA = {
    version: CONFIG.version,
    formatNumber,
    getRandomInt,
    openChapter: window.openChapter
};

// Gestion des erreurs
window.addEventListener('error', function(e) {
    console.error('Erreur dans l\'application:', e.error);
    // Vous pourriez ajouter une notification à l'utilisateur ici
});

// Service Worker pour le mode hors ligne (optionnel)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(error => {
            console.log('Échec de l\'enregistrement du Service Worker:', error);
        });
    });
}