"use strict";
class TaskManager {
    constructor() {
        this.tasks = [];
    }
    addTask(task) {
        this.tasks.push(task);
        render(this.tasks);
    }
    deleteTask(taskId) {
        this.tasks = this.tasks.filter((task) => task.id !== taskId);
        render(this.tasks);
    }
    markTaskAsCompleted(taskId) {
        const task = this.tasks.find((task) => task.id === taskId);
        if (task) {
            task.completed = true;
            render(this.tasks);
        }
    }
    listTasks() {
        for (const task of this.tasks) {
            console.log(`ID: ${task.id}`);
            console.log(`Заголовок: ${task.title}`);
            console.log(`Описание: ${task.description}`);
            console.log(`Completed: ${task.completed}`);
            console.log('-------------------------');
        }
    }
}
class TaskDOM {
    render(task) {
        const status = task.completed ? '+' : '-';
        return `
      <div>
        <h3>${task.title}</h3>
        <p>Заголовок: ${task.description}</p>
        <p>Статус: ${status}</p>
      </div>
    `;
    }
    renderList(tasks) {
        let result = '';
        for (const task of tasks) {
            result += this.render(task);
        }
        return result;
    }
}
const taskManager = new TaskManager();
const render = (tasks) => {
    const container = document.getElementById('task-container');
    const taskDOM = new TaskDOM();
    container.innerHTML = taskDOM.renderList(tasks);
};
taskManager.addTask({
    id: 1,
    title: 'Task 1',
    description: 'Task 1',
    completed: false
});
taskManager.addTask({
    id: 2,
    title: 'Task 2',
    description: 'Task 2',
    completed: false
});
taskManager.markTaskAsCompleted(1);
taskManager.listTasks();
const container = document.getElementById('task-container');
const tasks = taskManager.tasks;
render(tasks);
const form = document.getElementById('task-form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const titleInput = document.getElementById('task-title');
    const descriptionInput = document.getElementById('task-description');
    const task = {
        id: Date.now(),
        title: titleInput.value,
        description: descriptionInput.value,
        completed: false
    };
    taskManager.addTask(task);
    titleInput.value = '';
    descriptionInput.value = '';
});
