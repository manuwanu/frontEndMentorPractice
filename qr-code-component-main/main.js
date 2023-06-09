const colorThemes = document.querySelectorAll('[name="theme"]');

const setTheme = function() {
    let activeTheme = localStorage.getItem('theme');
    
    if (window.matchMedia('(prefers-color-scheme: dark)') && !activeTheme) {
        activeTheme = 'dark-theme';
    } 

    colorThemes.forEach((theme) => {
        if (theme.id === activeTheme) {
            theme.checked = true;
        } 
    });
    document.documentElement.className = activeTheme;
};

colorThemes.forEach((theme) => {
    theme.addEventListener("click", () => {
        localStorage.setItem("theme", theme.id);
        setTheme()
    });
});


document.onload = setTheme();