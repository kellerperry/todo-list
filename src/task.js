export default function Task (name, description, dueDate, priority, project) {
    name;
    description;
    dueDate;
    priority;
    project;
    let status = "open";

    const toggleStatus = () => {
        status === "open" ? status = "complete" : status = "open";
    }

}




