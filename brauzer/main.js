const button = document.getElementById('jsButton');
button.addEventListener('click', () => {
    console.log('Событие обработано через JS');
})

const div = document.getElementById('myDiv');
div.addEventListener('click', () => {
    div.style.backgroundColor = 'blue';
})
div.addEventListener('mouseover', () => {
    console.log('Элемент нажат');
})

const keyboard = document.getElementById('textInput');
keyboard.addEventListener('keydown', (event) => {
    console.log('Клавиша нажата:', event.key);
})

const error = document.getElementById('myLink');
error.addEventListener('click', (event) => {
    event.preventDefault();
    alert('Переход по ссылке отменен');
})

const list = document.getElementById('list');
list.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        console.log(event.target.textContent);
    }
})

const keycode = document.getElementById('keyboardInput');
keycode.addEventListener('keydown', (event) => {
    console.log('Код клавиши:', event.code)
})