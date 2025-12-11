let currentSignupLanguage = 'en';

document.addEventListener('DOMContentLoaded', function() {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    currentSignupLanguage = savedLanguage;
    
    // Apply the saved language
    changeSignupLanguage(savedLanguage);
    updateSignupLangButton();
    updateSignupLogo(savedLanguage);
    
    // Set document language attributes
    document.documentElement.lang = savedLanguage;
    document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr';
    
    initializeLanguageSelector();
    initializePositionSelection();
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
            currentSignupLanguage = selectedLang;
            
            // Save to localStorage
            localStorage.setItem('selectedLanguage', selectedLang);
            
            // Update document attributes
            document.documentElement.lang = selectedLang;
            document.documentElement.dir = selectedLang === 'ar' ? 'rtl' : 'ltr';
            
            // Apply translations
            changeSignupLanguage(selectedLang);
            updateSignupLangButton();
            updateSignupLogo(selectedLang);
            
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

// Initialize position selection (show/hide sub-positions)
function initializePositionSelection() {
    const positionRadios = document.querySelectorAll('.position-radio');
    const subPositions = {
        rh: document.getElementById('sub-position-rh'),
        event: document.getElementById('sub-position-event'),
        partnership: document.getElementById('sub-position-partnership')
    };

    positionRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            // Hide all sub-positions
            Object.values(subPositions).forEach(el => {
                if (el) el.style.display = 'none';
            });

            // Show the relevant sub-position if it exists
            if (subPositions[this.value]) {
                subPositions[this.value].style.display = 'block';
            }
        });
    });
}

function updateSignupLangButton() {
    const langBtn = document.getElementById('lang-btn');
    langBtn.textContent = currentSignupLanguage.toUpperCase();
}

function updateSignupLogo(lang) {
    const signupLogo = document.getElementById('signup-logo');
    const logos = {
        en: 'imgs/logoSOS_en.png',
        fr: 'imgs/logoSOS_fr.png',
        ar: 'imgs/logoSOS_ar.png'
    };

    if (signupLogo) {
        signupLogo.src = logos[lang] || logos.en;
    }
}
