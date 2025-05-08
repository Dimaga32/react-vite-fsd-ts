# CAD Test Task (React + Vite + FSD)

[![License](https://img.shields.io/github/license/Dimaga32/react-vite-fsd-ts.svg)](https://github.com/Dimaga32/react-vite-fsd-ts/blob/main/LICENSE)
[![Issues](https://img.shields.io/github/issues/Dimaga32/react-vite-fsd-ts.svg)](https://github.com/Dimaga32/react-vite-fsd-ts/issues)

## О проекте

Этот проект — тестовое задание для компании CAD Exchanger,
реализованное с использованием стека
React + Vite + TypeScript + Tailwind + Express и архитектуры FSD.

## Стек

- React
- Vite
- TypeScript
- Tailwind CSS
- Express
- Docker + DockerHub
- Yandex Cloud

## Маршрутный лист

### - [x] Настройка окружения

### - [x] Настройка роутеризации фронтенда

### - [x] Реализация адаптивного дизайна

### - [x] Создание и настройка сервера

### - [x] Создание и загрузка Docker-образов на DockerHub

### - [x] Загрузка на Yandex Cloud

## Архитектура

- [config](./config)  
  Папка config содержит конфигурационные файлы, а также переменные окружения
- [public](./public)  
  Папка public предназначена для jpg, png, svg и подобных файлов
- [server](./server) — backend-часть (Express):
  - [routers](./server/routers) — роутеры Express
  - [controllers](./server/controllers) — контроллеры (обработчики URL)
- [src](./src)  
  Папка src содержит фронтенд. Фронтенд построен по методологии FSD (Feature-Sliced Design): features, shared, entities, widgets, pages, app.

## Установка и запуск

### 1 Способ

Требуется установленный Node.js

```
git clone -b TestTask --single-branch https://github.com/Dimaga32/react-vite-fsd-ts.git .
npm install
npm run dev
```

### 2 Способ

Требуется установленные Docker и docker-compose

```
git clone -b TestTask --single-branch https://github.com/Dimaga32/react-vite-fsd-ts.git .
docker-compose up --build
```

### 3. Онлайн-деплой

[Открыть приложение](https://your-deployed-url.com)

## Вклады и баги

В случае нахождения бага или неработоспособности определённых кейсов просьба написать по данной почте sinitsin.dmitry2013@yandex.ru

## Автор

Dimaga32 📧 sinitsin.dmitry2013@yandex.ru  
[GitHub](https://github.com/Dimaga32)
