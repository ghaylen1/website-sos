let currentLoginLanguage = 'en';

document.addEventListener('DOMContentLoaded', function() {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    currentLoginLanguage = savedLanguage;
    
    // Apply the saved language
    changeLoginLanguage(savedLanguage);
    updateLangButton();
    updateLoginLogo(savedLanguage);
    
    // Set document language attributes
    document.documentElement.lang = savedLanguage;
    document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr';
    
    initializeLanguageSelector();
});

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
            currentLoginLanguage = selectedLang;
            
            // Save to localStorage
            localStorage.setItem('selectedLanguage', selectedLang);
            
            // Update document attributes
            document.documentElement.lang = selectedLang;
            document.documentElement.dir = selectedLang === 'ar' ? 'rtl' : 'ltr';
            
            // Apply translations
            changeLoginLanguage(selectedLang);
            updateLangButton();
            updateLoginLogo(selectedLang);
            
            // Close dropdown
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

function updateLangButton() {
    const langBtn = document.getElementById('lang-btn');
    langBtn.textContent = currentLoginLanguage.toUpperCase();
}

function updateLoginLogo(lang) {
    const loginLogo = document.getElementById('login-logo');
    const logos = {
        en: 'imgs/logoSOS_en.png',
        fr: 'imgs/logoSOS_fr.png',
        ar: 'imgs/logoSOS_ar.png',
    };

    if (loginLogo) {
        loginLogo.src = logos[lang] || logos.en;
    }
}
