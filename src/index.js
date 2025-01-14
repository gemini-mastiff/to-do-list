import  { projects, newProject, newToDoItem} from "./js/app-logic"
import { generateProjectPage, generateNavprojects } from "./js/DOM-generation.js";
import "./styles.css";

console.log("Hello World!");

console.log(projects.getProjectsArray());

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

newProjectSaveBtn.addEventListener("click", () => {
    const projectName = document.querySelector("#projectName").value;
    const projectDesc = document.querySelector("#projectDescription").value;
    const projectDeadline = document.querySelector("#projectDeadline").value;
    projects.addProject(newProject(projectName, projectDesc, projectDeadline));
    console.log(projects.getProjectsArray());
    updateNav();
});

function updateNav(){
    generateNavprojects(projects.getProjectsArray());
    const allProjects = document.querySelectorAll(".nav-project");
    allProjects.forEach((project) => {
        const projectIndex = project.dataset.index;
        project.addEventListener("click", () => {
            generateProjectPage(projects.getProjectsArray(), projectIndex);
        });
    });
}

generateProjectPage(projects.getProjectsArray(), 0);
updateNav()