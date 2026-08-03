let message = document.getElementById("message");
message.textContent = "Добро пожаловать в JavaScript!"; 

const boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(box => {
    box.style.color = 'green';
})

const textChange = document.querySelector('#text');
textChange.textContent = "Hello World!";

const everyBox = document.querySelectorAll(".box");
everyBox.forEach(box => {
    box.style.color = 'blue';
})

const everyP = document.querySelectorAll(".highlight");
everyP.forEach(p => {
    p.style.color = 'red';
})