// Translation data for signup page
const signupTranslations = {
    en: {
        'signup-title': 'Sign Up',
        'signup-subtitle': 'Join the SOS Ambassadors Club',
        'label-fullname': 'Full Name',
        'label-email': 'Email Address',
        'label-password': 'Password',
        'label-confirm-password': 'Confirm Password',
        'label-phone': 'Phone Number',
        'label-etablissement': 'Institution',
        'label-category': 'Category',
        'label-position': 'Position',
        'pos-president': 'President',
        'pos-vice-president': 'Vice President',
        'pos-secretaire': 'Secretary General',
        'pos-rh': 'HR Department',
        'pos-event': 'Event Department',
        'pos-partnership': 'Partnership Department',
        'sub-pos-responsable': 'Responsible',
        'sub-pos-assistant': 'Assistant',
        'sub-pos-responsable-event': 'Responsible',
        'sub-pos-assistant-event': 'Assistant',
        'sub-pos-active-event': 'Active Member',
        'sub-pos-responsable-partnership': 'Responsible',
        'sub-pos-assistant-partnership': 'Assistant',
        'sub-pos-active-partnership': 'Active Member',
        'label-terms': 'I agree to the Terms & Conditions',
        'signup-btn-submit': 'Create Account',
        'footer-text': 'Already have an account?',
        'login-here-link': 'Login here',
        'back-btn': '← Back',
        'category-placeholder': '-- Select a category --',
        'placeholder-fullname': 'Enter your full name',
        'placeholder-email': 'Enter your email',
        'placeholder-password': 'Enter your password',
        'placeholder-confirm': 'Confirm your password',
        'placeholder-phone': 'Enter your phone number'
    },
    fr: {
        'signup-title': 'Inscription',
        'signup-subtitle': 'Rejoignez le Club des Ambassadeurs SOS',
        'label-fullname': 'Nom Complet',
        'label-email': 'Adresse Email',
        'label-password': 'Mot de passe',
        'label-confirm-password': 'Confirmer le mot de passe',
        'label-phone': 'Numéro de téléphone',
        'label-etablissement': 'Établissement',
        'label-category': 'Catégorie',
        'label-position': 'Position',
        'pos-president': 'Président',
        'pos-vice-president': 'Vice-Président',
        'pos-secretaire': 'Secrétaire Général',
        'pos-rh': 'Département RH',
        'pos-event': 'Département Événements',
        'pos-partnership': 'Département Partenariats',
        'sub-pos-responsable': 'Responsable',
        'sub-pos-assistant': 'Assistant',
        'sub-pos-responsable-event': 'Responsable',
        'sub-pos-assistant-event': 'Assistant',
        'sub-pos-active-event': 'Membre Actif',
        'sub-pos-responsable-partnership': 'Responsable',
        'sub-pos-assistant-partnership': 'Assistant',
        'sub-pos-active-partnership': 'Membre Actif',
        'label-terms': 'J\'accepte les Termes & Conditions',
        'signup-btn-submit': 'Créer un compte',
        'footer-text': 'Vous avez déjà un compte?',
        'login-here-link': 'Connectez-vous ici',
        'back-btn': '← Retour',
        'category-placeholder': '-- Sélectionnez une catégorie --',
        'placeholder-fullname': 'Entrez votre nom complet',
        'placeholder-email': 'Entrez votre email',
        'placeholder-password': 'Entrez votre mot de passe',
        'placeholder-confirm': 'Confirmez votre mot de passe',
        'placeholder-phone': 'Entrez votre numéro de téléphone'
    },
    ar: {
        'signup-title': 'إنشاء حساب',
        'signup-subtitle': 'انضم إلى نادي سفراء SOS',
        'label-fullname': 'الاسم الكامل',
        'label-email': 'البريد الإلكتروني',
        'label-password': 'كلمة المرور',
        'label-confirm-password': 'تأكيد كلمة المرور',
        'label-phone': 'رقم الهاتف',
        'label-etablissement': 'المؤسسة',
        'label-category': 'الفئة',
        'label-position': 'المنصب',
        'pos-president': 'الرئيس',
        'pos-vice-president': 'نائب الرئيس',
        'pos-secretaire': 'الأمين العام',
        'pos-rh': 'قسم الموارد البشرية',
        'pos-event': 'قسم الفعاليات',
        'pos-partnership': 'قسم الشراكات',
        'sub-pos-responsable': 'المسؤول',
        'sub-pos-assistant': 'المساعد',
        'sub-pos-responsable-event': 'المسؤول',
        'sub-pos-assistant-event': 'المساعد',
        'sub-pos-active-event': 'عضو نشط',
        'sub-pos-responsable-partnership': 'المسؤول',
        'sub-pos-assistant-partnership': 'المساعد',
        'sub-pos-active-partnership': 'عضو نشط',
        'sub-pos-responsable-president': 'المسؤول',
        'sub-pos-assistant-president': 'المساعد',
        'sub-pos-active-president': 'عضو نشط',
        'sub-pos-responsable-vice-president': 'المسؤول',
        'sub-pos-assistant-vice-president': 'المساعد',
        'sub-pos-active-vice-president': 'عضو نشط',
        'sub-pos-responsable-secretaire-general': 'المسؤول',
        'sub-pos-assistant-secretaire-general': 'المساعد',
        'sub-pos-active-secretaire-general': 'عضو نشط',
        'label-terms': 'أوافق على الشروط والأحكام',
        'signup-btn-submit': 'إنشاء حساب',
        'footer-text': 'هل لديك حساب بالفعل؟',
        'login-here-link': 'سجل الدخول هنا',
        'back-btn': 'رجوع ←',
        'category-placeholder': '-- اختر فئة --',
        'placeholder-fullname': 'أدخل اسمك الكامل',
        'placeholder-email': 'أدخل بريدك الإلكتروني',
        'placeholder-password': 'أدخل كلمة المرور',
        'placeholder-confirm': 'تأكيد كلمة المرور',
        'placeholder-phone': 'أدخل رقم هاتفك'
    }
};

// Apply translations to the signup page
function changeSignupLanguage(lang) {
    const translations = signupTranslations[lang];
    
    if (!translations) return;
    
    Object.keys(translations).forEach(key => {
        const element = document.getElementById(key);
        
        if (element) {
            if (element.tagName === 'BUTTON') {
                element.textContent = translations[key];
            } else if (element.tagName === 'SPAN') {
                element.textContent = translations[key];
            } else if (element.tagName === 'LABEL') {
                element.textContent = translations[key];
            } else if (key === 'footer-text') {
                // Handle the footer text with link separately
                element.innerHTML = translations[key] + ' <a href="login.html" class="login-link">' + translations['login-here-link'] + '</a>';
            } else {
                element.textContent = translations[key];
            }
        }
    });
    
    // Update input placeholders
    const fullnameInput = document.getElementById('fullname');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const phoneInput = document.getElementById('phone');
    const categorySelect = document.getElementById('category');
    
    if (fullnameInput) fullnameInput.placeholder = translations['placeholder-fullname'];
    if (emailInput) emailInput.placeholder = translations['placeholder-email'];
    if (passwordInput) passwordInput.placeholder = translations['placeholder-password'];
    if (confirmPasswordInput) confirmPasswordInput.placeholder = translations['placeholder-confirm'];
    if (phoneInput) phoneInput.placeholder = translations['placeholder-phone'];
    
    // Update category dropdown
    if (categorySelect && categorySelect.options[0]) {
        categorySelect.options[0].textContent = translations['category-placeholder'];
    }
    
    // Update back button
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
        backBtn.textContent = translations['back-btn'];
    }
}