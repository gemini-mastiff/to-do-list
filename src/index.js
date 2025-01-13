import  {folders, addNewFolder, newFolder, newProject, newToDoItem} from "./js/app-logic"
import "./styles.css";

console.log("Hello World!");

const folder = newFolder('Main', 'This is the default folder.');
addNewFolder(folder);
folder.addProjects(newProject('Project1', 'Default Project', new Date));
folder.projects[0].addToDoItem(newToDoItem('To-do1', 'Default To-do', new Date, 'High'))
console.log(folders);

// 

// 