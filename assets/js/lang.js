// assets/js/lang.js

// Referencia al botón de cambio de idioma (se inicializará en DOMContentLoaded)
let languageToggleButton;

// Objeto para almacenar los datos de traducción cargados y evitar recargar el JSON
const loadedTranslations = {};

// Función para cargar los archivos JSON de idioma
async function fetchTranslations(lang) {
    if (loadedTranslations[lang]) {
        return loadedTranslations[lang]; // Retorna la traducción ya cargada si existe
    }
    try {
        const response = await fetch(`./lang/${lang}.json`); // Asegúrate de que la ruta sea correcta
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        loadedTranslations[lang] = data; // Guarda la traducción cargada
        return data;
    } catch (error) {
        console.error(`Error al cargar el idioma '${lang}':`, error);
        return {}; // Retorna un objeto vacío en caso de error
    }
}

// Función para aplicar el texto a los elementos HTML
function applyLanguage(data, lang) {
    // Es buena práctica actualizar el atributo lang del HTML
    document.documentElement.lang = lang;

    // --- Navegación ---
    document.getElementById('nav-home').textContent = data.nav.home;
    document.getElementById('nav-about').textContent = data.nav.about;
    document.getElementById('nav-services').textContent = data.nav.services;
    document.getElementById('nav-portfolio').textContent = data.nav.portfolio;
    document.getElementById('nav-team').textContent = data.nav.team;
    document.getElementById('nav-contact').textContent = data.nav.contact;
    // Si tienes un "Get Started" en el nav que también quieres traducir:
    // document.getElementById('nav-get-started').textContent = data.nav.get_started;

    // --- Sección Hero ---
    document.getElementById('hero-title').innerHTML = data.hero.title;
    document.getElementById('hero-subtitle').textContent = data.hero.subtitle;

    // --- Sección About ---
    document.getElementById('about-main-title').textContent = data.about.title;
    document.getElementById('about-description-intro').textContent = data.about.description;

    // --- Sección Services ---
    document.getElementById('services-title').textContent = data.services.title;
    document.getElementById('services-description').textContent = data.services.description;

    // --- Sección Luxo Basic ---
    document.getElementById('luxo-basic-title').textContent = data.luxoBasic.title;
    document.getElementById('luxo-basic-description').textContent = data.luxoBasic.description;

    // Stats de precios y puntos clave
    document.getElementById('luxo-basic-sedan-label').textContent = data.luxoBasic.sedanPriceLabel;
    // Si quieres traducir el precio en el span, también dale un ID y traduce:
    // document.getElementById('luxo-basic-sedan-price').textContent = data.luxoBasic.sedanPrice; // Assuming you add sedanPrice to your JSON
    document.getElementById('luxo-basic-suv-label').textContent = data.luxoBasic.SUVPriceLabel;
    document.getElementById('luxo-basic-large-suv-label').textContent = data.luxoBasic.largeSUVPriceLabel;
    document.getElementById('luxo-basic-interior-cleaning-label').textContent = data.luxoBasic.interiorCleaningLabel;
    document.getElementById('luxo-basic-interior-points').textContent = data.luxoBasic.interiorPoints;
    document.getElementById('luxo-basic-exterior-cleaning-label').textContent = data.luxoBasic.exteriorCleaningLabel;
    document.getElementById('luxo-basic-exterior-points').textContent = data.luxoBasic.exteriorPoints;

    // Sección de Servicios Detallados Luxo Basic
    document.getElementById('luxo-basic-detailed-services-title').textContent = data.luxoBasic.detailedServicesTitle;
    document.getElementById('luxo-basic-interior-heading').textContent = data.global.interiorHeading;
    document.getElementById('luxo-basic-exterior-heading').textContent = data.global.exteriorHeading;
	
	// Traducción para los puntos de la lista (Interior Basic)
    document.getElementById('basic-interior-list-1').textContent = data.luxoBasic.interiorList1;
    document.getElementById('basic-interior-list-2').textContent = data.luxoBasic.interiorList2;
    document.getElementById('basic-interior-list-3').textContent = data.luxoBasic.interiorList3;
    document.getElementById('basic-interior-list-4').textContent = data.luxoBasic.interiorList4;
    document.getElementById('basic-interior-list-5').textContent = data.luxoBasic.interiorList5;

    // Traducción para los puntos de la lista (Exterior Basic)
    document.getElementById('basic-exterior-list-1').textContent = data.luxoBasic.exteriorList1;
    document.getElementById('basic-exterior-list-2').textContent = data.luxoBasic.exteriorList2;
    document.getElementById('basic-exterior-list-3').textContent = data.luxoBasic.exteriorList3;
    document.getElementById('basic-exterior-list-4').textContent = data.luxoBasic.exteriorList4;
    document.getElementById('basic-exterior-list-5').textContent = data.luxoBasic.exteriorList5;
    document.getElementById('basic-exterior-list-6').textContent = data.luxoBasic.exteriorList6;

    // --- Sección Luxo Premium --- (UPDATED TO USE IDs)
    document.getElementById('luxo-premium-title').textContent = data.luxoPremium.title;
    document.getElementById('luxo-premium-description').textContent = data.luxoPremium.description;

    document.getElementById('luxo-premium-sedan-label').textContent = data.luxoPremium.sedanPriceLabel;
    document.getElementById('luxo-premium-suv-label').textContent = data.luxoPremium.SUVPriceLabel;
    document.getElementById('luxo-premium-large-suv-label').textContent = data.luxoPremium.largeSUVPriceLabel;
    document.getElementById('luxo-premium-paint-protection-label').textContent = data.luxoPremium.paintProtectionLabel;
    document.getElementById('luxo-premium-paint-protection-type').textContent = data.luxoPremium.paintProtectionType;

    document.getElementById('luxo-premium-detailed-services-title').textContent = data.luxoPremium.detailedServicesTitle;
    document.getElementById('luxo-premium-interior-heading').textContent = data.global.interiorHeading;
    document.getElementById('luxo-premium-exterior-heading').textContent = data.global.exteriorHeading;

	// Traducción para los puntos de la lista (Interior Premium)
    document.getElementById('premium-interior-list-1').textContent = data.luxoPremium.interiorList1;
    document.getElementById('premium-interior-list-2').textContent = data.luxoPremium.interiorList2;
    document.getElementById('premium-interior-list-3').textContent = data.luxoPremium.interiorList3;
    document.getElementById('premium-interior-list-4').textContent = data.luxoPremium.interiorList4;
    document.getElementById('premium-interior-list-5').textContent = data.luxoPremium.interiorList5;
    document.getElementById('premium-interior-list-6').textContent = data.luxoPremium.interiorList6;
    document.getElementById('premium-interior-list-7').textContent = data.luxoPremium.interiorList7;
    document.getElementById('premium-interior-list-8').textContent = data.luxoPremium.interiorList8;

    // Traducción para los puntos de la lista (Exterior Premium)
    document.getElementById('premium-exterior-list-1').textContent = data.luxoPremium.exteriorList1;
    document.getElementById('premium-exterior-list-2').textContent = data.luxoPremium.exteriorList2;
    document.getElementById('premium-exterior-list-3').textContent = data.luxoPremium.exteriorList3;
    document.getElementById('premium-exterior-list-4').textContent = data.luxoPremium.exteriorList4;
    document.getElementById('premium-exterior-list-5').textContent = data.luxoPremium.exteriorList5;
    document.getElementById('premium-exterior-list-6').textContent = data.luxoPremium.exteriorList6;
    document.getElementById('premium-exterior-list-7').textContent = data.luxoPremium.exteriorList7;
    document.getElementById('premium-exterior-list-8').textContent = data.luxoPremium.exteriorList8;


    // --- Sección Luxo Full Detailing -- (UPDATED TO USE IDs)
    document.getElementById('luxo-full-detailing-title').textContent = data.luxoFullDetailing.title;
    document.getElementById('luxo-full-detailing-description').textContent = data.luxoFullDetailing.description;

    document.getElementById('luxo-full-sedan-label').textContent = data.luxoFullDetailing.sedanPriceLabel;
    document.getElementById('luxo-full-suv-label').textContent = data.luxoFullDetailing.SUVPriceLabel;
    document.getElementById('luxo-full-large-suv-label').textContent = data.luxoFullDetailing.largeSUVPriceLabel;
    document.getElementById('luxo-full-ceramic-coating-label').textContent = data.luxoFullDetailing.ceramicCoatingLabel;
    document.getElementById('luxo-full-ceramic-coating-type').textContent = data.luxoFullDetailing.ceramicCoatingType;

    document.getElementById('luxo-full-detailed-services-title').textContent = data.luxoFullDetailing.detailedServicesTitle;
    document.getElementById('luxo-full-interior-heading').textContent = data.global.interiorHeading;
    document.getElementById('luxo-full-exterior-heading').textContent = data.global.exteriorHeading;

    document.getElementById('full-interior-list-1').innerHTML = `<i class="bi bi-check-circle-fill me-2"></i> ${data.luxoFullDetailing.interiorList1}`;
    document.getElementById('full-interior-list-2').innerHTML = `<i class="bi bi-check-circle-fill me-2"></i> ${data.luxoFullDetailing.interiorList2}`;
    document.getElementById('full-interior-list-3').innerHTML = `<i class="bi bi-check-circle-fill me-2"></i> ${data.luxoFullDetailing.interiorList3}`;
    document.getElementById('full-interior-list-4').innerHTML = `<i class="bi bi-check-circle-fill me-2"></i> ${data.luxoFullDetailing.interiorList4}`;
    document.getElementById('full-interior-list-5').innerHTML = `<i class="bi bi-check-circle-fill me-2"></i> ${data.luxoFullDetailing.interiorList5}`;
    document.getElementById('full-interior-list-6').innerHTML = `<i class="bi bi-check-circle-fill me-2"></i> ${data.luxoFullDetailing.interiorList6}`;
    document.getElementById('full-interior-list-7').innerHTML = `<i class="bi bi-check-circle-fill me-2"></i> ${data.luxoFullDetailing.interiorList7}`;
    document.getElementById('full-interior-list-8').innerHTML = `<i class="bi bi-check-circle-fill me-2"></i> ${data.luxoFullDetailing.interiorList8}`;

    document.getElementById('full-exterior-list-1').innerHTML = `<i class="bi bi-check-circle-fill me-2"></i> ${data.luxoFullDetailing.exteriorList1}`;
    document.getElementById('full-exterior-list-2').innerHTML = `<i class="bi bi-check-circle-fill me-2"></i> ${data.luxoFullDetailing.exteriorList2}`;
    document.getElementById('full-exterior-list-3').innerHTML = `<i class="bi bi-check-circle-fill me-2"></i> ${data.luxoFullDetailing.exteriorList3}`;
    document.getElementById('full-exterior-list-4').innerHTML = `<i class="bi bi-check-circle-fill me-2"></i> ${data.luxoFullDetailing.exteriorList4}`;
    document.getElementById('full-exterior-list-5').innerHTML = `<i class="bi bi-check-circle-fill me-2"></i> ${data.luxoFullDetailing.exteriorList5}`;
    document.getElementById('full-exterior-list-6').innerHTML = `<i class="bi bi-check-circle-fill me-2"></i> ${data.luxoFullDetailing.exteriorList6}`;
    document.getElementById('full-exterior-list-7').innerHTML = `<i class="bi bi-check-circle-fill me-2"></i> ${data.luxoFullDetailing.exteriorList7}`;
    document.getElementById('full-exterior-list-8').innerHTML = `<i class="bi bi-check-circle-fill me-2"></i> ${data.luxoFullDetailing.exteriorList8}`;
    document.getElementById('full-exterior-list-9').innerHTML = `<i class="bi bi-check-circle-fill me-2"></i> ${data.luxoFullDetailing.exteriorList9}`;
    document.getElementById('full-exterior-list-10').innerHTML = `<i class="bi bi-check-circle-fill me-2"></i> ${data.luxoFullDetailing.exteriorList10}`;
    document.getElementById('full-exterior-list-11').innerHTML = `<i class="bi bi-check-circle-fill me-2"></i> ${data.luxoFullDetailing.exteriorList11}`;


    // --- Actualiza el texto del botón de idioma ---
    if (languageToggleButton) {
        languageToggleButton.textContent = (lang === 'en') ? 'Español' : 'English';
    }
}

