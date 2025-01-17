import loadData from "./loadData.js";

function projectsList() {
    const projectsArray = [].concat(loadData());

    const getProjectsArray = () => projectsArray;

    const addProject = (project) => projectsArray.push(project)
    const delProject = (projectIndex) => projectsArray.splice(projectIndex, 1);

    return { getProjectsArray, addProject, delProject };
}

function generateNewProject(name, description, deadline) {
    const toDoList = [];

    const getToDoList = () => toDoList;

    const addToDoItem = (toDoItem) => toDoList.push(toDoItem);
    const delToDoItem = (toDoIndex) => toDoList.splice(toDoIndex, 1);

    return { name, description, deadline, getToDoList, addToDoItem, delToDoItem };
}

function generateNewToDoItem(name, description, deadline, priority, complete) {
    return { name, description, deadline, priority, complete };
} 

const projects = projectsList()

export { projects, generateNewProject, generateNewToDoItem };