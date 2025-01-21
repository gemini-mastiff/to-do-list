import closeBtnSvg from "../svg/window-close.svg";
import editBtnSvg from "../svg/dots-horizontal.svg";
import toDoBtnSvg from "../svg/plus.svg";

const navList = document.querySelector("#nav-projects-list");
const content = document.querySelector("#content");
const dialog = document.querySelector("#dialog");


function clearElement(element) {
    element.textContent = '';
}


function newInputElement(text, name, type, defaultValue = '') {
    const wrapper = document.createElement("div");
    wrapper.classList.add("input-wrapper");

    const label = document.createElement("label");
    label.textContent = `${text}:`;
    label.htmlFor = name;

    const input = document.createElement("input");
    input.type = type;
    input.name = name;
    input.id = name;
    input.defaultValue = defaultValue;

    wrapper.append(label, input);
    return wrapper;
}

function newTextAreaElement(text, name, rows, defaultValue = '') {
    const wrapper = document.createElement("div");
    wrapper.classList.add("input-wrapper");

    const label = document.createElement("label");
    label.textContent = `${text}:`;
    label.htmlFor = name;

    const textarea = document.createElement("textarea");
    textarea.rows = rows;
    textarea.name = name;
    textarea.id = name;
    textarea.defaultValue = defaultValue;

    wrapper.append(label, textarea);
    return wrapper;
}

function newSelectElement(text, name, optionsArray) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("input-wrapper");

    const label = document.createElement("label");
    label.textContent = `${text}:`;
    label.htmlFor = name;

    const select = document.createElement("select");
    select.name = name;
    select.id = name;

    optionsArray.forEach((option) => {
        const selectItem = document.createElement("option");
        selectItem.value = option;
        selectItem.textContent = option;

        select.append(selectItem);
    })

    wrapper.append(label, select);
    return wrapper;
}


function generateNewProjectDialog() {
    const newProjectDialog = document.createElement("dialog");
    newProjectDialog.classList.add("modal");
    newProjectDialog.id = "new-project-dialog";

    const closeDialogBtn = document.createElement("img");
    closeDialogBtn.src = closeBtnSvg;
    closeDialogBtn.classList.add("close-button")
    closeDialogBtn.alt = "Close Button";
    closeDialogBtn.id = "new-project-close";

    const dialogHeader = document.createElement("h2");
    dialogHeader.textContent = "Edit Project";

    const dialogForm = document.createElement("form");
    dialogForm.id = "new-project-form"
    dialogForm.method = "dialog";

    const projectName = newInputElement("Project Name", "newProjectName", "text");

    const projectDescription = newTextAreaElement("Description", "newProjectDescription", "4");

    const projectDeadline = newInputElement("Deadline", "newProjectDeadline", "datetime-local");

    const saveProjectBtn = document.createElement("button");
    saveProjectBtn.textContent = "Save";
    saveProjectBtn.id = "new-project-save";

    newProjectDialog.addEventListener("close", () => {
        clearElement(dialog);
    });

    dialogForm.append( projectName, projectDescription, projectDeadline, saveProjectBtn );

    newProjectDialog.append( closeDialogBtn, dialogHeader, dialogForm );
    dialog.append(newProjectDialog);
}

function generateEditProjectDialog(project) {
    const editProjectDialog = document.createElement("dialog");
    editProjectDialog.classList.add("modal");
    editProjectDialog.id = "edit-project-dialog";

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

    const projectName = newInputElement("Project Name", "newProjectName", "text", project.name);

    const projectDescription = newTextAreaElement("Description", "newProjectDescription", "4", project.description);

    const projectDeadline = newInputElement("Deadline", "newProjectDeadline", "datetime-local", project.deadline);

    const saveProjectBtn = document.createElement("button");
    saveProjectBtn.textContent = "Save";
    saveProjectBtn.id = "edit-project-save";

    editProjectDialog.addEventListener("close", () => {
        clearElement(dialog);
    })

    dialogForm.append( projectName, projectDescription, projectDeadline, saveProjectBtn );

    editProjectDialog.append( closeDialogBtn, dialogHeader, dialogForm );
    dialog.append(editProjectDialog);
}

