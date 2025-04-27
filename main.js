// Проверка авторизации и обновление UI
function checkAuth() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const authLinks = document.querySelectorAll('#auth-link');

    if (user) {
        authLinks.forEach(link => {
            link.textContent = 'Выйти';
            link.href = '#';
            link.addEventListener('click', logoutUser);
        });
    } else {
        authLinks.forEach(link => {
            link.textContent = 'Войти';
            link.href = 'login.html';
        });
    }
}

// Выход из системы
function logoutUser() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

// Загрузка данных пользователя
function loadUserData() {
    const user = JSON.parse(localStorage.getItem('currentUser'));

    if (user) {
        document.getElementById('username').textContent = user.username;
        document.getElementById('user-email').textContent = user.email;
        document.getElementById('member-since').textContent = `Участник с ${user.joinDate}`;
    } else {
        window.location.href = 'login.html';
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    checkAuth();
});