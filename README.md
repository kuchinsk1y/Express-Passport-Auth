# Express Passport Auth

## Інструкція з запуску

1. Клонувати репозиторій або завантажити ZIP.
2. Встановити залежності:
   ```
   npm install
   ```
3. Створити `.env` файл на основі `.env.example`.
4. Запустити сервер:
   ```
   npm run dev
   ```

## Підтримка входу:
- Звичайна реєстрація/логін (email + пароль)
- Вхід через Google OAuth 2.0

## Маршрути
- `GET /register`, `POST /register`
- `GET /login`, `POST /login`
- `GET /auth/google`
- `GET /auth/google/callback`
- `GET /protected`
- `GET /logout`