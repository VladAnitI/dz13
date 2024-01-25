"use strict";
class TaskManager {
    constructor() {
        this.tasks = [];
    }
    addTask(task) {
        this.tasks.push(task);
    }
    deleteTask(taskId) {
        this.tasks = this.tasks.filter((task) => task.id !== taskId);
    }
    markTaskAsCompleted(taskId) {
        const task = this.tasks.find((task) => task.id === taskId);
        if (task) {
            task.completed = true;
        }
    }
    listTasks() {
        console.log('Tasks:');
        this.tasks.forEach((task) => {
            console.log(`[${task.completed ? 'Сделано' : 'Не сделано'}] ${task.title}`);
        });
    }
}
class TaskUI {
    render(task) {
        return `<div>
                <h3>${task.title}</h3>
                <p>${task.description}</p>
                <p>Status: ${task.completed ? 'Сделано' : 'Не сделано'}</p>
              </div>`;
    }
    renderList(tasks) {
        return tasks.map((task) => this.render(task)).join('');
    }
}
const taskManager = new TaskManager();
taskManager.addTask({
    id: 1,
    title: 'numb1',
    description: 'sregsergs',
    completed: false
});
taskManager.addTask({
    id: 2,
    title: 'numb2',
    description: 'sergsefgs',
    completed: false
});
taskManager.listTasks();
const taskUI = new TaskUI();
const tasksContainer = document.getElementById('tasks-container');
if (tasksContainer) {
    tasksContainer.innerHTML = taskUI.renderList(taskManager.tasks);
}
