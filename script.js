// Домашнее задание к уроку №37: “Браузерные события”

// Задание 1: Простое событие через атрибут в HTML

// 1. Создайте кнопку `<button>`, которая выводит в консоль сообщение "Кнопка нажата!" при нажатии. Добавьте обработчик события через атрибут `onclick` в HTML.


// Задание 2: Добавление обработчика через JavaScript

let button = document.querySelector('#jsButton');
button.addEventListener('click', () => {
    console.log("Событие обработано через JS");
})


// Задание 3: Множественные события на одном элементе

let myDivElement = document.querySelector('#myDiv');

myDivElement.addEventListener('click', () => {
    myDivElement.style.backgroundColor = 'blue';
})

myDivElement.addEventListener('mouseover', () => {
    console.log("Элемент нажат");
})


// Задание 4: Работа с объектом события `event`

let textInputElement = document.querySelector('#textInput');

textInputElement.addEventListener('keydown', (event) => {
    console.log('Клавиша нажата:', event.key);
})


// Задание 5: Отмена действия по умолчанию

let myLinkElement = document.querySelector('#myLink');

myLinkElement.addEventListener('click', (event) => {
    event.preventDefault()
})

myLinkElement.addEventListener('click', () => {
    console.log("Переход по ссылке отменен")
})


// Задание 6: Делегирование событий

let listElement = document.querySelector('#list');

listElement.addEventListener('click', (event) => {
    console.log(event.target)
})


// Задание 7: События клавиатуры

let keyboardInputElement = document.querySelector('#keyboardInput');

keyboardInputElement.addEventListener('keydown', (event) => {
    console.log(event.key)
})
