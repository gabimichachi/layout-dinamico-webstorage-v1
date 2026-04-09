const colorPicker = document.querySelector('#color-picker');
const fontSelect = document.querySelector('#font-select');
const themeToggle = document.querySelector('#theme-toggle');
const articleColorPicker = document.querySelector('#article-color-picker');
const body = document.querySelector('body');
const newsArticle = document.querySelectorAll('.news');

// carrega as preferencias do usuario armazenadas no localStorage

const loadPreferences = () => {
    //cor

};

colorPicker.addEventListener('input', (e) => {
    const color = e.target.value; //capturar o movimento do mouse
    document.documentElement.style.setProperty('--primary-color', color); //mudar a cor do site
    //inserir a chave (primaryColor) e o valor (color) no localStorage
    localStorage.setItem('primaryColor', color);
});

articleColorPicker.addEventListener('input', (e) => {
    const color = e.target.value;
    newsArticle.forEach(article => {
        article.style.backgroundColor = color;
});
localStorage.setItem('articleColor', color);
});

fontSelect.addEventListener('change', (e) => {
    const font = e.target.value;
    newsArticle.forEach(article => {
        article.style.fontFamily = font;
    });
    localStorage.setItem('fontFamily', font);
});

themeToggle.addEventListener('click', () => {});
