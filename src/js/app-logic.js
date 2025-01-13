
const folders = []

function addNewFolder(folder) {
    folders.push(folder);
}

function newFolder(name, description) {
    const projects = [];
    const addProjects = (project) => projects.push(project);
    const delProjects = (projectIndex) => projects.splice(projectIndex, 1);

    return { name, description, projects, addProjects, delProjects} ;
}

function newProject(name, description, deadline) {
    const toDoList = [];
    const addToDoItem = (toDoItem) => toDoList.push(toDoItem);
    const delToDoItem = (toDoIndex) => toDoList.splice(toDoIndex, 1);

    return { name, description, deadline, toDoList, addToDoItem, delToDoItem}
}

function newToDoItem(task, desc, deadline, priority) {
    return { task, desc, deadline, priority }
}

export {folders, addNewFolder, newFolder, newProject, newToDoItem}