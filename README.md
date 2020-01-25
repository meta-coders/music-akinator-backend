# MusicAkinator

Для коректної роботи застосунку на локальній машині необхідно:

- [Node.js](https://nodejs.org/en/), [NPM](https://www.npmjs.com/)
- `api_token` для ресурсу `Audd API`(без ключа ви не зможете користуватися `Audd API`). 
Отримати його можна за наступним [посиланням](https://t.me/auddbot?start=api).

## Підготовка

#### Крок 1

Склонуйте репозиторій за допомогою даної команди:
```
git clone https://github.com/meta-coders/music-akinator-backend.git
```

#### Крок 2

Встановіть змінні середовища:

- `PORT` - порт мережевого інтерфейсу, на якому буде піднято сервер застосунку.
- `AUDD_API_TOKEN` - ключ API для ресурсу `Audd`.
- `AUDD_URL` - адреса `Audd API`.
- `DEEZER_URL` - адреса `Deezer API`. 

## Запуск

Після того як все готово, перейдіть до склонованого репозиторію:
```
cd music-akinator-backend/
```

Та запустіть `npm`-скрипти `isntall` та `start`:
```
npm install
npm start
```

## Використання

Інтерфейс веб-сторінки застосунку дозволяє здійснити розпізнавання композицій
за допомогою звукової доріжки (наприклад, наспівування) або ж використовуючи відомі
користувачеві слова з пісні.     