function generateNewToDoDialog() {
    const newToDoDialog = document.createElement("dialog");
    newToDoDialog.classList.add("modal");
    newToDoDialog.id = "new-to-do-dialog";

    const closeDialogBtn = document.createElement("img");
    closeDialogBtn.src = closeBtnSvg;
    closeDialogBtn.classList.add("close-button")
    closeDialogBtn.alt = "Close Button";
    closeDialogBtn.id = "new-to-do-close";

    const dialogHeader = document.createElement("h2");
    dialogHeader.textContent = "New To-Do";

    const dialogForm = document.createElement("form");
    dialogForm.id = "new-to-do-form"
    dialogForm.method = "dialog";

    const toDoName = newInputElement("Task", "newToDoName", "text");

    const toDoDescription = newTextAreaElement("Description", "newToDoDescription", "4");

    const toDoDeadline = newInputElement("Deadline", "newToDoDeadline", "datetime-local");

    const toDoPriority = newSelectElement("Priority", "newToDoPriority", ["High", "Low", "Daily", "Anytime"]);

    const bottomRow = document.createElement("div");
    bottomRow.classList.add("bottom-row");
    bottomRow.append( toDoDeadline, toDoPriority )

    const saveProjectBtn = document.createElement("button");
    saveProjectBtn.textContent = "Save";
    saveProjectBtn.id = "new-to-do-save";

    newToDoDialog.addEventListener("close", () => {
        clearElement(dialog);
    })

    dialogForm.append( toDoName, toDoDescription, bottomRow, saveProjectBtn );

    newToDoDialog.append( closeDialogBtn, dialogHeader, dialogForm );
    dialog.append( newToDoDialog );
}

function generateEditToDoDialog() {}


function generateProjectPage(projects, index) {
    clearElement(content);

    const project = projects[index];
    const toDoArray = project.toDoList;

    const wrapper = document.createElement("div");
    wrapper.classList.add("project-page-wrapper");

    const titleWrapper = document.createElement("div");
    titleWrapper.classList.add("title-wrapper");
    const projectHeader = document.createElement("h1");
    projectHeader.textContent = project.name;
    const editProjectBtn = document.createElement("img");
    editProjectBtn.src = editBtnSvg;
    editProjectBtn.alt = "Edit Project";
    editProjectBtn.classList.add("edit-project-button");
    editProjectBtn.id = "edit-project-open";
    const projectDesc = document.createElement("p");
    projectDesc.textContent = project.description;
    const newProjectDeadline = document.createElement("p");
    newProjectDeadline.textContent = `Due: ${project.deadline}`;

    projectHeader.append(editProjectBtn);
    titleWrapper.append(projectHeader, newProjectDeadline, projectDesc);

    const toDoList = document.createElement("ul");
    toDoList.classList.add("to-do-list");

    toDoArray.forEach((toDo) => {
        const toDoIndex = toDoArray.indexOf(toDo);

        const listItem = document.createElement("li");
        listItem.setAttribute("data-index", toDoIndex);
        listItem.classList.add("to-do-item");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "to-do-checkbox";
        checkbox.checked = toDo.complete ? true : false;

        const header = document.createElement("h2");
        header.textContent = toDo.name;

        const deadline = document.createElement("p");
        deadline.textContent = toDo.deadline;

        const editToDoBtn = document.createElement("img");
        editToDoBtn.src = editBtnSvg;
        editToDoBtn.alt = "Edit To-Do";
        editToDoBtn.classList.add("edit-to-do-open");

        listItem.append(checkbox, header, deadline, editToDoBtn);
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

    content.append(wrapper);
}

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

export { generateProjectPage, generateNavprojects, generateNewProjectDialog, generateEditProjectDialog, generateNewToDoDialog }