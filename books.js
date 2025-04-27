// Моковые данные книг
const mockBooks = [
    {
        id: 1,
        title: "1984",
        author: "Джордж Оруэлл",
        genres: ["Антиутопия", "Классика"],
        description: "Роман-антиутопия, описывающий тоталитарное общество, где правительство контролирует каждый аспект жизни людей.",
        cover: "https://u.livelib.ru/album/1001320382/o/txizqy83/o-o.jpeg",
        rating: 4.7,
        reviewsCount: 128,
        isNew: false,
        isPopular: true
    },
    {
        id: 2,
        title: "Мастер и Маргарита",
        author: "Михаил Булгаков",
        genres: ["Классика", "Мистика"],
        description: "Философский роман, сочетающий в себе элементы сатиры, фантастики и мистики.",
        cover: "https://cdn1.ozone.ru/s3/multimedia-1-j/6926571091.jpg",
        rating: 4.9,
        reviewsCount: 215,
        isNew: false,
        isPopular: true
    },
    {
        id: 3,
        title: "Три товарища",
        author: "Эрих Мария Ремарк",
        genres: ["Классика", "Роман"],
        description: "История о дружбе и любви на фоне послевоенной Германии.",
        cover: "https://www.litres.ru/pub/c/cover/122462.jpg",
        rating: 4.8,
        reviewsCount: 176,
        isNew: false,
        isPopular: true
    },
    {
        id: 4,
        title: "Новая книга 2023",
        author: "Современный автор",
        genres: ["Фантастика", "Новинка"],
        description: "Свежая книга от современного автора, только что вышедшая в этом году.",
        cover: "https://via.placeholder.com/300x450?text=Новая+книга",
        rating: 4.5,
        reviewsCount: 32,
        isNew: true,
        isPopular: false
    },
    {
        id: 5,
        title: "Еще одна новинка",
        author: "Другой автор",
        genres: ["Детектив", "Новинка"],
        description: "Захватывающий детектив с неожиданной развязкой.",
        cover: "https://via.placeholder.com/300x450?text=Новый+детектив",
        rating: 4.3,
        reviewsCount: 28,
        isNew: true,
        isPopular: false
    },
    {
        id: 6,
        title: "Американский психопат",
        author: "Брет Истон Эллис",
        genres: ["Триллер", "Психологический роман", "Криминал"],
        description: "Шокирующая история Патрика Бейтмена - успешного нью-йоркского бизнесмена днем и безжалостного маньяка ночью. Роман исследует тему потребительского общества и человеческой идентичности.",
        cover: "https://cdn1.ozone.ru/s3/multimedia-m/c600/6800539018.jpg",
        rating: 4.6,
        reviewsCount: 89,
        isNew: true,
        isPopular: true
    },
    {
        id: 7,
        title: "Кристина",
        author: "Стивен Кинг",
        genres: ["Ужасы", "Мистика"],
        description: "История о демоническом автомобиле Plymouth Fury 1958 года выпуска, который оказывает роковое влияние на своего владельца. Классика хоррора от мастера жанра.",
        cover: "https://avatars.mds.yandex.net/get-mpic/12503234/2a0000018cf3c45161563d8c1807cd65b116/orig",
        rating: 4.8,
        reviewsCount: 145,
        isNew: false,
        isPopular: true
    },
    {
        id: 8,
        title: "Игра престолов",
        author: "Джордж Р.Р. Мартин",
        genres: ["Фэнтези", "Политические интриги"],
        description: "Первая книга эпопеи 'Песнь Льда и Пламени'. Борьба за Железный Трон Семи Королевств, где победа часто оказывается хуже поражения.",
        cover: "https://avatars.mds.yandex.net/get-mpic/5250150/img_id2214545036250618947.jpeg/orig",
        rating: 4.9,
        reviewsCount: 324,
        isNew: false,
        isPopular: true
    },
    {
        id: 9,
        title: "Атака титанов",
        author: "Хадзимэ Исаяма",
        genres: ["Манга", "Постапокалипсис", "Фэнтези"],
        description: "Человечество живет в городах, окруженных огромными стенами, защищающими от титанов - гигантских существ, пожирающих людей. История Эрена Йегера и его друзей, вступивших в борьбу с титанами.",
        cover: "https://cdn1.ozone.ru/s3/multimedia-v/6717699463.jpg",
        rating: 4.7,
        reviewsCount: 210,
        isNew: true,
        isPopular: true
    }
];

// ... остальной код остается без изменений ...


// Моковые отзывы
const mockReviews = {
    1: [
        { id: 1, userId: 101, userName: "Читатель", rating: 5, text: "Отличная книга, перечитываю каждый год!", date: "2023-01-15" },
        { id: 2, userId: 102, userName: "Книголюб", rating: 4, text: "Интересная антиутопия, но немного мрачновато.", date: "2023-02-20" }
    ],
    2: [
        { id: 3, userId: 103, userName: "Литератор", rating: 5, text: "Шедевр мировой литературы!", date: "2023-03-10" }
    ]
};

