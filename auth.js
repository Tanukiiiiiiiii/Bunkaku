function registerUser(username, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (!username || !password) {
        alert('Все поля обязательны для заполнения');
        return;
    }

    if (password.length < 6) {
        alert('Пароль должен содержать минимум 6 символов');
        return;
    }

    if (users.some(user => user.username === username)) {
        alert('Пользователь с таким именем уже существует');
        return;
    }

    const newUser = {
        id: Date.now(),
        username,
        password,
        joinDate: new Date().toLocaleDateString('ru-RU'),
        avatar: 'https://via.placeholder.com/150',
        shelves: {
            reading: [],
            planned: [],
            read: []
        },
        reviews: []
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    loginUser(username, password, true);
}

function loginUser(username, password, isNewUser = false) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        if (isNewUser) {
            alert(`Добро пожаловать, ${user.username}!`);
            window.location.href = 'account.html';
        } else {
            const redirectUrl = localStorage.getItem('redirectAfterLogin') || 'index.html';
            localStorage.removeItem('redirectAfterLogin');
            window.location.href = redirectUrl;
        }
    } else {
        alert('Неверное имя пользователя или пароль');
    }
}

// Обработка формы регистрации
document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm').value;

    if (password !== confirmPassword) {
        alert('Пароли не совпадают');
        return;
    }

    registerUser(username, password);
});

// Обработка формы входа
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    loginUser(username, password);
});
