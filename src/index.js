import  { projects, generateNewProject, generateNewToDoItem } from "./js/app-logic"
import { generateProjectPage, generateNavprojects } from "./js/DOM-generation.js";
import "./styles.css";

console.log("Hello World!");

console.log(projects.getProjectsArray());

function updateProjectPage(index) {
    generateProjectPage(projects.getProjectsArray(), index);

    const editProjectModal = document.querySelector("#edit-project-modal");
    const editProjectOpenBtn = document.querySelector("#edit-project-open");
    const editProjectSaveBtn = document.querySelector("#edit-project-save");
    const editProjectCloseBtn = document.querySelector("#edit-project-close");

    editProjectOpenBtn.addEventListener("click", () => {
        editProjectModal.showModal();
    });
    
    editProjectCloseBtn.addEventListener("click", () => {
        editProjectModal.close();
    });

    editProjectSaveBtn.addEventListener("click", (event) => {
        event.preventDefault();

        const index = editProjectSaveBtn.dataset.index;
        const project = projects.getProjectsArray()[index];

        project.name = document.querySelector("#newProjectName").value;
        project.description = document.querySelector("#newProjectDescription").value;
        project.deadline = document.querySelector("#newProjectDeadline").value;
        
        updateNav();
        updateProjectPage(projects.getProjectsArray().indexOf(project));
    });
}

function updateNav(){
    generateNavprojects(projects.getProjectsArray());
    const allProjects = document.querySelectorAll(".nav-project");
    allProjects.forEach((project) => {
        const projectIndex = project.dataset.index;
        project.addEventListener("click", () => {
            updateProjectPage(projectIndex);
        });
    });
}

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

newProjectSaveBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const projectName = document.querySelector("#projectName").value;
    const projectDesc = document.querySelector("#projectDescription").value;
    const projectDeadline = document.querySelector("#projectDeadline").value;

    const newProject = generateNewProject(projectName, projectDesc, projectDeadline);
    projects.addProject(newProject);
    console.log(projects.getProjectsArray());
    updateNav();
    updateProjectPage(projects.getProjectsArray().indexOf(newProject));
});

updateProjectPage(0);
updateNav()