// Загрузка книг в каталог
function loadBooks(filter, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let books = [];

    if (filter === 'popular') {
        books = mockBooks.filter(book => book.isPopular);
    } else if (filter === 'new') {
        books = mockBooks.filter(book => book.isNew);
    } else {
        books = mockBooks;
    }

    container.innerHTML = books.map(book => `
        <div class="book-card" data-id="${book.id}">
            <div class="book-cover">
                <img src="${book.cover}" alt="${book.title}">
            </div>
            <div class="book-info">
                <h3>${book.title}</h3>
                <p class="author">${book.author}</p>
                <div class="rating">
                    <div class="stars">${'★'.repeat(Math.round(book.rating))}${'☆'.repeat(5 - Math.round(book.rating))}</div>
                    <span class="rating-value">${book.rating}</span>
                </div>
            </div>
        </div>
    `).join('');

    // Добавляем обработчики клика на карточки книг
    document.querySelectorAll('.book-card').forEach(card => {
        card.addEventListener('click', function() {
            const bookId = this.getAttribute('data-id');
            window.location.href = `book.html?id=${bookId}`;
        });
    });
}

// Загрузка данных книги
// В функции loadBookData добавим проверку на наличие обзора
function loadBookData(bookId) {
    const book = mockBooks.find(b => b.id === parseInt(bookId));
    if (!book) {
        window.location.href = 'catalog.html';
        return;
    }

    document.title = `Bunkaku - ${book.title}`;
    document.getElementById('book-title').textContent = book.title;
    document.getElementById('book-author').textContent = book.author;
    document.getElementById('book-cover').src = book.cover;
    document.getElementById('book-description').textContent = book.description;

    // Жанры
    const genresContainer = document.getElementById('book-genres');
    genresContainer.innerHTML = book.genres.map(genre =>
        `<span>${genre}</span>`
    ).join('');

    // Рейтинг
    document.querySelector('.rating .stars').textContent =
        '★'.repeat(Math.round(book.rating)) + '☆'.repeat(5 - Math.round(book.rating));
    document.querySelector('.rating-value').textContent = book.rating;
    document.querySelector('.reviews-count').textContent = `(${book.reviewsCount} отзывов)`;

    // Загрузка отзывов
    loadReviews(bookId);

    // Показываем обзор, если он есть для книги
    const reviewContainer = document.getElementById('book-review-container');
    const reviewLink = document.getElementById('book-review-link');
    
    if (bookId === '1') { // 1984
        reviewContainer.style.display = 'block';
        reviewLink.href = 'https://blog.mann-ivanov-ferber.ru/2024/05/24/100-predskazanij-oruella-kotorye-sbylis-antiutopiya-1984/';
        reviewLink.textContent = 'Читать обзор "100 предсказаний Оруэлла"';
    } else if (bookId === '2') { // Мастер и Маргарита
        reviewContainer.style.display = 'block';
        reviewLink.href = 'https://polka.academy/articles/553?fbclid=IwAR0WMlDH2MO2Qz6xRmoL3q01tRfYrJGAQ3zzH4vLjqwqQ_1WZUEw6Cubo34';
        reviewLink.textContent = 'Читать обзор "Мастер и Маргарита"';
    } else {
        reviewContainer.style.display = 'none';
    }
}

// Загрузка отзывов
function loadReviews(bookId) {
    const reviews = mockReviews[bookId] || [];
    const container = document.getElementById('reviews-list');

    if (container) {
        container.innerHTML = reviews.map(review => `
            <div class="review">
                <div class="review-header">
                    <span class="review-author">${review.userName}</span>
                    <span class="review-rating">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</span>
                </div>
                <p class="review-text">${review.text}</p>
                <div class="review-date">${review.date}</div>
            </div>
        `).join('');
    }
}

