// Theme toggler for dark/light mode
const toggleBtn = document.getElementById('toggle-theme');
const htmlEl = document.documentElement;

function setTheme(mode) {
    if (mode === 'dark') {
        htmlEl.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        htmlEl.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

// Detect saved mode or system preference
const saved = localStorage.getItem('theme');
if (saved) {
    setTheme(saved);
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    setTheme('dark');
} else {
    setTheme('light');
}

toggleBtn.addEventListener('click', () => {
    const isDark = htmlEl.getAttribute('data-theme') === 'dark';
    setTheme(isDark ? 'light' : 'dark');
});