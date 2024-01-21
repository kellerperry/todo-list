import Task from "./task";

export default function getTaskInput () {
    const name = document.getElementById("task-name").value;
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("due-date").value;
    const priority = document.getElementById("priority").value;
    const project = document.getElementById('project').value;

    const newTask = Task(name, description, dueDate, priority, project);

    return newTask;
}