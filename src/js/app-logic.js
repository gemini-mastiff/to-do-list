import loadData from "./loadData.js";

function projectsList() {
    const projectsArray = [].concat(loadData());

    const getProjectsArray = () => projectsArray;

    const addProject = (project) => projectsArray.push(project)
    const delProject = (projectIndex) => projectsArray.splice(projectIndex, 1);

    return { getProjectsArray, addProject, delProject };
}

function newProject(name, description, deadline) {
    const toDoList = [];
    const addToDoItem = (toDoItem) => toDoList.push(toDoItem);
    const delToDoItem = (toDoIndex) => toDoList.splice(toDoIndex, 1);

    return { name, description, deadline, toDoList, addToDoItem, delToDoItem };
}

function newToDoItem(name, description, deadline, priority) {
    return { name, description, deadline, priority };
} 

const projects = projectsList()

export { projects, newProject, newToDoItem };