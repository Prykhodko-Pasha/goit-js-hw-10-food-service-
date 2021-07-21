// import './sass/main.scss';
const refs = {
    themeCheckbox: document.querySelector("#theme-switch-toggle"),
    body: document.querySelector("body"),
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// установка темной темы, если до этого она была изменена
populateTheme();

function populateTheme() {
    const localStorageTheme = localStorage.getItem('theme');
    if (localStorageTheme === Theme.DARK) {
        refs.body.className = Theme.DARK;
        refs.themeCheckbox.checked = true;
    }
}

// изменение темы
refs.themeCheckbox.addEventListener("change", onChangeTheme);

function onChangeTheme() {
    if (refs.body.className === Theme.DARK) {
        refs.body.className = Theme.LIGHT;
        localStorage.setItem('theme', Theme.LIGHT);
    }
    else {
        refs.body.className = Theme.DARK;
        localStorage.setItem('theme', Theme.DARK);
    }
}