// Función principal para cambiar y aplicar el idioma
async function setLanguage(lang) {
    const translations = await fetchTranslations(lang);
    if (translations) {
        applyLanguage(translations, lang);
        localStorage.setItem('preferredLang', lang); // Guarda la preferencia
        console.log(`Idioma cambiado a: ${lang}`);
    }
}

// Cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', async () => {
    // 1. Obtén la referencia al botón de idioma
    languageToggleButton = document.getElementById('language-toggle-button'); // Asegúrate de que este ID existe en tu HTML

    // 2. Determina el idioma inicial
    let initialLang = localStorage.getItem('preferredLang');

    // Si no hay preferencia guardada, usa 'en' como predeterminado (y guarda la preferencia)
    if (!initialLang) {
        initialLang = 'en'; // ¡Aquí se define el idioma inicial si no hay preferencia!
        localStorage.setItem('preferredLang', initialLang);
    }

    // 3. Carga y aplica el idioma inicial
    await setLanguage(initialLang); // Usa await para asegurar que se cargue antes de continuar

    // 4. Asigna el evento click al botón de idioma
    if (languageToggleButton) {
        languageToggleButton.addEventListener('click', (event) => {
            event.preventDefault(); // Evita el comportamiento por defecto del enlace

            // Obtiene el idioma actual del atributo lang del HTML
            const currentLang = document.documentElement.lang;
            const newLang = (currentLang === 'en') ? 'es' : 'en'; // Alterna entre inglés y español
            setLanguage(newLang); // Cambia el idioma
        });
    }
});