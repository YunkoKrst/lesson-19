const todoList = [];

function addTask(task) {
    if (typeof task === 'string') {
        todoList.push(task);
        console.log("Завдвння успішно додане.");
    } else {
        console.log("Помилка: завдання повинне бути числом.");
    }
}

function removeTask(index) {
    if (index >= 0 && index < todoList.length) {
        todoList.splice(index, 1);
        console.log("Завдання успішно видалено.");
    } else {
        console.log("Помилка: не правильний номер завдання.");
    }
}

function displayList() {
    if (todoList.length > 0) {
        console.log("Todo List:");
        todoList.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
        });
    } else {
        console.log("Todo List порожній.");
    }
}


addTask("Зробити домашнє завдання");
addTask("Сходити у спортзал");
addTask("Зателефонувати клієнту");

displayList();

removeTask(0);

displayList();