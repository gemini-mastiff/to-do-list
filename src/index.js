import  { addNewprojects, newprojects, newProject, newToDoItem} from "./js/app-logic"
import loadData from "./js/loadData.js";
import { generateProjectPage, generateNavprojects } from "./js/DOM-generation.js";
import "./styles.css";

console.log("Hello World!");

let projects = [].concat(loadData());
console.log(projects);

const newProjectModal = document.querySelector("#new-project-modal");
const newProjectOpenBtn = document.querySelector("#new-project-open");
const newProjectSaveBtn = document.querySelector("#new-project-save");
const newProjectCloseBtn = document.querySelector("#new-project-close");

newProjectOpenBtn.addEventListener("click", () => {
    newProjectModal.showModal();
});

newProjectCloseBtn.addEventListener("click", () => {
    newProjectModal.close();
});

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

generateProjectPage(projects[0]);
updateNav()