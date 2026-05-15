const themeBtn = document.getElementById('theme-btn');
const body = document.body;
const currentTheme = localStorage.getItem('theme');

// التحقق من الثيم المحفوظ مسبقاً
if (currentTheme === 'dark') { 
    body.setAttribute('data-theme', 'dark'); 
    themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>'; 
}

// مستمع الحدث لتغيير الوضع (Dark / Light)
themeBtn.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme'); 
        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>'; 
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark'); 
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>'; 
        localStorage.setItem('theme', 'dark');
    }
});