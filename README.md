# 🔐 Express Passport Auth

Цей проєкт — простий сервер на базі **Node.js + Express**, що реалізує **авторизацію користувачів** з використанням **Passport.js** (локальна стратегія — email + пароль).

## 🚀 Функціональність

- Реєстрація користувачів <br>
- Вхід у систему з перевіркою email/пароля <br>
- Захист сесій з використанням `express-session` <br>
- Захищений маршрут `/protected`, доступний лише авторизованим користувачам <br>
- Вихід із системи <br>
- Flash-повідомлення про помилки <br>
- EJS шаблони <br>

---

## 🛠️ Технології

- **Node.js** + **Express.js** <br>
- **Passport.js** (локальна стратегія) <br>
- **bcryptjs** для хешування паролів <br>
- **express-session** для керування сесіями <br>
- **EJS** — шаблонізатор для рендерингу сторінок <br>
- **connect-flash** — для відображення повідомлень <br>

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

```bash
express-passport-auth/
├── app.js
├── .env
├── config/
│   └── passport.js
├── routes/
│   └── auth.js
├── views/
│   ├── login.ejs
│   ├── register.ejs
│   └── protected.ejs
└── README.md
```

## 🔒 Подальші покращення (опціонально)

Підключення MongoDB для зберігання користувачів <br>
Google OAuth авторизація <br>
Відновлення пароля через email <br>
Захист від CSRF <br>
Валідація форм (email/пароль)
