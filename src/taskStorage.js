export default function taskStorage () {
    let tasks = [];

    const addTaskToStorage = (task) => {
        tasks.push(task);
    }

    const removeTaskFromStorage = (task) => {
        tasks = tasks.splice(tasks.indexOf(task), 1);
    }


    return {addTaskToStorage, removeTaskFromStorage}
}