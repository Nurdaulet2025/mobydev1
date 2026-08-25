localStorage.setItem('greeting', 'Привет, мир!');
const greet = localStorage.getItem('greeting');
console.log(greet);
localStorage.removeItem('greeting');
const removedGreet = localStorage.getItem('greeting');
console.log(removedGreet);

const user = {name:'John', age:30, isLoggedIn: true};
const userJSON = JSON.stringify(user);
localStorage.setItem('user', userJSON);
const takenUser = localStorage.getItem('user');
const parsedUser = JSON.parse(takenUser);
console.log(parsedUser);

user.country = 'USA';
const updatedUserJSON = JSON.stringify(user);
localStorage.setItem('user', updatedUserJSON);
const take = localStorage.getItem('user');
const parsedTake = JSON.parse(take);
console.log(parsedTake);

let hasName = parsedTake.hasOwnProperty('name');
if (hasName === true) {
    console.log(parsedTake.name);
}
let hasAge = parsedTake.hasOwnProperty('age');
if (hasAge === true) {
    console.log(parsedTake.age);
}
let hasCountry = parsedTake.hasOwnProperty('country');
if (hasCountry === true) {
    console.log(parsedTake.country);
}
let hasNation = parsedTake.hasOwnProperty('nation');
if (hasNation === true) {
    console.log(parsedTake.nation);
} else {
    parsedTake.nation = 'British';
    const NewUserJSON = JSON.stringify(parsedTake);
    localStorage.setItem('user', NewUserJSON);  
    const newTake = localStorage.getItem('user');
    const newParsedTake = JSON.parse(newTake);
    console.log(newParsedTake.nation);
}

localStorage.clear();
const checkUser = localStorage.getItem('user');
const parseCheck = JSON.parse(checkUser);
console.log(parseCheck);

const tasks = [
    {title: 'Task 1', completed: false},
    {title: 'Task 2', completed: false},
    {title: 'Task 3', completed: true}
]
const tasksJSON = JSON.stringify(tasks);
localStorage.setItem('tasks', tasksJSON);
const takenTasks = localStorage.getItem('tasks');
const parsedTasks = JSON.parse(takenTasks);
console.log(parsedTasks);

tasks[0].completed = true;      
newTasksJSON = JSON.stringify(tasks);
localStorage.setItem('tasks', newTasksJSON);
const newTakenTasks = localStorage.getItem('tasks');
const newParsedTasks = JSON.parse(newTakenTasks);
console.log(newParsedTasks);