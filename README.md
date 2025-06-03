# 🔐 Express Passport Auth

Цей проєкт — простий сервер на базі **Node.js + Express**, що реалізує **авторизацію користувачів** з використанням **Passport.js** (локальна стратегія — email + пароль).

## 🚀 Функціональність

- Реєстрація користувачів
- Вхід у систему з перевіркою email/пароля
- Захист сесій з використанням `express-session`
- Захищений маршрут `/protected`, доступний лише авторизованим користувачам
- Вихід із системи
- Flash-повідомлення про помилки
- EJS шаблони

---

## 🛠️ Технології

- **Node.js** + **Express.js**
- **Passport.js** (локальна стратегія)
- **bcryptjs** для хешування паролів
- **express-session** для керування сесіями
- **EJS** — шаблонізатор для рендерингу сторінок
- **connect-flash** — для відображення повідомлень

---

## 📦 Встановлення

```bash
git clone https://github.com/your-username/express-passport-auth.git
cd express-passport-auth
npm install
```
## ⚙️ Налаштування
Створи файл .env у корені проєкту:

```
SESSION_SECRET=твій_секретний_рядок
```

## 🚀 Запуск
У режимі розробки (з nodemon):

```bash
npm run dev
```

У звичайному режимі:
```bash
npm start
```

## 🌐 Маршрути

| Метод | URL          | Опис                                             |
| ----- | ------------ | ------------------------------------------------ |
| GET   | `/register`  | Форма реєстрації                                 |
| POST  | `/register`  | Обробка реєстрації                               |
| GET   | `/login`     | Форма входу                                      |
| POST  | `/login`     | Обробка входу через Passport                     |
| GET   | `/logout`    | Вихід із системи                                 |
| GET   | `/protected` | Захищена сторінка (для залогінених користувачів) |

## 📁 Структура проєкту

express-passport-auth/ <br>
├── app.js <br>
├── .env <br>
├── config/ 
│   └── passport.js <br>
├── routes/
│   └── auth.js <br>
├── views/
│   ├── login.ejs <br>
│   ├── register.ejs <br>
│   └── protected.ejs <br>
└── README.md

## 🔒 Подальші покращення (опціонально)

Підключення MongoDB для зберігання користувачів
Google OAuth авторизація
Відновлення пароля через email
Захист від CSRF
Валідація форм (email/пароль)
