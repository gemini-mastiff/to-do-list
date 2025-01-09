// /*
const folders = []

const editList = (list) => {

    const add = (item) => list.push(item);

    const del = (itemIndex) => list.splice(itemIndex, 1);
}

function Folder(name, description) {
    const projects = [];
    const addProjects = (project) => projects.push(project);

    const delProjects = (projectIndex) => projects.splice(projectIndex, 1);

    return { name, description, projects, addProjects, delProjects} ;
}


function Project(name, description, deadline) {
    const toDoList = [];
    const addToDoItem = (toDoItem) => toDoList.push(toDoItem);

    const delToDoItem = (toDoIndex) => toDoList.splice(toDoIndex, 1);


    return { name, description, deadline, toDoList, addToDoItem, delToDoItem}
}

function ToDoItem(task, desc, deadline, priority) {
    return { task, desc, deadline, priority }
}
// */

const folder = Folder("test", "test desc");
const project = Project("testP", "testDescP", "testDeadlineP");
folder.addProjects(project);
const toDoItem = ToDoItem("nameT", "descT", "deadlineT", "priorityT");
project.addToDoItem(toDoItem);


export default folder