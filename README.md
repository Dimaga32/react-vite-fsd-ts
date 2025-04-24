# React+Vite+TS+FSD
[![License](https://img.shields.io/github/license/Dimaga32/react-vite-fsd-ts.svg)](https://github.com/Dimaga32/react-vite-fsd-ts/blob/main/LICENSE)
[![Issues](https://img.shields.io/github/issues/Dimaga32/react-vite-fsd-ts.svg)](https://github.com/Dimaga32/react-vite-fsd-ts/issues)
## О проекте
Это шаблон для написания проектов.
Он создан для ускорения написания несложных и/или демонстрационных проектов.
При небольших модификациях может быть реорганизован для относительно крупных проектов.
## Стек
React, Vite, TS, Redux, RTK Query, Tailwind, Express, PostgreSQL,
## Функционал / Маршрутный лист
### - [x] Настройка роутеризации фронтенда
### - [x] Настройка окружения
### - [x] Создание базового UI
### - [ ] Создание и настройка сервера
### - [ ] Создание и настройка базы данных
### - [ ] Тесты и документация
## Архитектура
 - [config](./config)  
  Папка config содержит конфигурационные файлы, а также переменные окружения
   - [public](./public)  
  Папка public предназначена для jpg, png, svg и подобных файлов
   - [db](./db)  
  Папка db предназначена для файлов, связанных с инициализацией базы данных
   - [server](./server)  
  Папка server содержит папки:
   - [routers](./server/routers) — хранит роутеризацию сервера
    - [middlewares](./server/middlewares) — хранит мидлвары
    - [controllers](./server/controllers) — хранит контроллеры — функции, вызывающиеся при запросе на url роутера
    - [models](./server/models) — хранит модели — функции вызова к базе данных
   - [src](./src)  
  Папка src содержит фронтенд. Фронтенд построен по методологии FSD (Feature-Sliced Design): features, shared, entities, widgets, pages, app.
## Установка
### В данный момент
```
git pull https://github.com/Dimaga32/react-vite-fsd-ts .
npm install
npm run dev
``` 
### Впоследствии планируется
```
git pull https://github.com/Dimaga32/react-vite-fsd-ts .
docker-compose up --build 
``` 
## Вклады и баги
В случае нахождения бага или неработоспособности определённых кейсов просьба написать по данной почте sinitsin.dmitry2013@yandex.ru
## Команда
### Главный разработчик: Dimaga32