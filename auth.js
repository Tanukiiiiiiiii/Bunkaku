function registerUser(username, email, password) {
    // Проверка существующих пользователей
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Валидация данных
    if (!username || !email || !password) {
        alert('Все поля обязательны для заполнения');
        return;
    }

    if (password.length < 6) {
        alert('Пароль должен содержать минимум 6 символов');
        return;
    }

    // Проверка уникальности email и username
    if (users.some(user => user.email === email)) {
        alert('Пользователь с таким email уже зарегистрирован');
        return;
    }

    if (users.some(user => user.username === username)) {
        alert('Пользователь с таким именем уже существует');
        return;
    }

    // Создание нового пользователя
    const newUser = {
        id: Date.now(),
        username,
        email,
        password, // В реальном приложении должно быть хеширование
        joinDate: new Date().toLocaleDateString('ru-RU'),
        avatar: 'https://via.placeholder.com/150',
        shelves: {
            reading: [],
            planned: [],
            read: []
        },
        reviews: []
    };

    // Сохранение пользователя
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // Автоматический вход после регистрации
    loginUser(email, password, true);
}
function loginUser(email, password, isNewUser = false) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        // Сохранение текущего пользователя
        localStorage.setItem('currentUser', JSON.stringify(user));

        // Перенаправление
        if (isNewUser) {
            alert(`Добро пожаловать, ${user.username}!`);
            window.location.href = 'account.html';
        } else {
            const redirectUrl = localStorage.getItem('redirectAfterLogin') || 'index.html';
            localStorage.removeItem('redirectAfterLogin');
            window.location.href = redirectUrl;
        }
    } else {
        alert('Неверный email или пароль');
    }
}
function logoutUser() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}
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
// Обработка формы регистрации
document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm').value;

    if (password !== confirmPassword) {
        alert('Пароли не совпадают');
        return;
    }

    registerUser(username, email, password);
});

// Обработка формы входа
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    loginUser(email, password);
});