function addBookToShelf(bookId, shelfType) {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user) {
        alert('Для добавления книги необходимо войти в систему');
        window.location.href = 'login.html';
        return;
    }

    const book = mockBooks.find(b => b.id === parseInt(bookId));
    if (!book) return;

    // Удаляем книгу с других полок
    for (const shelf in user.shelves) {
        const index = user.shelves[shelf].findIndex(b => b.id === book.id);
        if (index !== -1) {
            user.shelves[shelf].splice(index, 1);
        }
    }

    // Добавляем на выбранную полку
    user.shelves[shelfType].push({
        id: book.id,
        title: book.title,
        author: book.author,
        cover: book.cover,
        addedDate: new Date().toLocaleDateString()
    });

    updateUserData(user);
    alert(`Книга "${book.title}" добавлена в "${getShelfName(shelfType)}"`);
}
function checkBookOnShelves(bookId) {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user) return;

    const statusElement = document.getElementById('shelf-status');
    statusElement.textContent = '';

    for (const shelf in user.shelves) {
        const isOnShelf = user.shelves[shelf].some(b => b.id === parseInt(bookId));
        if (isOnShelf) {
            statusElement.textContent = `Книга в разделе: ${getShelfName(shelf)}`;
            document.querySelector(`.shelf-btn[data-shelf="${shelf}"]`).classList.add('active-shelf');
        } else {
            document.querySelector(`.shelf-btn[data-shelf="${shelf}"]`).classList.remove('active-shelf');
        }
    }
}
// Отправка отзыва
function submitReview(bookId, text, rating) {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user) {
        alert('Для отправки отзыва необходимо войти в систему');
        return;
    }

    const book = mockBooks.find(b => b.id === parseInt(bookId));
    if (!book) return;

    // В реальном приложении здесь был бы запрос к API
    const newReview = {
        id: Date.now(),
        userId: user.id,
        userName: user.username,
        rating: parseInt(rating),
        text,
        date: new Date().toLocaleDateString('ru-RU')
    };

    // Добавляем отзыв в моковые данные
    if (!mockReviews[bookId]) {
        mockReviews[bookId] = [];
    }
    mockReviews[bookId].push(newReview);

    // Обновляем счетчик отзывов
    book.reviewsCount = (book.reviewsCount || 0) + 1;

    // Обновляем отзывы на странице
    loadReviews(bookId);

    // Очищаем форму
    document.getElementById('review-text').value = '';
    document.getElementById('review-rating').value = '5';

    alert('Спасибо за ваш отзыв!');
}

// Загрузка книг пользователя
function loadUserBooks(shelfType, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user) return;

    const books = user.shelves[shelfType] || [];

    container.innerHTML = books.length > 0
        ? books.map(book => `
            <div class="book-card" data-id="${book.id}">
                <div class="book-cover">
                    <img src="${book.cover}" alt="${book.title}">
                </div>
                <div class="book-info">
                    <h3>${book.title}</h3>
                    <p class="author">${book.author}</p>
                    <div class="added-date">Добавлено: ${book.addedDate}</div>
                </div>
            </div>
        `).join('')
        : `<p class="empty-shelf">На этой полке пока нет книг</p>`;


}
// Добавляем обработчики клика на карточки книг
document.querySelectorAll('.book-card').forEach(card => {
    card.addEventListener('click', function() {
        const bookId = this.getAttribute('data-id');
        window.location.href = `book.html?id=${bookId}`;
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const bookId = new URLSearchParams(window.location.search).get('id');

    // Проверяем нахождение книги на полках
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user) checkBookOnShelves(bookId);

    // Обработчики для кнопок
    document.querySelectorAll('.shelf-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const shelfType = this.getAttribute('data-shelf');
            addBookToShelf(bookId, shelfType);
            checkBookOnShelves(bookId);
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Загрузка книг на полках
    loadUserBooks('reading', 'reading-books');
    loadUserBooks('planned', 'planned-books');
    loadUserBooks('read', 'read-books');
    updateShelvesCounters();

    // Переключение между вкладками
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
});
function getShelfName(shelfType) {
    const names = {
        'reading': 'Читаю',
        'planned': 'В планах',
        'read': 'Прочитано'
    };
    return names[shelfType] || shelfType;
}

function updateUserData(user) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const index = users.findIndex(u => u.id === user.id);
    if (index !== -1) {
        users[index] = user;
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUser', JSON.stringify(user));
    }
}
// Функция поиска книг
function searchBooks(query) {
    if (!query || query.trim() === '') {
        return mockBooks; // Возвращаем все книги, если запрос пустой
    }

    const lowerQuery = query.toLowerCase();
    return mockBooks.filter(book =>
        book.title.toLowerCase().includes(lowerQuery) ||
        book.author.toLowerCase().includes(lowerQuery)
    );
}

// Функция отображения результатов поиска
function displaySearchResults(books, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = books.length > 0
        ? books.map(book => `
            <div class="book-card" data-id="${book.id}">
                <div class="book-cover">
                    <img src="${book.cover}" alt="${book.title}">
                </div>
                <div class="book-info">
                    <h3>${book.title}</h3>
                    <p class="author">${book.author}</p>
                    <div class="rating">
                        <div class="stars">${'★'.repeat(Math.round(book.rating))}${'☆'.repeat(5 - Math.round(book.rating))}</div>
                        <span class="rating-value">${book.rating}</span>
                    </div>
                </div>
            </div>
        `).join('')
        : `<p class="empty-message">Ничего не найдено</p>`;

    // Добавляем обработчики клика на карточки книг
    document.querySelectorAll('.book-card').forEach(card => {
        card.addEventListener('click', function() {
            const bookId = this.getAttribute('data-id');
            window.location.href = `book.html?id=${bookId}`;
        });
    });
}

// Функция для обработки поиска во всех вкладках
function handleSearch(query) {
    const results = searchBooks(query);

    // Отображаем результаты во всех вкладках
    displaySearchResults(results.filter(book => book.isPopular), 'popular-books');
    displaySearchResults(results.filter(book => book.isNew), 'new-books');

    // Показываем/скрываем кнопку сброса
    const resetBtn = document.getElementById('reset-search');
    resetBtn.style.display = query ? 'inline-block' : 'none';
}
