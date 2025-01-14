import closeBtnSvg from "../svg/window-close.svg";
import editBtnSvg from "../svg/dots-horizontal.svg";

const navList = document.querySelector("#nav-projects-list");
const content = document.querySelector("#content");

function clearElement(element) {
    element.textContent = '';
}

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
    projectHeader.textContent = project.name;
    editProjectBtn.src = editBtnSvg;
    editProjectBtn.alt = "Edit Project Button";
    editProjectBtn.classList.add("edit-project-button");
    editProjectBtn.id = "edit-project-open";
    projectDesc.textContent = project.description;
    projectHeader.append(editProjectBtn);
    titleWrapper.append(projectHeader, projectDesc);

    const toDoList = document.createElement("ul");
    toDoList.classList.add("to-do-list");

    toDoArray.forEach((toDo) => {
        const listItem = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        const header = document.createElement("h2");
        header.textContent = toDo.name;

        const deadline = document.createElement("p");
        deadline.textContent = toDo.deadline;

        listItem.append(checkbox, header, deadline);
        toDoList.append(listItem);
    });

    wrapper.append(titleWrapper, toDoList);

    const dialog = document.createElement("dialog");
    dialog.classList.add("modal");
    dialog.id = "edit-project-modal";

    const closeDialogBtn = document.createElement("img");
    closeDialogBtn.src = closeBtnSvg;
    closeDialogBtn.alt = "Close Button";
    closeDialogBtn.id = "edit-project-close";

    const dialogHeader = document.createElement("h2");
    dialogHeader.textContent = "Edit Project";

    const dialogForm = document.createElement("form");
    dialogForm.method = "form";

    // NEEDS CLEANING UP!!
    const nameLabel = document.createElement("label");
    nameLabel.textContent = "Project Name:";
    nameLabel.for = "projectName";
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.name = "projectName";
    nameInput.id = "projectName";

    const descriptionLabel = document.createElement("label");
    descriptionLabel.textContent = "Description:";
    descriptionLabel.for = "projectDescription";
    const descriptionInput = document.createElement("textarea");
    descriptionInput.rows = "4";
    descriptionInput.name = "projectDescription";
    descriptionInput.id = "projectDescription";

    const deadlineLabel = document.createElement("label");
    deadlineLabel.textContent = "Deadline:";
    deadlineLabel.for = "projectDeadline";
    const deadlineInput = document.createElement("input");
    deadlineInput.type = "datetime-local";
    deadlineInput.name = "projectDeadline";
    deadlineInput.id = "projectDeadline";

    const saveProjectBtn = document.createElement("button");
    saveProjectBtn.id = "edit-project-save";
    saveProjectBtn.setAttribute("data-index", index);

    dialogForm.append(nameLabel, nameInput,descriptionLabel, descriptionInput, deadlineLabel, deadlineInput, saveProjectBtn);

    dialog.append(closeDialogBtn, dialogHeader, dialogForm);

    content.append(wrapper, dialog);
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
        <label for="projectName">Project Name:</label>
        <input type="text" name="projectName" id="projectName">
        <label for="projectDescription">Description:</label>
        <textarea rows="3" name="projectDescription" id="projectDescription"></textarea>
        <label for="projectDeadline">Deadline:</label>
        <input type="datetime-local" name="projectDeadline" id="projectDeadline">
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