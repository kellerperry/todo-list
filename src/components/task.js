function Task (name) {
    name;
    
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

    
    return { name, addDescription, getDescription, setPriority, addProject, getProject, getPriority, setDueDate, getDueDate }
}



