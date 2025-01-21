import  { projects, generateNewProject, generateNewToDoItem } from "./js/app-logic"
import { generateProjectPage, generateNavprojects, generateNewProjectDialog, generateEditProjectDialog, generateNewToDoDialog } from "./js/DOM-generation.js";
import "./styles.css";

console.log(projects.getProjectsArray());

function updateProjectPage(index) {
    generateProjectPage(projects.getProjectsArray(), index);

    const currentProject = projects.getProjectsArray()[index];

    const editProjectOpenBtn = document.querySelector("#edit-project-open");
    editProjectOpenBtn.addEventListener("click", () => {
        generateEditProjectDialog(currentProject, index);

        const editProjectDialog = document.querySelector("#edit-project-dialog");
        editProjectDialog.showModal();

        const editProjectCloseBtn = document.querySelector("#edit-project-close");
        editProjectCloseBtn.addEventListener("click", () => {
            editProjectDialog.close();
        });

        const editProjectSaveBtn = document.querySelector("#edit-project-save");
        editProjectSaveBtn.addEventListener("click", (event) => {
            event.preventDefault();

            currentProject.name = document.querySelector("#newProjectName").value;
            currentProject.description = document.querySelector("#newProjectDescription").value;
            currentProject.deadline = document.querySelector("#newProjectDeadline").value;
            
            updateNav();
            updateProjectPage(index);
            editProjectDialog.close();
        });
    });

    const newToDoOpenBtn = document.querySelector("#new-to-do-open");
    newToDoOpenBtn.addEventListener("click", () => {
        generateNewToDoDialog();

        const newToDoDialog = document.querySelector("#new-to-do-dialog");
        newToDoDialog.showModal();

        const newToDoCloseBtn = document.querySelector("#new-to-do-close");
        newToDoCloseBtn.addEventListener("click", () => {
            newToDoDialog.close();
        })

        const newToDoSaveBtn = document.querySelector("#new-to-do-save");
        newToDoSaveBtn.addEventListener("click", (event) => {
            event.preventDefault();
    
            const toDoName = document.querySelector("#newToDoName").value;
            const toDoDescription = document.querySelector("#newToDoDeadline").value;
            const toDoDeadline = document.querySelector("#newToDoDeadline").value;
            const toDoPriority = document.querySelector("#newToDoPriority").value;
    
            const newToDo = generateNewToDoItem(toDoName, toDoDescription, toDoDeadline, toDoPriority);
            currentProject.addToDoItem(newToDo);
            console.log(currentProject.toDoList);
            updateProjectPage(index);
    
            newToDoDialog.close();
        });
    
    });

    const allToDos = document.querySelectorAll(".to-do-item");
    allToDos.forEach((toDo) => {
        const toDoIndex = toDo.dataset.index;
        const currentToDoItem = currentProject.toDoList[toDoIndex];

        const checkbox = toDo.querySelector(".to-do-checkbox");
        checkbox.addEventListener("change", () => {
            currentToDoItem.complete = checkbox.checked ? true : false;
        });

        const editToDoOpen = toDo.querySelector(".edit-to-do-open");
        editToDoOpen.addEventListener("click", () => {
            console.log(currentToDoItem);
        })
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

document.addEventListener("DOMContentLoaded", () => {
    const newProjectOpenBtn = document.querySelector("#new-project-open");
    newProjectOpenBtn.addEventListener("click", () => {
        generateNewProjectDialog();

        const newProjectDialog = document.querySelector("#new-project-dialog");
        newProjectDialog.showModal();

        const newProjectCloseBtn = document.querySelector("#new-project-close");
        newProjectCloseBtn.addEventListener("click", () => {
            newProjectDialog.close();
        });
        
        const newProjectSaveBtn = document.querySelector("#new-project-save");
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
            newProjectDialog.close();
        });
    });
});

updateProjectPage(0);
updateNav()