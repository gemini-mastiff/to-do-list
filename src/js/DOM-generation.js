import closeBtnSvg from "../svg/window-close.svg";
import editBtnSvg from "../svg/dots-horizontal.svg";
import toDoBtnSvg from "../svg/plus.svg";

const navList = document.querySelector("#nav-projects-list");
const content = document.querySelector("#content");

function clearElement(element) {
    element.textContent = '';
}

function generateEditProjectDialog(project, index) {
    const dialog = document.createElement("dialog");
    dialog.classList.add("modal");
    dialog.id = "edit-project-modal";

    const closeDialogBtn = document.createElement("img");
    closeDialogBtn.src = closeBtnSvg;
    closeDialogBtn.classList.add("close-button")
    closeDialogBtn.alt = "Close Button";
    closeDialogBtn.id = "edit-project-close";

    const dialogHeader = document.createElement("h2");
    dialogHeader.textContent = "Edit Project";

    const dialogForm = document.createElement("form");
    dialogForm.id = "edit-project-form"
    dialogForm.method = "dialog";

    // NEEDS CLEANING UP!!
    const nameLabel = document.createElement("label");
    nameLabel.textContent = "Project Name:";
    nameLabel.for = "newProjectName";
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.name = "newProjectName";
    nameInput.id = "newProjectName";
    nameInput.defaultValue = project.name;

    const descriptionLabel = document.createElement("label");
    descriptionLabel.textContent = "Description:";
    descriptionLabel.for = "newProjectDescription";
    const descriptionInput = document.createElement("textarea");
    descriptionInput.rows = "4";
    descriptionInput.name = "newProjectDescription";
    descriptionInput.id = "newProjectDescription";
    descriptionInput.defaultValue = project.description;

    const deadlineLabel = document.createElement("label");
    deadlineLabel.textContent = "Deadline:";
    deadlineLabel.for = "newProjectDeadline";
    const deadlineInput = document.createElement("input");
    deadlineInput.type = "datetime-local";
    deadlineInput.name = "newProjectDeadline";
    deadlineInput.id = "newProjectDeadline";
    deadlineInput.defaultValue = project.deadline;

    const saveProjectBtn = document.createElement("button");
    saveProjectBtn.textContent = "Save";
    saveProjectBtn.id = "edit-project-save";
    saveProjectBtn.setAttribute("data-index", index);

    dialogForm.append( nameLabel, nameInput, descriptionLabel, descriptionInput, deadlineLabel, deadlineInput, saveProjectBtn );

    dialog.append( closeDialogBtn, dialogHeader, dialogForm );

    return dialog;
}

//function generateNewToDoDialog()

function generateProjectPage(projects, index) {
    clearElement(content)
    const project = projects[index];

    const toDoArray = project.toDoList;

    const wrapper = document.createElement("div");
    wrapper.classList.add("project-page-wrapper");

    const titleWrapper = document.createElement("div");
    titleWrapper.classList.add("title-wrapper");
    const projectHeader = document.createElement("h1");
    const editProjectBtn = document.createElement("img");
    const projectDesc = document.createElement("p");
    const newProjectDeadline = document.createElement("p");
    projectHeader.textContent = project.name;
    editProjectBtn.src = editBtnSvg;
    editProjectBtn.alt = "Edit Project";
    editProjectBtn.classList.add("edit-project-button");
    editProjectBtn.id = "edit-project-open";
    projectDesc.textContent = project.description;
    newProjectDeadline.textContent = `Due: ${project.deadline}`;
    projectHeader.append(editProjectBtn);
    titleWrapper.append(projectHeader, newProjectDeadline, projectDesc);

    const toDoList = document.createElement("ul");
    toDoList.classList.add("to-do-list");

    toDoArray.forEach((toDo) => {
        const listItem = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = toDo.complete ? true : false;

        const header = document.createElement("h2");
        header.textContent = toDo.name;

        const deadline = document.createElement("p");
        deadline.textContent = toDo.deadline;

        listItem.append(checkbox, header, deadline);
        toDoList.append(listItem);
    });

    const newToDoBtn = document.createElement("button");
    newToDoBtn.id = "new-to-do-open";
    const newToDoIcon = document.createElement("img");
    newToDoIcon.src = toDoBtnSvg;
    newToDoIcon.alt = "Add To-Do";
    const newToDoP = document.createElement("p");
    newToDoP.textContent = "Add To-Do";
    newToDoBtn.append(newToDoIcon, newToDoP);

    wrapper.append(titleWrapper, toDoList, newToDoBtn);

    const editProjectDialog = generateEditProjectDialog(project, index);

    content.append(wrapper, editProjectDialog);
}

{/* 
The above fuction generates:

<div id="content">
    <div class="project-page-wrapper">
        <div class="title-wrapper">
            <h1>Project Title</h1>
            <img src="./svg/dots-horizontal.svg" alt"Edit Project" id="edit-project-open" class="edit-project-button">
            <p>This is the description of the Project.</p>
        </div>
        <ul class="to-do-list">
            <li>
                <input type="checkbox">
                <h2>To Do 1</h2>
                <p>11 Jan 13:00</p>
            </li>
            <li>
                <input type="checkbox">
                <h2>To Do 2</h2>
                <p>18 Feb 21:30</p>
            </li>
            <li>
                <input type="checkbox">
                <h2>To Do 3</h2>
                <p>25 Dec</p>
            </li>
        </ul>
    </div>
</div>

<dialog class="modal" id="edit-project-modal">
    <img src="./svg/window-close.svg" alt="Close Button" id="edit-project-close" class="close-button">
    <h2>Edit Project</h2>
    <form method="dialog">
        <label for="newProjectName">Project Name:</label>
        <input type="text" name="newProjectName" id="newProjectName">
        <label for="newProjectDescription">Description:</label>
        <textarea rows="3" name="newProjectDescription" id="newProjectDescription"></textarea>
        <label for="newProjectDeadline">Deadline:</label>
        <input type="datetime-local" name="newProjectDeadline" id="newProjectDeadline">
        <button id="edit-project-save" data-index="x" >Save</button>
    </form>
</dialog>

*/}

function generateNavprojects(projects) {
    clearElement(navList);

    projects.forEach((project) => {
        const navProject = document.createElement("div");
        navProject.classList.add("nav-project");

        const index = projects.indexOf(project);
        navProject.setAttribute("data-index", index);

        navProject.textContent = project.name;

        navList.append(navProject)

    });
}

{/* 
The above function generates:

<div id="nav-projects-list">
    <div class="nav-project" data-index="0">Create a to-do list app</div>
    <div class="nav-project" data-index="1">Learn German</div>
</div>
*/}

export { generateProjectPage, generateNavprojects }