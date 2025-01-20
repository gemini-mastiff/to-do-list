import  { projects, generateNewProject, generateNewToDoItem } from "./js/app-logic"
import { generateProjectPage, generateNavprojects } from "./js/DOM-generation.js";
import "./styles.css";

console.log(projects.getProjectsArray());

function updateProjectPage(index) {
    generateProjectPage(projects.getProjectsArray(), index);

    const editProjectDialog = document.querySelector("#edit-project-dialog");
    const editProjectOpenBtn = document.querySelector("#edit-project-open");
    const editProjectSaveBtn = document.querySelector("#edit-project-save");
    const editProjectCloseBtn = document.querySelector("#edit-project-close");
    const editProjectForm = document.querySelector("#edit-project-form");

    editProjectOpenBtn.addEventListener("click", () => {
        editProjectDialog.showModal();
    });
    
    editProjectCloseBtn.addEventListener("click", () => {
        editProjectForm.reset()
        editProjectDialog.close();
    });

    editProjectSaveBtn.addEventListener("click", (event) => {
        event.preventDefault();

        const index = editProjectSaveBtn.dataset.index;
        const project = projects.getProjectsArray()[index];

        project.name = document.querySelector("#newProjectName").value;
        project.description = document.querySelector("#newProjectDescription").value;
        project.deadline = document.querySelector("#newProjectDeadline").value;
        
        updateNav();
        updateProjectPage(index);
    });

    const newToDoDialog = document.querySelector("#new-to-do-dialog");
    const newToDoOpenBtn = document.querySelector("#new-to-do-open");
    const newToDoSaveBtn = document.querySelector("#new-to-do-save");
    const newToDoCloseBtn = document.querySelector("#new-to-do-close");
    const newToDoForm = document.querySelector("#new-to-do-form");

    newToDoOpenBtn.addEventListener("click", () => {
        newToDoDialog.showModal();
    });
    
    newToDoCloseBtn.addEventListener("click", () => {
        newToDoForm.reset()
        newToDoDialog.close();
    });

    newToDoSaveBtn.addEventListener("click", (event) => {
        event.preventDefault();

        const toDoName = document.querySelector("#newToDoName").value;
        const toDoDescription = document.querySelector("#newToDoDeadline").value;
        const toDoDeadline = document.querySelector("#newToDoDeadline").value;
        const toDoPriority = document.querySelector("#newToDoPriority").value;

        const newToDo = generateNewToDoItem(toDoName, toDoDescription, toDoDeadline, toDoPriority);
        const currentProject = projects.getProjectsArray()[index];
        currentProject.addToDoItem(newToDo);
        console.log(currentProject.toDoList);
        updateProjectPage(index);

        newToDoForm.reset()
        newToDoDialog.close();
    });

    const allToDos = document.querySelectorAll(".to-do-item");
    allToDos.forEach((toDo) => {
        const toDoIndex = toDo.dataset.index;
        const checkbox = toDo.querySelector("#to-do-checkbox");
        const currentToDoItem = projects.getProjectsArray()[index].toDoList[toDoIndex];

        checkbox.addEventListener("change", () => {
            currentToDoItem.complete = checkbox.checked ? true : false;
            console.log(currentToDoItem);
        });
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

const newProjectDialog = document.querySelector("#new-project-dialog");
const newProjectOpenBtn = document.querySelector("#new-project-open");
const newProjectSaveBtn = document.querySelector("#new-project-save");
const newProjectCloseBtn = document.querySelector("#new-project-close");
const newProjectForm = document.querySelector("#new-project-form");

newProjectOpenBtn.addEventListener("click", () => {
    newProjectDialog.showModal();
});

newProjectCloseBtn.addEventListener("click", () => {
    newProjectForm.reset();
    newProjectDialog.close();
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

    newProjectForm.reset();
    newProjectDialog.close();
});

updateProjectPage(0);
updateNav()