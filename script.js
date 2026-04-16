const colorPicker = document.querySelector('#color-picker')
const fontSelect = document.querySelector('#font-select')
const themeToggle = document.querySelector('#theme-toggle')
const articleColorPicker = document.querySelector('#article-color-picker')
const body = document.querySelector('body')
const newsArticle= document.querySelector('.news')

const loadPreferences = () => {
    // cor

    const saveColor = localStorage.getItem('primaryColor');
    if (saveColor) {
        document.documentElement.style.setProperty('--primary-color', saveColor)
        colorPicker.value = saveColor;
    }

    const saveArticleColor = localStorage.getItem('articleColor');
    if (saveArticleColor) {

    }

    const savedFont = localStorage.getItem('fontFamily');
    if (savedFont) {
        
    }

    const saveTheme = localStorage.getItem('theme');
    if (saveTheme === 'dark') {
        body.classList.add('dark');
        themeToggle.innerHTML = '<span class="material-icons">light_mode</span>'
    }
};

colorPicker.addEventListener('input', (e) => {
    const color = e.target.value;
    // Mudar o valor da variavel do css, com o valor capturado
    document.documentElement.style.setProperty('--primary-color', color)
    // Inserir a chave
    localStorage.setItem('primaryColor', color)
    
});

articleColorPicker.addEventListener('input', (e) => {
    const color = e.target.value;
    newsArticle.forEach(article => {
        article.style.backgroundColor = color;
    });
    localStorage.setItem('articleColor', color)
});

fontSelect.addEventListener('change', (e) => {
     const font= e.target.value;
     document.documentElement.style.setProperty('--font-family', font)
    localStorage.setItem('fontFamily', font)
});

themeToggle.addEventListener('click', (e) => {
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');
    themeToggle.innerHTML = isDark
    ? '<span class="material-icons">light_mode</span>'
    : '<span class="material-icons">dark_mode</span>';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

loadPreferences();