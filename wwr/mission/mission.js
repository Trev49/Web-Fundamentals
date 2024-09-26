document.addEventListener('DOMContentLoaded', () => {
    const themeSelector = document.getElementById('theme-selector');
    const body = document.body;
    const logo = document.getElementById('logo');

    themeSelector.addEventListener('change', changeTheme);

    function changeTheme() {
        if (themeSelector.value === 'dark') {
            body.classList.add('dark');
            logo.src = 'dark logo.png'; 
        } else {
            body.classList.remove('dark');
            logo.src = 'logo.jpg'; 
        }
    }
});
