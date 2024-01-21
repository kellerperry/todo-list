export default function Task (name, description, dueDate, priority, project) {
   this.name = name;
   this.description = description;
   this.dueDate = dueDate;
   this.priority = priority;
   this.project = project;
   this.status = "open";
   
   this.toggleStatus = () => {
        this.status === "open" ? this.status = "complete" : this.status = "open";
    }

}



