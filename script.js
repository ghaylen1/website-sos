document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section'); // Fixed typo: querySelectorAll (not querySAll)
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');
    const langBtn = document.getElementById('lang-btn');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show corresponding section
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).classList.add('active');
        });
    });

    // Login button handler
    loginBtn.addEventListener('click', function() {
        window.location.href = 'login.html';

        // You can replace this with: window.location.href = 'login.html';
    });

    // Sign up button handler
    signupBtn.addEventListener('click', function() {
        alert('Redirection vers la page d\'inscription');
        // You can replace this with: window.location.href = 'signup.html';
    });

    // Language toggle button handler
    langBtn.addEventListener('click', function() {
        const currentLang = document.documentElement.lang;
        if (currentLang === 'fr') {
            document.documentElement.lang = 'en';
            langBtn.textContent = 'FR';
            changeLanguageToEnglish();
        } else {
            document.documentElement.lang = 'fr';
            langBtn.textContent = 'EN';
            changeLanguageToFrench();
        }
    });
});

function gohome() {
    window.location.assign("index.html");
}

// Language translation functions
function changeLanguageToEnglish() {
    document.getElementById('main-title').textContent = 'SOS CHILDREN\'S VILLAGES AMBASSADORS CLUB';
    document.getElementById('login-btn').textContent = 'Login';
    document.getElementById('signup-btn').textContent = 'Sign Up';
    
    // Update navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    const navTexts = ['Home', 'About', 'Our Missions', 'Events', 'Our Team', 'Gallery', 'Contact'];
    navLinks.forEach((link, index) => {
        link.textContent = navTexts[index];
    });
    
    // Update sections
    const sections = {
        'accueil': {
            title: 'Welcome to the Ambassadors Club',
            text: 'Join us in our mission to support the children of SOS Children\'s Villages in Tunisia.'
        },
        'about': {
            title: 'About',
            text: 'The Ambassadors Club is an organization dedicated to raising awareness and mobilizing the Tunisian community around the cause of vulnerable children.'
        },
        'missions': {
            title: 'Our Missions',
            text: 'Our main missions include educational support, social support, and organizing activities for children.'
        },
        'events': {
            title: 'Events',
            text: 'Discover our upcoming events and initiatives.'
        },
        'team': {
            title: 'Our Team',
            text: 'Meet the ambassadors who make a difference every day.'
        },
        'gallery': {
            title: 'Gallery',
            text: 'Photos of our activities and shared moments.'
        },
        'contact': {
            title: 'Contact',
            text: 'To join us or for more information, contact us.'
        }
    };
    
    Object.keys(sections).forEach(key => {
        const section = document.getElementById(key);
        section.querySelector('h2').textContent = sections[key].title;
        section.querySelector('p').textContent = sections[key].text;
    });
}

function changeLanguageToFrench() {
    document.getElementById('main-title').textContent = 'CLUBS DES AMBASSADEURS SOS VILLAGES D\'ENFANTS';
    document.getElementById('login-btn').textContent = 'Connexion';
    document.getElementById('signup-btn').textContent = 'S\'inscrire';
    
    // Update navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    const navTexts = ['Accueil', 'À Propos', 'Nos Missions', 'Événements', 'Notre Équipe', 'Galerie', 'Contact'];
    navLinks.forEach((link, index) => {
        link.textContent = navTexts[index];
    });
    
    // Update sections
    const sections = {
        'accueil': {
            title: 'Bienvenue au Club des Ambassadeurs',
            text: 'Rejoignez-nous dans notre mission pour soutenir les enfants de SOS Villages d\'Enfants en Tunisie.'
        },
        'about': {
            title: 'À Propos',
            text: 'Le Club des Ambassadeurs est une organisation dédiée à sensibiliser et mobiliser la communauté tunisienne autour de la cause des enfants vuln��rables.'
        },
        'missions': {
            title: 'Nos Missions',
            text: 'Nos principales missions incluent le soutien éducatif, l\'accompagnement social, et l\'organisation d\'activités pour les enfants.'
        },
        'events': {
            title: 'Événements',
            text: 'Découvrez nos prochains événements et initiatives.'
        },
        'team': {
            title: 'Notre Équipe',
            text: 'Rencontrez les ambassadeurs qui font la différence chaque jour.'
        },
        'gallery': {
            title: 'Galerie',
            text: 'Photos de nos activités et moments partagés.'
        },
        'contact': {
            title: 'Contact',
            text: 'Pour nous rejoindre ou pour plus d\'informations, contactez-nous.'
        }
    };
    
    Object.keys(sections).forEach(key => {
        const section = document.getElementById(key);
        section.querySelector('h2').textContent = sections[key].title;
        section.querySelector('p').textContent = sections[key].text;
    });
}