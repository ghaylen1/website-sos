// Global variable to track current language
let currentLanguage = 'fr';

document.addEventListener('DOMContentLoaded', function() {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'fr';
    changeLanguage(savedLanguage);
    
    initializeNavigation();
    initializeButtons();
    initializeLanguageSelector();
});

// Initialize navigation functionality
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

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
}

// Initialize login and signup buttons
function initializeButtons() {
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');

    loginBtn.addEventListener('click', function() {
        window.location.href = 'login.html';
    });

    signupBtn.addEventListener('click', function() {
        window.location.href = 'signup.html';
    });
}

// Initialize language selector dropdown
function initializeLanguageSelector() {
    const langBtn = document.getElementById('lang-btn');
    const languageList = document.getElementById('language-list');
    const languageItems = document.querySelectorAll('#language-list li');

    // Toggle dropdown on button click
    langBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        languageList.classList.toggle('active');
    });

    // Handle language selection
    languageItems.forEach(item => {
        item.addEventListener('click', function() {
            const selectedLang = this.getAttribute('data-lang');
            changeLanguage(selectedLang);
            languageList.classList.remove('active');
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.language-selector')) {
            languageList.classList.remove('active');
        }
    });
}

// Main language change function
function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Save language to localStorage
    localStorage.setItem('selectedLanguage', lang);
    
    switch(lang) {
        case 'en':
            document.documentElement.lang = 'en';
            document.documentElement.dir = 'ltr';
            changeLanguageToEnglish();
            break;
        case 'ar':
            document.documentElement.lang = 'ar';
            document.documentElement.dir = 'rtl';
            changeLanguageToArabic();
            break;
        case 'fr':
        default:
            document.documentElement.lang = 'fr';
            document.documentElement.dir = 'ltr';
            changeLanguageToFrench();
            break;
    }
}

// Navigate to home page
function gohome() {
    window.location.assign("index.html");
}

// Language-specific translation functions
function changeLanguageToEnglish() {
    document.getElementById('main-title').textContent = 'SOS CHILDREN\'S VILLAGES AMBASSADORS CLUB';
    document.getElementById('title1').textContent = 'SOS Children\'s Villages Ambassadors Club';
    document.getElementById('logo').src = 'imgs/logoSOS_en.png';
    document.getElementById('logo').classList.remove('arabic-logo');
    document.getElementById('login-btn').textContent = 'Login';
    document.getElementById('signup-btn').textContent = 'Sign Up';
    document.getElementById('lang-btn').textContent = 'EN';
    
    updateNavigation(['Home', 'About', 'Our Missions', 'Events', 'Our Team', 'Gallery', 'Contact']);
    
    updateSections({
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
    });
}

function changeLanguageToFrench() {
    document.getElementById('main-title').textContent = 'CLUBS DES AMBASSADEURS SOS VILLAGES D\'ENFANTS';
    document.getElementById('title1').textContent = 'Clubs des ambassadeurs VESOS';
    document.getElementById('logo').src = 'imgs/logoSOS_fr.png';
    document.getElementById('logo').classList.remove('arabic-logo');
    document.getElementById('login-btn').textContent = 'Connexion';
    document.getElementById('signup-btn').textContent = 'S\'inscrire';
    document.getElementById('lang-btn').textContent = 'FR';
    
    updateNavigation(['Accueil', 'À Propos', 'Nos Missions', 'Événements', 'Notre Équipe', 'Galerie', 'Contact']);
    
    updateSections({
        'accueil': {
            title: 'Bienvenue au Club des Ambassadeurs',
            text: 'Rejoignez-nous dans notre mission pour soutenir les enfants de SOS Villages d\'Enfants en Tunisie.'
        },
        'about': {
            title: 'À Propos',
            text: 'Le Club des Ambassadeurs est une organisation dédiée à sensibiliser et mobiliser la communauté tunisienne autour de la cause des enfants vulnérables.'
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
    });
}

function changeLanguageToArabic() {
    document.getElementById('main-title').textContent = 'نوادي سفراء قرى الأطفال SOS';
    document.getElementById('title1').textContent = 'نوادي سفراء قرى الأطفال SOS';
    document.getElementById('logo').src = 'imgs/logoSOS_ar.png';
    document.getElementById('logo').classList.add('arabic-logo');
    document.getElementById('login-btn').textContent = 'تسجيل الدخول';
    document.getElementById('signup-btn').textContent = 'إنشاء حساب';
    document.getElementById('lang-btn').textContent = 'AR';
    
    updateNavigation(['الرئيسية', 'حول', 'مهامنا', 'الأحداث', 'فريقنا', 'المعرض', 'اتصل']);
    
    updateSections({
        'accueil': {
            title: 'أهلا بك في نادي السفراء',
            text: 'انضم إلينا في مهمتنا لدعم أطفال قرى الأطفال SOS في تونس.'
        },
        'about': {
            title: 'حول',
            text: 'نادي السفراء هو منظمة مكرسة لزيادة الوعي وتعبئة المجتمع التونسي حول قضية الأطفال الضعفاء.'
        },
        'missions': {
            title: 'مهامنا',
            text: 'تشمل مهامنا الرئيسية الدعم التعليمي والدعم الاجتماعي وتنظيم الأنشطة للأطفال.'
        },
        'events': {
            title: 'الأحداث',
            text: 'اكتشف أحداثنا القادمة ومبادراتنا.'
        },
        'team': {
            title: 'فريقنا',
            text: 'التقابل مع السفراء الذين يحدثون فرقا كل يوم.'
        },
        'gallery': {
            title: 'المعرض',
            text: 'صور من أنشطتنا واللحظات المشتركة.'
        },
        'contact': {
            title: 'اتصل',
            text: 'للانضمام إلينا أو للمزيد من المعلومات، اتصل بنا.'
        }
    });
}

// Helper function to update navigation links
function updateNavigation(navTexts) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link, index) => {
        link.textContent = navTexts[index];
    });
}

// Helper function to update section content
function updateSections(sections) {
    Object.keys(sections).forEach(key => {
        const section = document.getElementById(key);
        if (section) {
            const heading = section.querySelector('h2');
            const paragraph = section.querySelector('p');
            
            if (heading) heading.textContent = sections[key].title;
            if (paragraph) paragraph.textContent = sections[key].text;
        }
    });
}
