import  { addNewprojects, newprojects, newProject, newToDoItem} from "./js/app-logic"
import loadData from "./js/loadData.js";
import { generateProjectPage, generateNavprojects } from "./DOM-manipulation.js";
import "./styles.css";

console.log("Hello World!");

let projects = [].concat(loadData());
console.log(projects);


function updateNav(){
    generateNavprojects(projects);
    const allProjects = document.querySelectorAll(".nav-project");
    allProjects.forEach((project) => {
        const projectIndex = project.dataset.index;
        project.addEventListener("click", () => {
            generateProjectPage(projects[projectIndex]);
        });
    });
}

generateProjectPage(projects[0], content);
updateNav()