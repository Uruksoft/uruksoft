// وضع ليلي وتبديل الأيقونة مع الحفظ في localStorage
const themeBtn = document.getElementById('toggle-theme');
const body = document.body;

// في البداية: طبق الحالة المحفوظة
(function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark');
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        body.classList.remove('dark');
        themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
    }
})();

themeBtn.onclick = function () {
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeBtn.innerHTML = isDark
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
};

// نموذج تواصل متطور (تنبيه بصحة البيانات)
const form = document.getElementById('contact-form');
const msgBox = document.getElementById('form-msg');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    // قيم الحقول
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // التحقق من الحقول
    if (!name || !email || !validateEmail(email) || !message) {
        msgBox.textContent = 'يرجى تعبئة جميع الحقول بشكل صحيح.';
        msgBox.className = 'form-msg error';
        return;
    }

    // رسالة نجاح وهمية (بدون إرسال فعلي)
    msgBox.textContent = 'تم إرسال رسالتك بنجاح! سنرد عليك قريباً.';
    msgBox.className = 'form-msg success';
    form.reset();

    setTimeout(() => {
        msgBox.textContent = '';
        msgBox.className = 'form-msg';
    }, 4000);
});

function validateEmail(email) {
    // تحقق بسيط للبريد الإلكتروني
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}