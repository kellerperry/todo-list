function Task (name) {
    name;
    this.status = "open";
    
    const addDescription = (description) => {
        this.description = description;
    }
    
    const getDescription = () => {
        return this.description;
    }

    const setDueDate = (dueDate) => {
        this.dueDate = dueDate;
    }

    const getDueDate = () => {
        return this.dueDate;
    }

    const setPriority = (priority) => {
        this.priority = priority;
    }

    const getPriority = () => {
        return this.priority;
    }
    
    const addProject = (project) => {
        this.project = project;
    }

    const getProject = () => {
        return this.project;
    }

    const setStatus = (newStatus) => {
        this.status = newStatus;
    }

    const getStatus = () => {
        return this.status;
    }

    
    return { name, addDescription, getDescription, setPriority, addProject, getProject, getPriority, setDueDate, getDueDate, setStatus, getStatus }
}



