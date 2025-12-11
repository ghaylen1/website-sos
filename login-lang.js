// Translation data for login page
const loginTranslations = {
    en: {
        'login-title': 'Login',
        'login-subtitle': 'Welcome back to SOS Ambassadors Club',
        'label-email': 'Email Address',
        'label-password': 'Password',
        'remember-me-text': 'Remember me',
        'forgot-password': 'Forgot password?',
        'login-btn-submit': 'Sign In',
        'footer-login': 'Don\'t have an account?',
        'signup-link-text': 'Sign up here',
        'back-btn': '← Back'
    },
    fr: {
        'login-title': 'Connexion',
        'login-subtitle': 'Bienvenue au Club des Ambassadeurs SOS',
        'label-email': 'Adresse Email',
        'label-password': 'Mot de passe',
        'remember-me-text': 'Se souvenir de moi',
        'forgot-password': 'Mot de passe oublié?',
        'login-btn-submit': 'Se connecter',
        'footer-login': 'Vous n\'avez pas de compte?',
        'signup-link-text': 'Inscrivez-vous ici',
        'back-btn': '← Retour'
    },
    ar: {
        'login-title': 'تسجيل الدخول',
        'login-subtitle': 'مرحبا بك في نادي سفراء SOS',
        'label-email': 'البريد الإلكتروني',
        'label-password': 'كلمة المرور',
        'remember-me-text': 'تذكرني',
        'forgot-password': 'نسيت كلمة المرور؟',
        'login-btn-submit': 'تسجيل الدخول',
        'footer-login': 'ليس لديك حساب؟',
        'signup-link-text': 'سجل هنا',
        'back-btn': 'رجوع ←'
    }
};

// Apply translations to the login page
function changeLoginLanguage(lang) {
    const translations = loginTranslations[lang];
    
    if (!translations) return;
    
    Object.keys(translations).forEach(key => {
        const element = document.getElementById(key);
        
        if (element) {
            if (element.tagName === 'BUTTON') {
                element.textContent = translations[key];
            } else if (element.tagName === 'INPUT') {
                element.placeholder = translations[key];
            } else if (key === 'footer-login') {
                // Handle the footer text with link separately
                const signupLink = document.getElementById('signup-link-text');
                if (signupLink) {
                    element.innerHTML = translations[key] + ' <a href="signup.html" class="signup-link" id="signup-link-text">' + translations['signup-link-text'] + '</a>';
                }
            } else {
                element.textContent = translations[key];
            }
        }
    });
    
    // Update placeholder texts
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    
    if (emailInput) {
        const placeholders = {
            en: 'Enter your email',
            fr: 'Entrez votre email',
            ar: 'أدخل بريدك الإلكتروني'
        };
        emailInput.placeholder = placeholders[lang] || placeholders.en;
    }
    
    if (passwordInput) {
        const placeholders = {
            en: 'Enter your password',
            fr: 'Entrez votre mot de passe',
            ar: 'أدخل كلمة المرور'
        };
        passwordInput.placeholder = placeholders[lang] || placeholders.en;
    }
    
    // Update back button
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
        backBtn.textContent = translations['back-btn'];
    }
}