import {
  projects,
  generateNewProject,
  generateNewToDoItem,
} from "./js/app-logic";
import {
  generateProjectPage,
  generateNavprojects,
  generateNewProjectDialog,
  generateEditProjectDialog,
  generateNewToDoDialog,
  generateEditToDoDialog,
} from "./js/DOM-generation.js";
import saveData from "./js/savaData.js";
import "./styles.css";

console.log(projects.getProjectsArray());

function updateProjectPage(index) {
  saveData(projects.getProjectsArray());

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
      currentProject.description = document.querySelector(
        "#newProjectDescription"
      ).value;
      currentProject.deadline = document.querySelector(
        "#newProjectDeadline"
      ).value;

      updateNav();
      updateProjectPage(index);
      editProjectDialog.close();
    });
  });

  const delProjectBtn = document.querySelector("#delete-project-button");
  delProjectBtn.addEventListener("click", () => {
    projects.delProject(index);
    updateNav();
    updateProjectPage(0);
    console.log(projects.getProjectsArray());
  });

  const newToDoOpenBtn = document.querySelector("#new-to-do-open");
  newToDoOpenBtn.addEventListener("click", () => {
    generateNewToDoDialog();

    const newToDoDialog = document.querySelector("#new-to-do-dialog");
    newToDoDialog.showModal();

    const newToDoCloseBtn = document.querySelector("#new-to-do-close");
    newToDoCloseBtn.addEventListener("click", () => {
      newToDoDialog.close();
    });

    const newToDoSaveBtn = document.querySelector("#new-to-do-save");
    newToDoSaveBtn.addEventListener("click", (event) => {
      event.preventDefault();

      const toDoName = document.querySelector("#newToDoName").value;
      const toDoDescription = document.querySelector("#newToDoDeadline").value;
      const toDoDeadline = document.querySelector("#newToDoDeadline").value;
      const toDoPriority = document.querySelector("#newToDoPriority").value;

      const newToDo = generateNewToDoItem(
        toDoName,
        toDoDescription,
        toDoDeadline,
        toDoPriority
      );
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
      generateEditToDoDialog(currentToDoItem);

      const editToDoDialog = document.querySelector("#edit-to-do-dialog");
      editToDoDialog.showModal();

      const editToDoCloseBtn = document.querySelector("#edit-to-do-close");
      editToDoCloseBtn.addEventListener("click", () => {
        editToDoDialog.close();
      });

      const editToDoSaveBtn = document.querySelector("#edit-to-do-save");
      editToDoSaveBtn.addEventListener("click", (event) => {
        event.preventDefault();

        currentToDoItem.name = document.querySelector("#newToDoName").value;
        currentToDoItem.description = document.querySelector(
          "#newToDoDescription"
        ).value;
        currentToDoItem.deadline =
          document.querySelector("#newToDoDeadline").value;
        currentToDoItem.priority =
          document.querySelector("#newToDoPriority").value;

        updateProjectPage(index);
        editToDoDialog.close();
      });
    });

    const delToDoBtn = toDo.querySelector(".delete-to-do-button");
    delToDoBtn.addEventListener("click", () => {
      currentProject.delToDoItem(toDoIndex);
      console.log(currentProject.toDoList);
      updateProjectPage(index);
    });
  });
}

function updateNav() {
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
  updateProjectPage(0);
  updateNav();

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

      const projectName = document.querySelector("#newProjectName").value;
      const projectDesc = document.querySelector(
        "#newProjectDescription"
      ).value;
      const projectDeadline = document.querySelector(
        "#newProjectDeadline"
      ).value;

      const newProject = generateNewProject(
        projectName,
        projectDesc,
        projectDeadline
      );
      projects.addProject(newProject);
      console.log(projects.getProjectsArray());

      updateNav();
      updateProjectPage(projects.getProjectsArray().indexOf(newProject));
      newProjectDialog.close();
    });
  });
});
