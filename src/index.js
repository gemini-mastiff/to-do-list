import  { addNewprojects, newprojects, newProject, newToDoItem} from "./js/app-logic"
import loadData from "./js/loadData.js";
import generateNavprojects from "./js/nav-projects-list.js";
import generateProjectPage from "./js/project-gen.js";
import "./styles.css";

console.log("Hello World!");

let projects = [].concat(loadData());
console.log(projects);

const navList = document.querySelector("#nav-projects-list");
const content = document.querySelector("#content");

function clearContent() {
    content.textContent = '';
}

function updateNav(){
    generateNavprojects(projects, navList);
    const allProjects = document.querySelectorAll(".nav-project");
    allProjects.forEach((project) => {
        const projectIndex = project.dataset.index;
        project.addEventListener("click", () => {
            clearContent();
            generateProjectPage(projects[projectIndex], content);
        });
    });
}

generateProjectPage(projects[0], content);
updateNav()