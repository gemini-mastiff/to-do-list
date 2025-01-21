import loadData from "./loadData.js";
import { format } from "date-fns";

function projectsList() {
    const projectsArray = [].concat(loadData());

    const getProjectsArray = () => projectsArray;

    const addProject = (project) => projectsArray.push(project)
    const delProject = (projectIndex) => projectsArray.splice(projectIndex, 1);

    return { getProjectsArray, addProject, delProject };
}

function generateNewProject(name, description, date) {
    const toDoList = [];

    const deadline = format(date, `Pp`);

    const addToDoItem = (toDoItem) => toDoList.push(toDoItem);
    const delToDoItem = (toDoIndex) => toDoList.splice(toDoIndex, 1);

    return { name, description, deadline, toDoList, addToDoItem, delToDoItem };
}

function generateNewToDoItem(name, description, date, priority) {
    const complete = false;

    const deadline = format(date, `Pp`);

    return { name, description, deadline, priority, complete };
} 

const projects = projectsList()

export { projects, generateNewProject, generateNewToDoItem };